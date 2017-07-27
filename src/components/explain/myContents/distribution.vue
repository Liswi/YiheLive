<template>
	<div class="distribution_warp">
		<Title :con='cons'></Title>
		<div class="contents">
			<p>1、消费者到店消费</p>
			<p>2、快递产品由卖家快递发货</p>
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
					con_title:"配送方式",
					con_classify:"分类：配送方式",
					con_date:"日期：2017年7月24日"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
		.distribution_warp{
		width: 983px;
		height: 1400px;
		float: left;
		position: relative;
		border: 1px solid #D3D3D3;
		background-color: white;
		.contents{
			margin: 30px 60px 0;
			font-family: tahoma, 微软雅黑;
			font-size: 14px;
			color: #666;
		}
		p{
			margin-bottom: 30px;
		}
	}
</style>