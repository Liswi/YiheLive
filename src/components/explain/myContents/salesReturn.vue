<template>
	<div class="salesReturn_warp">
		<Title :con='cons'></Title>
		<div class="contents">
			<p v-for="item in txt">{{item.texts}}</p>
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
					con_title:"退换货规则",
					con_classify:"分类：退换货规则",
					con_date:"日期：2017年7月24日"
				},
				txt:[{texts:" 一、买家自付款之时起即可申请退款。自买家申请退款之时起两天内卖家仍未点击发货的，易和退款给买家。"},{texts:"		自卖家在易和网确认发货之时起，买家未确认收货且未申请退款的，易和打款给卖家。"},{texts:"二、买家申请退款后，依以下情况分别处理："},{texts:"1)卖家拒绝退款的，买家有权修改退款协议、要求易和介入或确认收货。买家在卖家拒绝退款后七天内未操作的，退款流程关闭，交易正常进行；"},{texts:"2)卖家同意退款或在五天内未操作的，且不要求买家退货的，易和通知卖家退款给买家；"},{texts:"3)卖家同意退款或五天内未操作的，且要求买家退货的，则按以下情形处理："},{texts:"A买家未在七天内点击退货的，退款流程关闭，交易正常进行；"},{texts:"B买家在七天内点击退货，且卖家确认收货的，易和退款给买家；"},{texts:"C买家在七天内点击退货，通过快递退货十天内、平邮退货三十天内，卖家未确认收货的，易和通知易和退款给买家。"},{texts:"三、 若买家发起的退款申请在三天后尚未完结的，买家可要求易和介入。"},{texts:"四、买家在交易成功后，若发现卖家有描述不符或违背承诺的情形，可在十五天内任意时间要求易和介入。"}]
			}
		}
	}
</script>

<style lang="less" scoped>
		.salesReturn_warp{
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
		}
		p{
			margin-bottom: 30px;
			line-height: 30px;
		}
	}
</style>