function normalizeMD (md) {
  if (typeof md === 'string') {
    return md
      .replace(/(?<!\\)</g, '\\<')
      .replace(/]([^(])|(?<!\\)]$/g, '\\]$1')
      .replace(/(?<!\\)\|/g, '\\|')
  }
  return md
}

function resolveSubtable(md, tokens = [], tokenIndexes = [], flags) {
	if (tokens.length && tokenIndexes.length) {
		tokenIndexes.forEach(tokenIndex => {
			if (Array.isArray(tokenIndex) && tokenIndex.length > 2) {
				const tableOpenIndex = tokenIndex.shift();
				const tableCloseIndex = tokenIndex.pop();
				let deleteOffset = 0;

				tokenIndex.forEach(subtableIndexes => {
					const subtableOpenIndex = subtableIndexes.shift() + deleteOffset;
					const subtableColumnCount = (subtableIndexes[0] + deleteOffset - subtableOpenIndex - 2) / 3 - 1;
					const subtableCloseIndex = subtableIndexes.pop() + deleteOffset + subtableColumnCount * 3;
					const subtableTokens = tokens.slice(subtableOpenIndex - 1, subtableCloseIndex + 1);

					// 2 table token 新行开始时固定的 tr_open td_open 数量
					// 3 每个 inline 都会伴随一个 td_close、td_open（行最后一列 inline 会伴随 td_close tr_close）
					// 1 为 flag ->（标识符） 的列，需要去掉
					let tableColumnCount = 0;
					for (let i = 0; i < tableCloseIndex; i++) {
						const token = tokens[i];
						if (i < subtableOpenIndex) {
							if (token.type === 'th_open') {
								tableColumnCount++;
							} else if (token.type === 'thead_close') {
								break;
							}
						}
					}

					let subtableMD = subtableTokens
						.map(token => {
							if (token.type === 'inline' && !flags.includes(token.content)) {
								return normalizeMD(token.content);
							} else if (token.type === 'tr_close') {
								return '\n';
							}
						})
						.filter(Boolean);
					const subtableLevel = subtableTokens[0].level;
					const newTokens = md.parse(`|${subtableMD.join('|')}|`);
					newTokens.forEach(token => {
						token.content = ''; // 和 children 内容重复
						token.level = token.level + subtableLevel;
					});
					newTokens[0].attrJoin('style', 'overflow-x: visible;margin: auto;');
					const childrenTableTokenIndex = subtableOpenIndex - 2;
					const subtablePrevTrOpenIndex = childrenTableTokenIndex - tableColumnCount * 3 - 2;
					tokens[tableOpenIndex].attrJoin('class', 'have-children-table'); // table
					tokens[subtablePrevTrOpenIndex].attrJoin('class', 'have-children-tr'); // table tr_open

					// table td_open
					const haveChildrenTrTdToken = tokens[subtablePrevTrOpenIndex + 1];
					haveChildrenTrTdToken.attrJoin('class', 'have-children-tr-td');
					haveChildrenTrTdToken.attrJoin('style', ';text-wrap: nowrap');

					tokens[childrenTableTokenIndex].attrJoin('class', 'children-table'); // subtable tr_open
					tokens[childrenTableTokenIndex].attrJoin('hidden', ''); // subtable tr_open

					tokens[subtableOpenIndex - 1].attrJoin('colspan', tableColumnCount); // subtable td_open
					const deleteCount = subtableCloseIndex - subtableOpenIndex + 1;
					tokens.splice(subtableOpenIndex, deleteCount, ...newTokens);
					deleteOffset = deleteOffset + newTokens.length - deleteCount;
				});
			}
		});
	}
}

function process(md, tokens, flags = ['->']) {
	const subtableMinTokenCount = 3;
	if (
		Array.isArray(tokens) &&
		tokens.length &&
		tokens.some(token => token.content.includes('->') && token.type === 'inline')
	) {
		const tableOpenTokenIndex = tokens.findIndex(token => token.type === 'table_open');
		if (tableOpenTokenIndex > -1) {
			/**
			 * [
			 * 	table_open index,
			 * 	[] // subtable indexes,
			 * 	table_close index
			 * ]
			 */
			let tableTokensIndexes = [[]];
			let tableIndex = 0;
			let subtableIndex = 1;
			tokens.forEach((token, index) => {
				if (token.type === 'table_open' && tableTokensIndexes[tableIndex].length === 0) {
					tableTokensIndexes[tableIndex].push(index);
				}
				if (tableTokensIndexes[tableIndex] && typeof tableTokensIndexes[tableIndex][0] !== 'undefined') {
					if (token.type === 'inline') {
						if (flags.find(flag => new RegExp(`^\\s*${flag}\\s*$`).test(token.content))) {
							(
								tableTokensIndexes[tableIndex][subtableIndex] || (tableTokensIndexes[tableIndex][subtableIndex] = [])
							).push(index);
						} else if (tokens[index - 2].type === 'tr_open') {
							tableTokensIndexes[tableIndex][++subtableIndex] = [];
						}
					}
				}
				if (token.type === 'table_close') {
					subtableIndex = 1;
					tableTokensIndexes[tableIndex].push(index);
					tableTokensIndexes[++tableIndex] = [];
				}
			});
			tableTokensIndexes.forEach((subtableTokensIndex, index) => {
				tableTokensIndexes[index] = subtableTokensIndex.filter(
					i => typeof i === 'number' || (Array.isArray(i) && i.length >= subtableMinTokenCount)
				);
			});
			tableTokensIndexes = tableTokensIndexes.filter(i => i.length);
			if (tableTokensIndexes.length) {
				resolveSubtable(md, tokens, tableTokensIndexes, flags);
			}
		}
	}
}

module.exports = {
	process,
	markdownIt: function subTablePlugin(md, { flags = ['->'] } = {}) {
		md.core.ruler.after(
			'inline',
			'subtable',
			(state, startLine, endLine, silent) => {
				process(md, state.tokens, flags);
			},
			{
				alt: ['paragraph', 'reference'],
			}
		);
	},
};
