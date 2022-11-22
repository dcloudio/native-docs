<template>
	<div class="banner">
		<div class="slider">
			<span class="slider-btn slider-btn-left"></span>
			<span class="slider-btn slider-btn-right"></span>
			<div class="slider-group">
				<template v-for="item in images">
					<div class="slider-item" :key="item">
						<img :src="item" />
					</div>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	var sliderTime;

	export default {
		data() {
			return {
				images: [
					'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/41136990-4f3e-11eb-8ff1-d5dcf8779628.png',
					'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3ecf6d00-4f3e-11eb-8ff1-d5dcf8779628.png',
					'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3df62400-4f3e-11eb-8ff1-d5dcf8779628.png',
					'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3f872440-4f3e-11eb-8a36-ebb87efcf8c0.png',
					'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/40596860-4f3e-11eb-bdc1-8bd33eb6adaa.png',
				],
			};
		},
		mounted() {
			this.StartBanner();
		},
		beforeDestroy() {
			clearInterval(sliderTime);
		},
		methods: {
			StartBanner() {
				var banner = document.querySelector('.banner'),
					slider = document.querySelector('.slider-group'),
					sliderItems = document.querySelectorAll('.slider-item'),
					sliderLength = sliderItems.length;
				var bannerWidth = null,
					index = 1; //slider下标
				var arrowLeft = document.querySelector('.slider-btn-left'),
					arrowRight = document.querySelector('.slider-btn-right');

				//创建dots
				var sliderDots = document.createElement('div');
				sliderDots.className = 'slider-dots';
				var dots = '<span class="dot active" data-num="0"></span>';
				for (var i = 1; i < sliderLength; i++) {
					dots += '<span class="dot" data-num="' + i + '"></span>';
				}
				sliderDots.innerHTML = dots;
				document.querySelector('.slider').appendChild(sliderDots);

				//在第一个前、最后一个后各加一个item
				var last_item = document.createElement('div'),
					next_item = document.createElement('div');
				last_item.className = 'slider-item';
				last_item.innerHTML = sliderItems[sliderItems.length - 1].innerHTML;
				slider.insertBefore(last_item, sliderItems[0]);
				next_item.className = 'slider-item';
				next_item.innerHTML = sliderItems[0].innerHTML;
				slider.appendChild(next_item);

				sliderItems = document.querySelectorAll('.slider-item');

				function setSlider() {
					bannerWidth = banner.offsetWidth;
					for (var i = 0, length = sliderItems.length; i < length; i++) {
						sliderItems[i].style.width = bannerWidth + 'px';
					}
					slider.style.width = sliderItems.length * bannerWidth + 'px';
					slider.style.transition = 'transform 0ms';
					slider.style.transform = 'translate(' + -index * bannerWidth + 'px, 0px)';
				}
				setSlider();
				window.onresize = setSlider;
				sliderTime = setInterval(sliderStart, 5000);

				function sliderStart() {
					//开始轮播)
					/* if(!~location.pathname.indexOf($docsify.banner)){
							clearInterval(sliderTime);
							return;
					} */
					index += 1;
					if (index < 0 || index > sliderLength + 1) {
						index = index < 0 ? 0 : sliderLength + 1;
					}
					slider.style.transition = 'transform 300ms';
					document.querySelector('.active.dot').classList.remove('active');
					var dotIndex = index > sliderLength ? 0 : index < 1 ? sliderLength - 1 : index - 1;
					sliderDots.children[dotIndex].classList.add('active');
					slider.style.transform = 'translate(' + -index * bannerWidth + 'px, 0px)';
					setTimeout(function () {
						if (index > sliderLength || index < 1) {
							index = index > sliderLength ? 1 : sliderLength;
							slider.style.transition = 'transform 0ms';
							slider.style.transform = 'translate(' + -index * bannerWidth + 'px, 0px)';
						}
					}, 300);
				}
				var mouseClearSlider = false;
				sliderDots.addEventListener('mouseover', function (e) {
					showArrow();
					if (e.target.tagName === 'SPAN') {
						mouseClearSlider = true;
						clearInterval(sliderTime);
						if (e.target.className === 'dot') {
							slider.style.transition = 'transform 300ms';
							document.querySelector('.active.dot').classList.remove('active');
							e.target.classList.add('active');
							index = Number(e.target.dataset.num) + 1;
							slider.style.transform = 'translate(' + -index * bannerWidth + 'px, 0px)';
						}
						return;
					}
					if (mouseClearSlider) {
						mouseClearSlider = false;
						clearInterval(sliderTime);
						sliderTime = setInterval(sliderStart, 5000);
					}
				});
				sliderDots.addEventListener('mouseout', function (e) {
					hideArrow();
					if (mouseClearSlider) {
						mouseClearSlider = false;
						clearInterval(sliderTime);
						sliderTime = setInterval(sliderStart, 5000);
					}
				});
				// 处理 banner 的两个箭头
				document.querySelector('.slider').addEventListener('mouseover', showArrow);
				document.querySelector('.slider').addEventListener('mouseout', hideArrow);
				arrowLeft.addEventListener('mouseover', showArrow);
				arrowLeft.addEventListener('mouseout', hideArrow);
				arrowRight.addEventListener('mouseover', showArrow);
				arrowRight.addEventListener('mouseout', hideArrow);

				function showArrow() {
					//显示箭头
					arrowLeft.style.display = 'block';
					arrowRight.style.display = 'block';
					// 		var scroll_left = document.documentElement.scrollLeft;
					// 		arrowLeft.style.left = scroll_left + "px";
					// 		arrowRight.style.right = document.documentElement.scrollWidth - document.documentElement.clientWidth - scroll_left +
					// 			'px';
				}

				function hideArrow() {
					//隐藏箭头
					arrowLeft.style.display = 'none';
					arrowRight.style.display = 'none';
				}
				arrowLeft.addEventListener('click', function () {
					index -= 2;
					clearInterval(sliderTime);
					sliderStart();
					sliderTime = setInterval(sliderStart, 5000);
				});
				arrowRight.addEventListener('click', function () {
					clearInterval(sliderTime);
					sliderStart();
					sliderTime = setInterval(sliderStart, 5000);
				});
			},
		},
	};
</script>
<style>
	/* banner */
	.banner {
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
	}

	.banner .slider {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.banner .slider-btn {
		position: absolute;
		cursor: pointer;
		width: 41px;
		height: 69px;
		top: 50%;
		transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		z-index: 20;
		display: none;
		background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/d2c41062-9e93-478f-9c06-06778b0f2c84.png);
	}

	.banner .slider-btn.slider-btn-left {
		left: 0;
	}

	.banner .slider-btn.slider-btn-right {
		right: 0;
		background-position-x: 41px;
	}

	.banner .slider-item {
		float: left;
		width: 100%;
	}

	.banner .slider .slider-dots {
		display: none;
		position: absolute;
		line-height: 0;
		left: 50%;
		bottom: 5px;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		text-align: center;
		font-size: 0;
	}

	.banner .slider .dot {
		display: inline-block;
		margin: 0 5px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #ccc;
		cursor: pointer;
	}

	.banner .slider .dot.active {
		width: 30px;
		border-radius: 10px;
		background: rgb(225, 114, 0);
	}
</style>
