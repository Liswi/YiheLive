<template>
	<div class="order">
		<Tl :cmsg="title"></Tl>
		<div class="order_nav">
			<a href="javascript:void(0)" @click="active(0)"  :class="{active:act[0]==1}">全部</a>
			<span></span>
			<a href="javascript:void(0)" @click="active(1)" :class="{active:act[1]==1}">待付款</a>
			<span></span>
			<a href="javascript:void(0)" @click="active(2)" :class="{active:act[2]==1}">待发货</a>
			<span></span>
			<a href="javascript:void(0)" @click="active(3)" :class="{active:act[3]==1}">待收货</a>
			<span></span>
			<a href="javascript:void(0)" @click="active(4)" :class="{active:act[4]==1}">已收货</a>
			<span></span>
			<a href="javascript:void(0)" @click="active(5)" :class="{active:act[5]==1}">退款</a>
			<span></span>
			<a href="javascript:void(0)" @click="active(6)" :class="{active:act[6]==1}">已完成/关闭</a>
			<a href="javascript:void(0)" @click="active(7)" :class="{active:act[7]==1}">订单回收站</a>
		</div>

		<div class="order_cont">
			<div class="order_item" v-for="(item,index) in orderData">
				<div class="order_item_top">
					<span>订单号：{{item.orderNum}}</span><span>下单日期: {{item.time}}</span><span>{{item.shop}}</span><span>订单状态：<i>{{item.state}}</i></span>
				</div>
				<div class="order_item_wrap">
					<div class="order_item_left">
						<div class="order_item_lis" v-for="(items,index) in item.goodsData">
							<img :src="items.imgSrc" alt="" />
							<span>{{items.goodsName}}</span>
							<span><em>款式：{{items.version}}</em><em>颜色:   {{items.color}}</em></span>
							<span>¥ {{items.price}} X {{items.number}}</span>
						</div>
					</div>
					<div class="order_item_price" :style="{height:oHeight[index]+'px'}">
						<span>总金额：¥{{item.totalPrice}}</span>
						<span>(含运费¥8.0)</span>
					</div>
					<div class="order_item_operate" :style="{height:oHeight[index]+'px'}">
						<router-link to="orderDetail">查看详情</router-link>
						<button v-show="orderData[index].sign==1 ">去支付</button>
						<button v-show="orderData[index].sign==2 ">取消订单</button>
						<button v-show="orderData[index].sign==3">申请退款</button>
						<button v-show="orderData[index].sign== 4 ||orderData[index].sign== 2 ">确认收货</button>
						<button v-show="orderData[index].sign==5">查看物流</button>
						<button v-show="orderData[index].sign==6">申请平台介入</button>
						<button v-show="orderData[index].sign==3">去评价</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Tl from "./title"
	export default {
		name: "",
		components: {
			Tl
		},
		computed:{
			oHeight:function  () {
				let arr = [];
				for(let i = 0;i<this.orderData.length;i++){
					let h = (this.orderData[i].goodsData.length)*101-1;
					arr.push(h);
				};	
				return arr;
			}
		},
		data() {
			return {				
				title: "我的订单",
				act: [1, 0, 0, 0, 0, 0, 0],				
				orderData: [{
					orderNum: 135798462,
					time: "2012-12-12 12:12:12",
					shop: "海澜之家",
					state:"待付款",	
					sign:1,
					goodsData: [{
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}],
					totalPrice: "250.0",
				}, {
					sign:2,
					orderNum: 135798462,
					time: "2012-12-12 12:12:12",
					shop: "海澜之家",
					state: "待评价",
					goodsData: [{
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}],
					totalPrice: "250.0",
				},
				{
					sign:3,
					orderNum: 135798462,
					time: "2012-12-12 12:12:12",
					shop: "海澜之家",
					state: "已收货",
					goodsData: [{
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}],
					totalPrice: "250.0",
				},{
					sign:4,
					orderNum: 135798462,
					time: "2012-12-12 12:12:12",
					shop: "海澜之家",
					state: "已收货",
					goodsData: [{
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}, {
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}],
					totalPrice: "250.0",
				}, {
					sign:5,
					orderNum: 135798462,
					time: "2012-12-12 12:12:12",
					shop: "海澜之家",
					state: "申请退款中",
					goodsData: [{
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}],
					totalPrice: "250.0",
				},
				 {
				 	sign:6,
					orderNum: 135798462,
					time: "2012-12-12 12:12:12",
					shop: "海澜之家",
					state: "退款中",
					goodsData: [{
						imgSrc: "/static/user1/img/order-good1.png",
						goodsName: "王菲同款连衣裙",
						version: "最新款",
						color: "星钻黑",
						price: "250.0",
						number: "2",
					}],
					totalPrice: "250.0",
				}],
			}
		},
		methods: {
			active: function(n) {
				let i = this.act.indexOf(1);
				this.act.splice(i, 1, 0);
				this.act.splice(n, 1, 1);
			}
		}
	}
</script>

<style lang="less" scoped>
	.order {
		width: 983px;
		min-height: 675px;
		border: 1px solid #D3D3D3;
		background-color: white;
		float: left;
		.order_nav {
			width: 943px;
			padding: 20px;
			display: flex;
			justify-content: space-around;
			span {
				width: 2px;
				height: 23px;
				display: inline-block;
				background-color: #D3D3D3;
			}
			.active {
				background-color: #ffe3d1;
			}
			a:hover {
				background-color: #ffe3d1;
			}
		}
		.order_cont {
			padding: 20px;
			.order_item {
				margin-bottom: 20px;
				border-left: 1px solid #D3D3D3;
				border-right: 1px solid #D3D3D3;
				border-top: 1px solid #D3D3D3;
				.order_item_top {
					padding: 10px;
					overflow: hidden;
					background-color: #EAEAEA;
					span {
						width: 25%;
						text-align: center;
						display: inline-block;
						float: left;
					}
					i{
						font-style:normal;
						color: #FF6C00;
					}
				}
				.order_item_wrap {
					width: 100%;
					overflow: hidden;
					display: flex;
					justify-content: flex-start;
					
					align-content: center;
					.order_item_left {
						
						.order_item_lis {
							width: 630px;
							height: 80px;
							font-size: 12px;
							padding: 10px;
							display: flex;
							justify-content: space-around;
							align-items: center;
							border-bottom: 1px solid #D3D3D3;
							img {
								display: inline-block;
								vertical-align: middle;
							}
							span{
								display: inline-block;
							}
						
							em{
								font-style: normal;
								display: inline-block;
								width: 100%;
								color: gray;
							}
						}
					}
					.order_item_price {
						width: 146px;
						height: 100%;						
						border-left: 1px solid #D3D3D3;
						border-bottom: 1px solid #D3D3D3;
					    display: flex;
					    flex-direction: column;
					    justify-content: center;
					    align-items: center;
						span{
							display: block;
							padding-top: 20px;
						}
					}
					.order_item_operate {
						width: 144px;
						height: 100%;						
						border-left: 1px solid #D3D3D3;
						border-bottom: 1px solid #D3D3D3;
						
						 display: flex;
					    flex-direction: column;
					    justify-content: center;
					    align-items: center;
						button{
							cursor: pointer;
							padding: 5px;					
							display: block;
							margin-top: 10px;
							background-color: #FFE3D1;
							border: none;
							outline: none;
							
						}
						a{
							font-size: 14px;
							color: #008CDD;
							&:hover{
								color: #FF6D25;
							}
						}
					}
				}
			}
		}
	}
</style>