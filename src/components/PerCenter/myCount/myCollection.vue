<template>
	<div class="recent_view_wrap">
		<Tl :cmsg="title"></Tl>
		<div class="rView_cont">
			<div v-for="(item,index) in limitGoods" class="limit_goods">
				<img :src="item.img" alt="" class="goods_img" />
				<p class="goods_describe">{{item.descri| limitWord}}</p>
				<div class="price"><span class="now_price">¥{{item.price}}</span><span class="last_price">¥{{item.lastprice}}</span><button class="cancelBtn" @click="cancel(index)">{{item.cancelTxt}}</button></div>
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
		data() {
			return {
				title: "我的收藏",
				limitGoods: [{
					img: "/static/user1/img/good1.png",
					descri: "1这是一个什么商品呢,今天限量出售,大家赶快来买了啊",
					price: 88.22,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good3.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good2.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good1.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good2.png",
					descri: "2这是一个什么商品呢,今天限量出售,大家赶快来买了啊",
					price: 88.22,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good1.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good3.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good1.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good4.png",
					descri: "3这是一个什么商品呢,今天限量出售,大家赶快来买了啊",
					price: 88.22,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good1.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good3.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}, {
					img: "/static/user1/img/good4.png",
					descri: "这是一个什么商品呢,今天限量出售",
					price: 88,
					lastprice: 138,
					cancelTxt: "取消收藏"
				}],
			}
		},
		methods: {
			cancel: function(index) {
				this.limitGoods[index].cancelTxt = "已失效";
			}
		},
		filters: {
			limitWord: function(val) {
				if(val.length > 20) {
					let leng = val.length - 21

					val = val.split("")
					val.splice(21, leng, "...")
					val = val.join("")
				}
				return val
			}
		}
	}
</script>

<style lang="less" scoped>
	.recent_view_wrap {
		width: 983px;
		background-color: white;
		float: left;
		border: 1px solid #D3D3D3;
		.rView_cont {
			padding: 20px 0 20px 20px;
			.limit_goods {
				position: relative;
				display: inline-block;
				margin-right: 20px;
				margin-bottom: 20px;
				width: 216px;
				border: 2px solid #e1e1e1;
				background: #fff;
				&:hover {
					border: 2px solid #e66766;
				}
				.goods_img {
					width: 216px;
					height: 216px;
				}
				.goods_describe {
					height: 45px;
					padding: 15px;
					font-size: 14px;
					font-weight: 200;
					text-align: left;
					color: rgba(0, 0, 0, 0.6);
					line-height: 30px;
					&:hover {
						color: red;
						text-decoration: underline;
					}
				}
				.price {
					padding-bottom: 15px;
					text-align: left;
					padding: 10px 15px 20px;
					.now_price {
						font-size: 17px;
						color: red;
						padding-right: 5px;
					}
					.last_price {
						font-size: 14px;
						text-decoration: line-through;
					}
				}
				.cancelBtn {
					width: 72px;
					height: 24px;
					border: 1px solid #EC6917;
					border-radius: 12px;
					color: #FF6C00;
					outline: none;
					background-color: white;
					position: absolute;
					bottom: 18px;
					right: 20px;
				}
			}
		}
	}
</style>