module.exports = function (md, opts) {
	md.core.ruler.after('inline', 'image-attrs', function (state) {
		state.tokens.forEach(function (blockToken) {
			if (blockToken.type === 'html_block') {
				replaceHTML(blockToken, addLoadingAttr, state.env);
			}
			if (blockToken.type === 'inline' && blockToken.children) {
				blockToken.children.forEach(function (token) {
					const type = token.type;
					if (type === 'html_inline') {
						replaceHTML(token, addLoadingAttr, state.env);
					}
					if (type === 'image') {
						const src = token.attrGet('src');
						if (!token.attrGet('loading') && matchSrc(src)) {
							token.attrPush(['loading', 'lazy']);
						}
					}
				});
			}
		});
		return false;
	});
};

/**
 *
 * @param {Record<string,any>} attribs
 */
function addLoadingAttr(attribs) {
	if (matchSrc(attribs.src) && !attribs.loading) {
		attribs.loading = 'lazy';
	}
}

/**
 *
 * @param {string} [src] img src
 * @returns
 */
function matchSrc(src) {
	return typeof src === 'string'
		? src.indexOf('qiniu-web-assets.dcloud.net.cn') > -1
		: false;
}

function replaceNodes(nodes, replace, env, token) {
	if (!nodes) return;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		if (node.attribs) {
			if (node.name === 'img' && node.attribs.src) {
				replace(node.attribs);
			}
		}
		replaceNodes(node.children, replace, env, token);
	}
}

function replaceHTML(token, replace, env) {
	const htmlparser = require('htmlparser2');
	const serializer = require('dom-serializer');
	const dom = new htmlparser.parseDocument(token.content, {
		recognizeCDATA: true,
		recognizeSelfClosing: true,
	});
	replaceNodes(dom.children, replace, env, token);
	token.content = serializer.render(dom, { encodeEntities: 'utf8' });
}
