<template>
	<div class="headtitle">
		<div>
			<img src="../img/logo.png" alt="" height="80" />
		</div>
		<div class="operate">
			<router-link :to="{name:'Login',params:{city:city}}">登录</router-link>
				<span class="line"></span>
			<router-link to="/register">注册</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"",
		props:["city"],
		created(){
		}
	}
</script>

<style lang="less" scoped>
	.headtitle{
		height: 130px;
		width: 1181px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.operate{
			font-size:19px;
			color:rgba(0,0,0,0.5);
			font-weight:300;
			.line{
				display: inline-block;
				width: 1px;
				height: 20px;
				vertical-align: middle;
				background: rgba(0,0,0,0.3);
				margin: 0 25px;
			}
		}
	}
</style>