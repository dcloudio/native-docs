<template>
	<div></div>
</template>

<script>
	export default {
		data() {
			return {
				contentFrame: [],
			};
		},
		mounted() {
			if (this.$isServer) return;
			const visibleHeight =
				document.documentElement.clientHeight - document.querySelector('.sub-navbar').clientHeight;
			const contentRef = document.querySelector('.page .theme-default-content');

			const renderUl = () => {
				const contentChildren = contentRef.children;
				[...contentChildren].forEach((child, index) => {
					if (child.nodeName === 'UL') {
						const ulHeight = child.clientHeight;
						const ulOffsetTop = child.offsetTop;
						const isVisible = visibleHeight + window.scrollY > ulOffsetTop - 500;
						const isOver = window.scrollY > ulOffsetTop + ulHeight
						child.style.height = `${ulHeight}px`;

						if (!isVisible || isOver) {
							const _ul = document.createDocumentFragment();
							[...child.children].forEach(item => _ul.appendChild(item));
							(!this.contentFrame[index] || !this.contentFrame[index].children.length) &&
								(this.contentFrame[index] = _ul);
						} else {
							if (this.contentFrame[index]) {
								[...this.contentFrame[index].children].forEach(item => child.appendChild(item));
							}
						}
					}
				});
			};

			if (contentRef) {
				contentRef.style.height = contentRef.clientHeight;
				renderUl();
				window.addEventListener('scroll', renderUl);
			}
		},
	};
</script>
