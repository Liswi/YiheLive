<template>
	<div class="bg">
		<div class="box">
			<div class="box_top">
				<span class="success"></span> 已成功加入购物车
			</div>
			<div class="btn">
				<span class="but" @click="goback">继续购物</span>
				<span class="but r">查看购物车</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		methods: {
			goback(){
				this.$emit("close")
			}
		}
	}
</script>

<style lang="less" scoped>
	.bg{
		position: fixed;
		width: 1920px;
		height: 1080px;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .2);
		.box{
			position: fixed;
			border: 5px solid #E2E2E2;
			width: 655px;
			height: 315px;
			top: 50%;
			left: 50%;
			margin: -157px 0 0 -327px;
			background: #FFFFFF;
			.box_top{
				height: 45px;
				line-height: 45px;
				font-size: 23px;
				color: #6D6D6D;
				margin-top: 80px;
				.success{
					vertical-align: middle;
					display: inline-block;
					margin-right: 10px;
					width: 45px;
					height: 45px;
					background: url(./img/download.png);
					background-position: -222px -446px;
				}
			}
			.btn{
				margin-top: 55px;
				.but{
					display: inline-block;
					background: #FFAD7D;
					border-radius: 5px;
					margin: 0 20px;
					padding: 0 45px;
					color: #FFFFFF;
					font-size: 20px;
					height: 45px;
					line-height: 45px;
					font-weight: 100;
				}
				.r{
					background: #F46B2B;
				}
			}
		}
	}
</style>