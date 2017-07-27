<template>
	<div class="store_box">
		<div class="overall">
			<div class="choose">
				<div class="photo">
					<div class="big_photo">
						<img :src="info.img" alt="" />
					</div>
					<div class="min_photo">
						<span class="tab_l"></span>
						<ul>
							<li v-for="(item,index) in info.imgArr"><img :src="item" @mouseover="tab(index)" /></li>
							
						</ul>
						<span class="tab_r"></span>
					</div>
				</div>
				<div class="top_center">
					<div class="writing">
						<span>{{info.goodsName}}</span>
						<p>{{info.abstract}}</p>
					</div>
					<div class="opt">
						<div class="sizes">
							尺码：
							<span :class="{pitchOn:isFootage==index+1}" class="select" @click="pitchOns(index+1,value)" v-for="(value,key,index) in info.sizeColor">{{key}}</span>
							<div class="colors">
								颜色：
								<span :class="{pitchOn:isColor==index+1}" class="select" @click="pitchOns1(index+1)" v-for="(value,key,index) in colorArr">{{key}} <span class="num" v-show="isColor==index+1">剩余<i>{{value}}</i> 件</span></span>
							</div>
						</div>
					</div>
					<div class="useOperter">
						<div class="price">
							<span class="min_price">现价 : ￥{{info.price}}</span>
							<span class="max_price">原价 : ￥{{info.lastPrice}}</span>
							<span class="total ">总价 : ￥{{nums*info.price}} 元</span>
							<span class="mans">已有{{info.sales}}人购买了这件商品</span>
						</div>
						<div class="buy">
							<span class="num">数量 : </span>
							<div class="num_input">
								<span class="plusminus1" @click="sub"></span>
								<input type="text" v-model="nums" />
								<span class="plusminus2" @click="add"></span>
							</div>
							<div class="btn" @click="addCart">加入购物车</div>
							<div class="btn right" @click="buys">立即购买</div>
						</div>
					</div>
					<div class="center_bottom">
						<div class="collect">
							<span :class="{collect1:isCollect}" @click="collects"></span>收藏此商品
						</div>
						<div class="share">
							分享到：
							<a href="http://t.qq.com/" target="_blank" class="share_1"></a>
							<a href="https://qzone.qq.com/" target="_blank" class="share_2"></a>
							<a href="http://www.renren.com/" target="_blank" class="share_3"></a>
							<a href="https://www.douban.com/" target="_blank" class="share_4"></a>
							<a href="http://www.weibo.com/" target="_blank" class="share_5"></a>
						</div>
					</div>
				</div>
				<div class="top_right">
					<div class="item t">
						<router-link to="/index/store">点击进入商家</router-link>
					</div>
					<div class="item">
						<span class="iconfont2 icon-qq"></span>QQ客服1
					</div>
					<div class="item">
						<span class="iconfont2 icon-qq"></span>QQ客服2
					</div>
				</div>
			</div>
		</div>
		<div class="suc" v-show="isSuccess">收藏成功</div>
		<Addsuccess v-show="isShow" v-on:close="goback"></Addsuccess>
		<Productdetails></Productdetails>
	</div>
</template>

