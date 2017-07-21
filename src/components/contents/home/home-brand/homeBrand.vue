<template>
	<div class="brand">
		<h1 class="brand_title"><span class="title_s">精选</span><span class="title_s">品牌</span><span>Brand selection</span></h1>
		<div class="brand_cont">
			<div class="brand_left">
				<a href=""><img src="./img/brand-logo.png"/></a>
			</div>
			<BrandList></BrandList>
		</div>
	</div>
</template>

<script>
	import BrandList from "./brandList/brandList"
	export default{
		name:"brand",
		components:{BrandList}
	}
	
</script>

<style lang="less" scoped>
	.brand_title {
		
		text-align: left;
		font-size: 20px;
		.title_s:nth-child(1) {
			font-size: 34px;
			color: rgb(255, 109, 038);
		}
		.title_s:nth-child(2) {
			color: #008cdd;
			font-size: 34px;
			margin-right: 14px;
		}
		
	}
	.brand_cont{		
		margin-top: 30px;
		padding: 10px;
		border: 1px solid #d4d4d4;
		border-top: 3px solid #008CDD;
		overflow: hidden;
		.brand_left{
			float: left;
		}				
	}
</style>