<template>
	<div class="box">
		<div class="details_nav">
			<span class="nav" :class="{active:isNav==index+1}" @click="actives(index+1)" v-for="(item,index) in info.options">{{item.icon}}</span>

		</div>
		<div class="bottom">
			<div class="proDet" v-for="item in info.aaa" v-if="isNav==1">
				<h4>{{item.title}}</h4>
				<p v-for="item in item.texts">{{item.text1}}</p>
				<div class="images"><img src="./img/goods03.png" alt="" /></div>
			</div>
			<Comment v-if="isNav==2"></Comment>
			<div v-if="isNav==3" class="record">
					<table cellpadding="20" class="rec_cont">
						<tr>
							<th v-for="item in info.ths">{{item.content}}</th>
						</tr>
						<tr v-for="item in info.trs">
							<td v-for="item in item.tds">{{item.content1}}</td>
						</tr>
					</table>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import Comment from "@/components/repeatUse/comment/comment"
	export default {
		name: "",
		data() {
			return {
				isNav: "1",
				info: {
					name: "",
					ths: [{
						content: "买家"
					}, {
						content: "价格"
					}, {
						content: "数量"
					}, {
						content: "付款时间"
					}],
					trs: [{
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						},
						{
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}, {
							tds: [{
								content1: "张****"
							}, {
								content1: "￥699.00"
							}, {
								content1: "1"
							}, {
								content1: "2017-7-20 16:20:30"
							}],
						}
					],
					aaa: [{
						title: "男士短衬衫",
						texts: [{
							text1: "明水礼盒十分优秀，是送朋友送亲人的不二选择"
						}, {
							text1: "什么？您还不知道明水礼盒？今年过节不收礼，收礼只收明水礼盒"
						}, {
							text1: "我的天我的天我的天"
						}],
					}, {
						title: "男士短衬衫",
						texts: [{
							text1: "明水礼盒十分优秀，是送朋友送亲人的不二选择"
						}, {
							text1: "什么？您还不知道明水礼盒？今年过节不收礼，收礼只收明水礼盒"
						}, {
							text1: "我的天我的天我的天"
						}],
					}],
					options: [{
						icon: "商品详情"
					}, {
						icon: "商品评价"
					}, {
						icon: "成交记录"
					}]
				},
			}
		},
		methods: {
			actives(n) {
				this.isNav = n;
			}
		},
		components: {
			Comment
		}
	}
</script>

<style lang="less" scoped>
	.box {
		width: 1181px;
		margin: 20px auto;
		text-align: left;
		background: #FFFFFF;
		border: 1px solid #D3D3D3;
		.details_nav {
			width: 100%;
			height: 50px;
			background: #F2F2F2;
			border-bottom: 1px solid #D3D3D3;
			.nav {
				border-right: 1px solid #D3D3D3;
				display: inline-block;
				font-size: 18px;
				padding: 0 20px;
				height: 50px;
				line-height: 50px;
				cursor: pointer;
			}
			.active {
				background: #FFFFFF;
				color: #008CDD;
				border-top: 2px solid #008CDD;
				margin-top: -1px;
			}
		}
		.bottom {
			margin-top: 60px;
		}
		.proDet {
			margin: 10px 60px 0;
			font-weight: 200;
			h4 {
				font-size: 18px;
				color: #F46B2B;
				margin-bottom: 10px;
			}
			p {
				font-size: 16px;
				height: 40px;
				line-height: 35px;
			}
			.images {
				padding: 15px 0 30px 0;
			}
		}
		.record{
			margin: 0 60px;
			.rec_cont{
				width: 100%;
				text-align: center;
				th{
					border-bottom:1px solid #D3D3D3;
					color: #333333;
				}
				td{
					border-bottom: 1px dashed #D3D3D3;
					color: #666666;
					font-size: 14px;
				}
				th:first-child{
					width: 100px;
					text-align: left;
					padding: 0;
				}
				td:first-child{
					text-align: left;
					padding: 0;
				}
				td:nth-child(2){
					color: #F46B2B;
				}	
				th:last-child{
					width: 200px;
					padding: 0;
				}
				td:last-child{
					text-align: right;
					padding: 0;
				}
							
			}
		}
	}
</style>