<script>
	import Addsuccess from "@/components/repeatUse/addSuccess/addSuccess"
	import Productdetails from "./productDetails/productDetails"
	export default {
		data() {
			return {
				isShow: false,
				isSuccess: false,
				isCollect: false,
				colorArr:{"请先选择尺码":0},
				nums: 1,
				isFootage: 0,
				isColor: "",
				numshow: 0,
				info:""
			}
		},
		beforeUpdate(){
		},
		created(){
			let goodsid=this.$route.params.goodsid||sessionStorage.goodsid
			let	shopid=sessionStorage.id
			this.$http.get("/api/detail",{params:{goodsid:goodsid,shopid:shopid}}).then(res=>{
					if(res!="error"){
						this.info=res.body
						this.info.imgArr=JSON.parse(this.info.imgArr);
						this.info.sizeColor=JSON.parse(this.info.sizeColor);
					}else{
						this.$router.push({name:"wrong"})
					}
			},err=>{
					this.$router.push({name:"wrong"})
			})
			},
		methods: {
			collects() {
				this.isCollect = !this.isCollect
				if(this.isCollect == true) {
					setTimeout(() => {
						this.isSuccess = true;
						setTimeout(() => {
							this.isSuccess = false;
						}, 1500)
					}, 500)
				}
			},
			tab(index) {
				this.info.img = this.info.imgArr[index]
			},
			sub() {
				if(this.nums <= 0) {
					this.nums == 0;
				} else {
					this.nums--;
				}
			},
			add() {
				this.nums++;
			},
			pitchOns(n,m) {
				this.isFootage = n;
				this.colorArr=m;
				this.numshow = n - 1;
			},
			pitchOns1(n) {
				this.isColor = n;
				//				this.numshow=n-1;
			},
			addCart() {
				if(this.isFootage&&this.isColor){
					let i=0;
					let size="";
					let color="";
					for(let key in this.info.sizeColor){
						i++;
						if(i==this.isFootage){
							size=key
							let j=0;
							for(let item in this.info.sizeColor[key]){
								j++;
								if(j==this.isColor){
									color=item
									break;
								}
							}
						}
					}
					this.$http.post("/api/addcart",{goodsid:this.info.id,shopid:this.info.shopid,color:color,size:size,num:this.nums,userid:this.$store.state.userid},{emulateJSON:true}).then(res=>{
						if(res.body!="error"){
							setTimeout(() => {
							this.isShow = true;
							}, 500)
						}else{
							alert("网络延迟,请重试");
						}
					},err=>{
							alert("网络延迟,请重试");
					})
					
				}else{
					alert("您还未选择商品!")
				}
			},
			buys(){
				
			},
			goback() {
				setTimeout(() => {
					this.isShow = false;
				}, 200)
			},
			},
		components: {
			Addsuccess,
			Productdetails,
		}
	}
</script>

