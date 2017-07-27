<template>
	<div class="Integral_warp">
		<Title :con='cons'></Title>
		<div class="contents">
			<p v-for="item in txt">{{item.texts}}</p>
			<p class="bom">具体解释权归本公司所有</p>
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
					con_title:"积分介绍",
					con_classify:"分类：积分介绍",
					con_date:"日期：2017年7月24日"
				},
				txt:[{texts:"1.积分是指消费者通过付款购买商品交易成功后所获得的促销活动费用，消费者可按规则在其后与易和平台其他卖家的交易中使用该积分付款，消费者的积分情况以'我的积分'记录为准。"},{texts:"2. 1积分=1元人民币  。所提供的积分，消费者可在所有商家，任意等值使用。"},{texts:"3.消费中不限制积分数的使用。"},{texts:"4.使用积分消费后仍按交易额持续产生积分。"},{texts:"积分的使用方式："},{texts:"1. 商家告知消费者实际交易额后，消费者通过扫描二维码或用户端APP，输入实际交易额和自愿使用积分数进行付款。"},{texts:"2.积分有效期为1年，当年产生的积分次年公历年底前有效，以公历的年、北京时间为准，过期作废；（如若交易在使用的积分有效期之外发生退款，该部分积分予退还）"}]
			}
		}
	}
</script>

<style lang="less" scoped>
		.Integral_warp{
		width: 983px;
		height: 1400px;
		float: left;
		position: relative;
		border: 1px solid #D3D3D3;
		background-color: white;
		.contents{
			margin: 30px 40px 0;
			font-family: tahoma, 微软雅黑;
			font-size: 14px;
			color: #666;
		p{
			margin-bottom: 30px;
			text-indent: 3em;
			line-height: 30px;
		}
		.bom{
			text-align: right;
			padding-right: 50px;
			margin-top: 75px;
			font-size: 12px;
		}
		}
	}
</style>