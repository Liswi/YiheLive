<template>
	<div class="specialNum">
		<div class="goods_wrap">
			<div v-for="item in goods" class="special_goods" @click="goDetail(item.id,item.goodsName,item.kind)">
				<img :src="item.img" alt="" class="goods_img" />
				<p class="goods_describe">{{item.abstract}}</p>
				<div class="price"><span class="now_price">¥{{item.price}}</span><span class="last_price">¥{{item.lastPrice}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props:['status','id'],
		data() {
			return {
				goods: [],
			}
		},
		created() {	
			this.$http.get("/api/goods",{params:{id:this.id,status:this.status}}).then(res=>{
//					console.log(res);
					if(res.body!="error"){
						this.goods=res.body
//						console.log(this.goods)
					}else{
						this.$router.push({name:"wrong"})
					}
			},err=>{
				console.log(err)
				this.$router.push({name:"wrong"})})
			
		},
		methods:{
			goDetail(n,name,k){
				this.$store.commit("changeDetail",name);
				sessionStorage.detail=name
				sessionStorage.goodsid=n
				this.$router.push({name:'detail',params:{kind:k,goodsid:n}})
			}
		}
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
				border: 1px solid #e1e1e1;
				background: #FFFFFF;
				&:hover {
					/*border: 1px solid orange;*/
					box-shadow: 0 0 2px 0 rgba(0,0,0,0.2);
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