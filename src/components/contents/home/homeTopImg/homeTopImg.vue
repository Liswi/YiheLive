<template>
	<div class="home_top_img">
		<div class="cover">
			<div>
				<a href=""><img src="./img/home-top-1.png" /></a>
			</div>
			<div>
				<a href=""><img src="./img/home-top-2.png" /></a>
			</div>
			<div>
				<a href=""><img src="./img/home-top-3.png" /></a>
			</div>
			<div>
				<a href=""><img src="./img/home-top-4.png" /></a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.home_top_img {
		width: 100%;
		margin: 10px 0 30px;
		overflow: hidden;
		.cover {
			width: 5000px;
			overflow: hidden;
			div {
				width: 290px;
				height: 160px;
				vertical-align: top;
				margin-right: 9px;
				float: left;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>