<style lang="less" scoped>
	.store_box {
		width: 100%;
		height: 100%;
		font-family: "Microsoft Yahei";
		background: #fffae9;
		.overall {
			width: 1181px;
			margin: 0 auto;
			background: #FFFFFF;
			.choose {
				padding: 20px;
				overflow: hidden;
				background: #FFFFFF;
				.photo {
					float: left;
					width: 360px;
					height: 450px;
					background: #F4F4F4;
					border:1px solid rgba(0,0,0,0,02);
					.big_photo {
						width: 100%;
						background: #fff;
						height: 360px;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.min_photo {
						width: 100%;
						margin: 10px 0;
						height: 70px;
						/*background: #fff;*/
						position: relative;
						span {
							display: inline-block;
							width: 20px;
							height: 25px;
							cursor: pointer;
							background: url('./img/download.png');
						}
						.tab_l {
							background-position: 0 -290px;
							position: absolute;
							left: 8px;
							top: 23px;
						}
						.tab_r {
							background-position: 0 -353px;
							position: absolute;
							top: 22px;
							right: 0;
						}
						li {
							display: inline-block;
							width: 70px;
							height: 70px;
							background: #FFF3EC;
							list-style-type: none;
							cursor: pointer;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
				.top_center {
					float: left;
					width: 575px;
					height: 450px;
					margin: 0 20px;
					color: #666666;
					font-weight: 300;
					font-size: 16px;
					.writing {
						width: 100%;
						text-align: left;
						padding-bottom: 1 0px;
						border-bottom: 1px solid #dadada;
						span {
							height: 40px;
							line-height: 40px;
							font-size: 25px;
							color: #008CDD;
						}
						p {
							line-height: 30px;
						}
					}
					.opt {
						width: 100%;
						line-height: 20px;
						text-align: left;
						.sizes {
							margin: 20px 0;
						}
						.colors {
							margin-top: 20px;
							position: relative;
						}
						.select {
							border: 1px solid #D3D3D3;
							display: inline-block;
							min-width: 29px;
							padding: 0 20px;
							height: 26px;
							line-height: 26px;
							margin-left: 5px;
							text-align: center;
							cursor: pointer;
							.num {
								position: absolute;
								right: 200px;
								top: 0;
								width: 80px;
								border: none;
								/*background: rgba(0,0,0,0.3);*/
								/*color: white;*/
								i {
									color: red;
									font-size: 20px;
								}
							}
							&:hover {
								border: 1px solid #F46B2B;
								box-shadow: 0 0 0 1px #F46B2B;
							}
						}
						.pitchOn {
							border: 1px solid #F46B2B;
							box-shadow: 0 0 0 1px #F46B2B;
						}
						.size_3 {
							color: #c9c9c9;
							border: 1px solid #e7e7e7;
						}
					}
					.useOperter {
						border: 1px solid #dadada;
						width: 100%;
						height: 140px;
						text-align: left;
						.price {
							font-weight: 400;
							margin: 20px;
							overflow: hidden;
							.min_price {
								font-size: 16px;
								color: #F3031A;
								margin-right: 30px;
							}
							.max_price {
								font-size: 14px;
								color: #707070;
								text-decoration: line-through;
							}
							.mans {
								display: inline-block;
								font-size: 12px;
								color: #999999;
								float: right;
								margin: 5px 20px 0 0;
							}
						}
						.total {
							display: inline-block;
							/*border: 1px solid #999999;*/
							width: 130px;
							height: 25px;
							line-height: 25px;
							margin-left: 20px;
						}
						.buy {
							margin: 0 20px;
							text-align: left;
							div {
								display: inline-block;
							}
							.num_input {
								border: 1px solid #D3D3D3;
								margin: 0 10px;
								input {
									width: 35px;
									height: 30px;
									border: none;
									text-align: center;
								}
								span {
									vertical-align: middle;
									display: inline-block;
									width: 30px;
									height: 30px;
									background: url(./img/download.png) #f2f2f2;
									cursor: pointer;
								}
								.plusminus1 {
									background-position: -50px -175px;
								}
								.plusminus2 {
									background-position: -50px -128px;
								}
							}
							.btn {
								font-size: 18px;
								background: #FFAD7D;
								color: #FFFFFF;
								height: 45px;
								line-height: 45px;
								margin: 0 10px;
								padding: 0 20px;
								border-radius: 5px;
								cursor: pointer;
							}
							.right {
								background: #F46B2B;
								padding: 0 30px;
							}
						}
					}
					.center_bottom {
						width: 100%;
						text-align: left;
						overflow: hidden;
						font-weight: 300;
						margin-top: 20px;
						.collect {
							float: left;
							margin: 3px 25px 0 0;
							cursor: pointer;
							span {
								vertical-align: middle;
								display: inline-block;
								width: 25px;
								height: 25px;
								margin-right: 5px;
								background: url(./img/download.png);
								background-position: -58px -80px;
							}
							.collect1 {
								background-position: -58px -37px;
							}
						}
						.share {
							height: 30px;
							line-height: 30px;
							a {
								vertical-align: middle;
								display: inline-block;
								width: 26px;
								height: 26px;
								background: url(./img/share.png);
							}
							.share_1 {
								background-position: 0 0;
							}
							.share_2 {
								background-position: -36px 0;
							}
							.share_3 {
								background-position: -72px 0;
							}
							.share_4 {
								background-position: -108px 0;
							}
							.share_5 {
								background-position: -144px 0;
							}
						}
					}
				}
				.top_right {
					float: left;
					margin-top: 40px;
					.item {
						background: #FF6D25;
						border-radius: 3px;
						margin-bottom: 20px;
						cursor: pointer;
						color: white;
						font-size: 14px;
						height: 30px;
						width: 120px;
						line-height: 30px;
						span {
							margin-right: 10px;
						}
					}
					.t {
						background: #008CE1;
						margin-bottom: 40px;
					}
				}
			}
		}
		.suc {
			position: fixed;
			top: 50%;
			left: 50%;
			color: white;
			background: rgba(0, 0, 0, .6);
			border-radius: 5px;
			padding: 0 30px;
			height: 30px;
			line-height: 30px;
		}
	}
</style>