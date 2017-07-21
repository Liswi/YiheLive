<template>
	<div class="order_detail_wrap">
		<div class="order_detail_head">
			<span>订单编号：</span>
			<span>订单状态<em style="color: #FF6C00;">待付款</em></span>
			<button id="orderBtn1">立即支付</button>
			<button id="orderBtn2">取消订单</button>
		</div>
		<div class="detail">
			<p>支付方式<span>{{pay.payWay}}</span></p>
			<p>支付流水号<span>{{pay.payNum}}</span></p>
			<p>下单时间<span>{{pay.payTime}}</span></p>
			<p>支付时间</p>
			<p>发货时间</p>
			<p>收货时间</p>
			<p>取消时间</p>
			<p>申请退款时间</p>
			<p>退款原因</p>
			<p>退款时间</p>
			<p>订单备注<span>{{pay.remarks}}</span></p>
		</div>
		<h3>买家信息</h3>
		<div class="buyer">
			<p>收货人姓名
				<span>{{buyer.buyerName}}</span>
			</p>
			<p>地址
				<span>{{buyer.address}}</span>
			</p>
			<p>联系方式
				<span>{{buyer.phone}}</span>
			</p>
		</div>
		<h3>发票信息</h3>
		<div class="bill">
			<p>发票类型<span>{{bill.billType}}</span></p>
			<p>发票抬头<span>{{bill.billHead}}</span></p>
			<p>发票<span>{{bill.bill}}</span></p>
		</div>
		<h3>卖家信息</h3>
		<div class="seller">
			<p>店铺名称<span>{{seller.shopName}}</span></p>
			<p>真实姓名<span>{{seller.sellerName}}</span></p>
			<p>联系电话<span>{{seller.phone}}</span></p>
		</div>
		<h3>物流信息</h3>
		<div class="logistics">
			<p>联系人：<span>{{logistics.logName}}</span></p>
			<p>联系方式：<span>{{logistics.phone}}</span></p>
		</div>		
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				pay: {
					payWay: "支付宝",
					payNum: "456465465465465465",
					payTime: "2012-12-12 12:12:12",
					remarks: "请包装的严一些，不要有破损。"
				},
				buyer: {
					buyerName: "王敏敏",
					address: "河南省郑州市高新区莲花街威科姆园区B座三楼",
					phone: "手机：15890754689/固话：0372-4749852"
				},
				bill: {
					billType: "电子发票",
					billHead: "北京浪莎袜业",
					bill: "内容明细",
				},
				seller: {
					shopName: "缥缈峰灵鹫宫",
					sellerName: "天山童姥",
					phone: "你猜",
				},
				logistics: {
					logName: "段誉",
					phone: "妈咪妈咪哄"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.order_detail_wrap {
		width: 983px;
		min-height: 675px;
		border: 1px solid #D3D3D3;
		background-color: white;
		float: left;
		.order_detail_head {
			position: relative;
			padding: 20px;
			span {
				margin-right: 100px;
			}
			#orderBtn1,
			#orderBtn2 {
				width: 90px;
				height: 30px;
				border-radius: 5px;
				color: white;
				position: absolute;
				top: 20px;
				border: none;
				outline: none;
				font-size: 14px;
			}
			#orderBtn1 {
				right: 130px;
				background-color: #FF6C00;
			}
			#orderBtn2 {
				right: 20px;
				background-color: #999999;
			}
		}
		h3 {
			margin-left: 20px;
			padding-left: 20px;
			color: #FF6C00;
			font-size: 16px;
			font-weight: 400;
		}
		.detail,
		.buyer,
		.bill,
		.seller,
		.logistics {
			margin: 20px;
			background-color: #f6f6f6;
			border: 1px solid #D3D3D3;
			p {
				padding: 10px 20px;
				font-weight: 600;
				font-size: 14px;
				position: relative;
				span {
					position: absolute;
					top: 10px;
					left: 180px;
					color: #666666;
					font-weight: 300;
				}
			}
		}
	}
</style>