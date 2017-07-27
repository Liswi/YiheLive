<template>
	<div class="logon_warp">
		<Title :con='cons'></Title>
		<div class="logon_contents">
			<p>1、若您还没有易和账号，请点击<router-link to="">注册</router-link>，详细操作步骤如下： </p>
			<div class="images1"></div>
			<p>2、 进入到注册页面，请填写您的邮箱、手机等信息完成注册；</p>
			<div class="images2"></div>
		</div>
	</div>
</template>

<script>
	import Title from "./title"
	export default {
		name: "",
		components:{
			Title
		},
		data (){
			return {
				cons:{
					con_title:"新用户注册",
					con_classify:"分类：新用户注册",
					con_date:"日期：2017年7月24日"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.logon_warp{
		width: 983px;
		height: 1400px;
		float: left;
		position: relative;
		border: 1px solid #D3D3D3;
		background-color: white;
		.logon_contents{
			margin: 50px 60px 0;
			font-size: 16px;
			color: #666666;
			a{
				color: #008EE2;
				text-decoration:underline;
			}
			.images1{
				width: 815px;
				height: 178px;
				border: 1px solid #D3D3D3;
				margin: 0 auto;
				margin-top: 40px;
				margin-bottom: 75px;
				background: url(../img/img01.png) no-repeat 2px 2px;
				background-size: contain;
			}
			.images2{
				width: 358px;
				height: 540px;
				border: 1px solid #D3D3D3;
				margin: 0 auto;
				margin-top: 75px;
				background: url(../img/img02.png) no-repeat 1px 1px;
				background-size: contain;
			}
		}
	}
</style>