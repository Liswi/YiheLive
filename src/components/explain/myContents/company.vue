<template>
	<div class="company_warp">
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
					con_title:"公司简介",
					con_classify:"分类：公司简介",
					con_date:"日期：2017年7月24日"
				},
				txt:[{texts:"易和生活港由易和网络科技有限公司建立，易和网充分发挥互联网在市场经营活动中的功效与作用，通过实施行业全覆盖，达到易和独创的“互联网+雾状市场”弥漫状态。实现消费者“一机在手，走遍天下”的便捷性，真正体验一站式消费的乐趣，享受无孔不入的“互联网+”生活。全面扩大和提升商家的客源、效益及知名度，使平台成为“创业者的助推器，消费者的生活港”。"},{texts:"平台优势"},{texts:"（一）以易和独有的各商家积分通用联动模式，形成行业全覆盖的形态，最大限度解决通常网络平台，单一层面不便捷和局限性问题，例如："},{texts:"1. 商城类平台：只可以线上购买商品，线下实体店无法消费。"},{texts:"2. 实体店消费类平台：虽然线下实体店可以消费，但无线上商城购买功能，覆盖范围又较小；在消费返还和使用积分时有所限制，积分兑换现金的比例也较低；加之促销活动时间短，打半折商家难以承受等。"},{texts:"（二）打破了平台的网络交易格局，达到线上线下消费的无缝式连接，不仅可以在平台上网购商品，也可以在线下实体店，通过用户端APP进行消费，获得积分。排除以往网络模式中团购打折方式，积分消费更具有灵活性和持续性，"},{texts:"贯穿始终完成互动组合消费，形成了线上，线下均可使用的综合性交易平台"},{texts:"（三）消费者的获益"},{texts:" 1. 消费者加入易和平台，最直接的好处就是省钱省时。在易和消费，可以获得商家在原销售价格基础上的一定比例积分，积分就是钱，可以在易和平台所有商家自由无限制使用积分，积攒到一定的积分，即可完全使用积分“零成本”在易和平台消费。"},{texts:"2. 易和在短时间内给消费者提供更多的选择，消费者可以轻松的获取本地以及全国商家产品和服务内容的信息，并且可在线购买和支付，真正实现互联网指尖上的便捷。"}]
			}
		}
	}
</script>

<style lang="less" scoped>
		.company_warp{
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
			margin-bottom: 40px;
			text-indent: 2em;
			line-height: 30px;
		}
	}
</style>