<template>
	<div >
		<SlidePic></SlidePic>
		<div class="limitNum">
			<div class="list_title"><h2>限量<span>抢购</span></h2>每日精选12款特价商品,天天送不停</div>
			<div class="goods_wrap">
				<div :class="{position_bar:1,position_bar1:isActive==1,position_bar2:isActive==2,position_bar3:isActive==3}">
				<div v-for="item in limitGoods" class="limit_goods">
					<img :src="item.img" alt="" class="goods_img"/>
					<p class="goods_describe">{{item.descri| limitWord}}</p>
					<div class="price"><span class="now_price">¥{{item.price}}</span><span class="last_price">¥{{item.lastprice}}</span></div>
					</div>
					
				</div>
				<div class="last" @click="last"></div>
					<div class="next" @click="next"></div>
			</div>
		</div>
		<div class="specialNum">
			<div class="list_title"><h2>今日<span>特价</span></h2>Commodity</div>
			<div class="goods_wrap2">
				<div v-for="item in goodsShow" class="special_goods">
					<img :src="item.img" alt="" class="goods_img"/>
					<p class="goods_describe">{{item.descri|limitWord}}</p>
					<div class="price"><span class="now_price">¥{{item.price}}</span><span class="last_price">¥{{item.lastprice}}</span></div>
				</div>
			</div>
			<PageNation :pageinfo="pageinfo" @tab="tab"></PageNation>
		</div>
	
	</div>	
</template>

<script>
	import SlidePic from "@/components/slidePic/slidePic"
	import PageNation from "@/components/repeatUse/pageNation/pageNation"
	export default{
		name:"",
		
		data(){
			return{
				isActive:1,
				pageinfo:{infoNum:"",everyNum:10},
				showStart:0,
				limitGoods:[{img:"/static/choice/img/good1.png",descri:"1这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"2这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"3这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138}],
				specialGoods:[{img:"/static/choice/img/good1.png",descri:"1这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"2这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售,大家赶快来买了啊",price:88.22,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138},{img:"/static/choice/img/good1.png",descri:"这是一个什么商品呢,今天限量出售",price:88,lastprice:138}],
			}
		},
		created(){
			this.pageinfo.infoNum=this.specialGoods.length;
		},
		methods:{
			last(){
				if(this.isActive==1){
					this.isActive=1
				}else{
					this.isActive-=1;
				}
			},
			next(){
				
				if(this.isActive==3){
					this.isActive=3
				}else{
					this.isActive+=1;
				}
			},
			tab(n){
				this.showStart=(n-1)*this.pageinfo.everyNum;
			},
		},
		computed:{
			goodsShow(){
				var goodsShow=[];
			 if(this.specialGoods.length>this.pageinfo.everyNum){
				goodsShow=this.specialGoods.slice(this.showStart,this.showStart+this.pageinfo.everyNum)
				}
			 else{
				goodsShow=this.specialGoods.slice(0)
				}
				return goodsShow
			}
			},
		components:{
		   SlidePic,PageNation
		},
		filters:{
		limitWord:function(val){
			if(val.length>20){
				let leng=val.length-21
				
				val=val.split("")
				val.splice(21,leng,"...")
				val=val.join("")
			}
			return val
		}
		}
	}
	
</script>

<style lang="less" scoped>
	.limitNum,.specialNum{
		width: 1181px;
		margin: 0 auto;
		
	}
	.list_title{
		padding: 30px 0 44px 0;
		text-align: left;
		font-size: 20px;
		font-weight: 200;
		h2{
				color:#ff6d26;
				font-size: 36px;
				font-weight: normal;
				display: inline-block;
				margin-right: 18px;
			span{
				color:#008cdd;
			}
		}
	  }
	  .goods_wrap{
		height: 413px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		.position_bar{
			position: absolute;
			text-align: left;
			width: 350%;
			transition: all 0.5s;
			/*height: 284px;*/
		}
		.position_bar1{
			left:1px;
		}
		.position_bar2{
			left:-1190px;
		}
		.position_bar3{
			left:-2382px;
		}
			.limit_goods{
	  		display: inline-block;
			margin-right: 14px;
			width: 280px;
			border: 2px solid #e1e1e1;
			background: #fff;
			&:hover{
				border: 2px solid #e66766;
			}
			.goods_img{
				/*width: 220px;*/
				height: 280px;
			}
			.goods_describe{
				height:45px;
				padding: 15px;
				font-size: 17px;
				font-weight: 200;
				text-align: left;
				color: rgba(0,0,0,0.6);
				line-height: 30px;
				&:hover{
					color: red;
					text-decoration: underline;
				}
			}
			.price{
				padding-bottom: 15px;
				text-align: left;
				padding: 10px 15px 20px;
				.now_price{
					font-size: 17px;
					color: red;
					padding-right: 5px;
				}
				.last_price{
					font-size:14px;
					text-decoration: line-through;
				}
			}
		}
		.last,.next{
			width: 55px;
			height:96px;
			border-radius: 3px;
			position: absolute;
			top: 50%;
			margin-top: -48px;
		}
		.last{
			left: 2px;
			background: rgba(0,0,0,0.5) url('./img/last.png') no-repeat center;
		}
		.next{
			right:2px ;
			background: rgba(0,0,0,0.5) url('./img/next.png') no-repeat center;
		}
		
		}
		.goods_wrap2{
			cursor: pointer;
			text-align: left;
			.special_goods{
			display: inline-block;
			margin-right: 12px;
			width: 220px;
			margin-bottom: 20px;
			border: 2px solid #e1e1e1;
			background:#FFFFFF;
			&:hover{
				border: 2px solid orange;
				box-shadow: 0 0 1px 1px orange;
			}
			.goods_img{
				height: 220px;
			}
			.goods_describe{
				height:45px;
				padding: 15px;
				font-size: 17px;
				font-weight: 200;
				text-align: left;
				color: rgba(0,0,0,0.6);
				line-height: 30px;
				&:hover{
					color: darkred;
					text-decoration: underline;
				}
			}
			.price{
				padding-bottom: 15px;
				text-align: left;
				padding: 10px 15px 20px;
				.now_price{
					font-size: 17px;
					color: red;
					padding-right: 5px;
				}
				.last_price{
					font-size:14px;
					text-decoration: line-through;
				}
			}
		}
		}
		.specialNum{
			padding-bottom: 40px;
		}
		
</style>