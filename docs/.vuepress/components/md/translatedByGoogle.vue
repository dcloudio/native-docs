<template>
	<div v-if="$themeConfig.isEn" class="devsite-banner devsite-banner-translated">
		<div class="devsite-banner-message">
			<div class="devsite-banner-message-text">
				<span class="devsite-banner-translated-text">
					This page is translated by
					<a href="//cloud.google.com/translate/">Google Cloud Translation API</a>
				</span>
			</div>
			<a :href="chineseHref" class="button" data-label="Switch to Chinese">Switch to Chinese</a>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			chineseHref() {
				return 'https://nativesupport-test.dcloud.net.cn' + this.$route.fullPath;
			},
		},
	};
</script>

<style lang="stylus" scoped>
	$small-width = 866px

	.devsite-banner {
		font-size 14px
	}

	.devsite-banner-translated {
		background-color #f5f6f7
		color rgba(0,0,0,0.65)
	}

	.devsite-banner-message {
		display: flex
		margin: 0 auto
		padding 20px 40px
		align-items: center

		@media screen and (max-width: $small-width){
			& {
				padding 10px 20px
				flex-direction: column
				align-items: flex-start
			}
		}

		span {
			@media screen and (max-width: 1600px){
				& {
					display: block
				}
			}
		}

		a {
			white-space: nowrap
			@media screen and (max-width: $small-width){
				& {
					margin-top: 10px
				}
			}
		}

		.button {
			font-size 16px
			display: inline-block
			padding 5px 10px
			background: #fff
			border: 1px solid #f7f7f7
			text-decoration: none !important
			transition: .3s
			border-radius: 5px

			&:hover	{
				background: #e8e8e8
			}
		}
	}

	.devsite-banner-translated-image {
		margin-right 20px
		vertical-align: bottom
	}

	.devsite-banner-message-text {
		margin-inline-end auto
	}
</style>
