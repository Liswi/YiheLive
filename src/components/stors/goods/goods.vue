<template>
	<div class="specialNum">
		<div class="goods_wrap">
			<div v-for="item in specialGoods" class="special_goods">
				<img :src="item.img" alt="" class="goods_img" />
				<p class="goods_describe">{{item.descri}}</p>
				<div class="price"><span class="now_price">¥{{item.price}}</span><span class="last_price">¥{{item.lastprice}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props:['status'],
		data() {
			return {
				specialGoods: [{
					img: "./img/goods_01.png",
					descri: "我是一个超级好吃的小甜瓜",
					price: 11.8,
					lastprice: 20
				},
				{
					img: "./img/goods_02.png",
					descri: "我是一个超级好吃的小苹果，我是一个超级好吃的小苹果",
					price: 11.8,
					lastprice: 20
				}, {
					img: "./img/goods_03.png",
					descri: "我是一个超级好吃的小橙子",
					price: 11.8,
					lastprice: 20
				}, {
					img: "./img/goods_04.png",
					descri: "我是一个超级好吃的火龙果",
					price: 11.8,
					lastprice: 20
				}, {
					img: "./img/goods_05.png",
					descri: "我是一个超级好吃的圣女果",
					price: 11.8,
					lastprice: 20
				},
//				{
//					img: "./img/goods_01.png",
//					descri: "我是一个超级好吃的小甜瓜",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_02.png",
//					descri: "我是一个超级好吃的小苹果",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_03.png",
//					descri: "我是一个超级好吃的小橙子",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_04.png",
//					descri: "我是一个超级好吃的火龙果",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_05.png",
//					descri: "我是一个超级好吃的圣女果",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_01.png",
//					descri: "我是一个超级好吃的小甜瓜",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_02.png",
//					descri: "我是一个超级好吃的小苹果",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_03.png",
//					descri: "我是一个超级好吃的小橙子",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_04.png",
//					descri: "我是一个超级好吃的火龙果",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_05.png",
//					descri: "我是一个超级好吃的圣女果",
//					price: 11.8,
//					lastprice: 20
//				}, {
//					img: "./img/goods_01.png",
//					descri: "我是一个超级好吃的小甜瓜",
//					price: 11.8,
//					lastprice: 20
//				}
			],
			}
		},
		created() {	
			this.$http.get("/api/"+this.status)
			for(var i = 0; i < this.specialGoods.length; i++) {
				this.specialGoods[i].img = require(this.specialGoods[i].img + "")
			}
		},
	}
</script>

<style lang="less" scoped>
	.specialNum {
		width: 1181px;
		margin: 0 auto;
		.goods_wrap {
		margin: 20px 10px 20px;
			cursor: pointer;
			text-align: left;
			.special_goods {
				display: inline-block;
				margin:0 4px;
				width: 220px;
				margin-bottom: 20px;
				border: 2px solid #e1e1e1;
				background: #FFFFFF;
				&:hover {
					border: 2px solid orange;
					box-shadow: 0 0 1px 1px orange;
				}
				.goods_img {
					height: 220px;
				}
				.goods_describe {
					height: 45px;
					margin: 0;
					margin: 15px;
					font-size: 16px;
					font-weight: 200;
					text-align: left;
					color: rgba(0, 0, 0, 0.6);
					line-height: 25px;
					/*文本超出隐藏*/
					display: -webkit-box;/*出现省略号*/
				    -webkit-box-orient: vertical;/*规定框内的子元素应该被水平或垂直排列   vertical 从上到下垂直排列子元素     horizontal 从水平中从左到右排列子元素  */
				    -webkit-line-clamp: 2;/*规定有多少行文本内容*/
				    overflow: hidden;/*超出部分文本隐藏*/
					&:hover {
						color: darkred;
						text-decoration: underline;
					}
				}
				.price {
					padding-bottom: 15px;
					text-align: left;
					font-size: 20px;
					padding: 0 15px 20px;
					.now_price {
						font-size: 16px;
						color: red;
						padding-right: 10px;
					}
					.last_price {
						font-size: 12px;
						text-decoration: line-through;
					}
				}
			}
		}
	}
</style>