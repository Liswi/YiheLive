<template>
	<div class="box_404">
		<div class="whole">
			<div class="images">
				<img src="./img/w404.jpg" alt="" />
			</div>
			<div class="btn">
				<a href="" class="btn1" @click="back">返回上一页面</a>
				<a href="/index" class="btn1 r">返回网站首页</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.box_404 {
		/*border: 1px solid blue;*/
		width: 100%;
		height: 100%;
	.whole {
		/*border: 1px solid red;*/
		width: 80%;
		height: 100%;
		padding:10%;
		margin: 0 auto;
		.images{
			/*border: 1px solid green;*/
			width: 73%;
			margin: 0 auto;
		}
		.images img{
			width: 100%;
		}
		.btn{
			margin-top: 8%;
			height: 45px;
			.btn1{
				display: inline-block;
				background: #ff6c00;
				color: #fff;
				font-size: 16px;
				height: 45px;
				line-height: 45px;
				width: 15%;
				margin: 0 3%;
				border-radius: 5px;
				text-decoration: none;	
			}
			.r{
				background: #008CE1;
			}
		}
	}
	}
	
</style>