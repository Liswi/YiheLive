<template>
	<div class="express_warp">
		<Title :con='cons'></Title>
		<div class="logon_contents">
			<p class="txt">验货与签收仅为快递发货</p>
			<p>1. 验货须知：</p>
			<div class="contents">
				<span>A、 请您一定要小心开包，以免尖锐物件损伤到包裹内的商品。</span>
				<br />
				<span>B、签收时仔细核对：请您对商品外观、数量进行检查，若包装破损、商品错误、商品少发、商品存在质量问题等，请您立即联系易和网客服，我们将会为您及时处理。</span>
			</div>
			<p>2. 以下情况可以拒收:</p>
			<div class="contents">
				<span> A、 商品存在质量问题；</span>
				<br />
				<span>B、 发错商品、商品数量有误、尺码有误等；</span>
			</div>
			<p>温馨提示：</p>
			<div class="contents">
				<span>请收货时务必认真核对，若您或您的委托人已签收，则说明订单商品正确无误且不存在影响使用的因素，易和网有权不受理因包装或商品破损、商品错漏发、商品表面质量问题、商品附带品及赠品少发为由的退换货申请。</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "./title"
	export default {
		name: "",
		components: {
			Title
		},
		data() {
			return {
				cons: {
					con_title: "验货与签收",
					con_classify: "分类：验货与签收",
					con_date: "日期：2017年7月24日"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.express_warp {
		width: 983px;
		height: 1400px;
		float: left;
		position: relative;
		border: 1px solid #D3D3D3;
		background-color: white;
		.logon_contents {
			margin: 30px 60px 0;
			font-size: 14px;
			color: #666666;
			font-family: tahoma, 微软雅黑;
			p {
				font-weight: 600;
				height: 30px;
				line-height: 30px;
				margin: 0;
			}
			.txt {
				margin: 0px 0px 15px;
				padding: 0px 0px 3px;
				border-bottom: 1px solid rgb(221, 221, 221);
			}
			.contents{
				margin-bottom: 60px;
				span{
					display: inline-block;
					height: 30px;
					line-height: 30px;
					text-indent:2em;
				}
			}
		}
	}
</style>