<template>
	<div class="money_warp">
		<Title :con='cons'></Title>
		<div class="logon_contents">
			<p class="txt_1">支付方式分为：</p>
			<p>支付宝支付</p>
			<div class="imgs"><span class="img_01"></span></div>
			<p>微信支付</p>
			<div class="imgs"><span class="img_02"></span></div>
			<p>银联支付</p>
			<div class="imgs"><span class="img_03"></span></div>
			<p> 余额支付</p>
			<div class="imgs"><span class="img_04"></span></div>
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
					con_title: "支付方式",
					con_classify: "分类：支付方式",
					con_date: "日期：2017年7月24日"
				},
			}
		}
	}
</script>

<style lang="less" scoped>
	.money_warp {
		width: 983px;
		height: 1400px;
		float: left;
		position: relative;
		border: 1px solid #D3D3D3;
		background-color: white;
		.logon_contents {
			margin: 30px 60px 0;
			font-size: 16px;
			color: #666666;
			p {
				font-size: 14px;
				color: #666666;
				line-height: 28px;
				margin-top: 30px;
			}
			.txt_1{
				font-weight: 500;
			}
			.imgs {
				margin: 35px 0 65px;
				text-align: center;
				span {
					display: inline-block;
					border: 1px solid #D3D3D3;
					width: 122px;
					height: 40px;
					padding: 2px;
					background: url("../../../../static/img/sprite.png");
				}
				.img_01 {
					background-position: -296px -80px;
				}
				.img_02 {
					background-position: -296px -145px;
				}
				.img_03 {
					background-position: -296px -220px;
				}
				.img_04 {
					background-position: -296px -280px;
				}
			}
		}
	}
</style>