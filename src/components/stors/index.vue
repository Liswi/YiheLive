<template>
	<div class="store_box">
		<div id="routeNav">
				<RouteNav :obj="routeNav"></RouteNav>
		</div>
		<router-view></router-view>
		<div v-if="isShow">
		<div class="overall">
			<div class="choose">
				<div class="photo">
					<div class="big_photo">
						<img :src="shopInfo.img" alt=""/>
					</div>
					<div class="min_photo">
						<span class="tab_l" @click="last"></span>
						<ul>
							<li v-for="item in shopInfo.imgArr"><img :src="item" @mouseenter="tab($event)" /></li>

						</ul>
						<span class="tab_r" @click="next"></span>
					</div>
				</div>
				<div class="top_center">
					<div class="writing">
						<span>{{shopInfo.shop}}</span>
						<p>{{shopInfo.abstract}}</p>
					</div>
					<div class="center_bottom">
						<div class="contace">
							<p><span class="names"></span>{{shopInfo.name}}</p>
							<p><span class="phone"></span>{{shopInfo.phone}}</p>
							<p><span class="address"></span>{{shopInfo.location}}</p>
						</div>
						<div class="pub">
							<span>商家公告 :</span>
							<p>{{shopInfo.notice}}</p>
						</div>

					</div>
				</div>
				<div class="top_right">
					<p class="brade">所属品牌：<span>原创品牌</span></p>
					<div class="gcs">
						<span>综合评分：</span>
						<div class="twig">
							<div class="bar"></div>
						</div>
						<span class="fen">{{shopInfo.rank}}</span>
					</div>
					<div class="right_conents">
						<div class="contents">
							<div class="lis">
								<p>描述</p>
								<p class="text1">4.5分</p>
							</div>
							<div class="lis">
								<p>商品</p>
								<p class="text1">4.5分</p>
							</div>
							<div class="lis">
								<p>服务</p>
								<p class="text1">4.5分</p>
							</div>
						</div>
					</div>
					<div class="item">
						客服一：
						<span><i></i>QQ客服1</span>
					</div>
					<div class="item">
						客服二：
						<span><i></i>QQ客服2</span>
					</div>
				</div>
			</div>
			<div class="rt">合作商家</div>
		</div>
		<div class="contents_box">
			<div class="details_nav">
				<span class="nav" :class="{active:isNav==index+1}" @click="actives(index+1)" v-for="(item,index) in info.options">{{item.icon}}</span>
			</div>
			<div class="divs" @click="go" >
			<div v-if="isNav==1">
				<Goods :status="1" :id="id"></Goods>
			</div>
			<div v-if="isNav==2">我是女上衣</div>
			<div v-if="isNav==3">我是男裤</div>
			<div v-if="isNav==4">我是女裤</div>
			<div v-if="isNav==5">我是男衬衫</div>
			<div v-if="isNav==6">我是到店的商品</div>
			<div v-if="isNav==7">我是全部商品</div>
			</div>
		</div>
	</div>
	</div>
	</div>
</template>

<script>
	import RouteNav from '@/components/repeatUse/routeNav/routeNav'
	import Goods from "./goods/goods"
	export default {
		name: "",
		components:{RouteNav,Goods},
		data() {
			return {
				isShow:true,
				isNav: "1",
				id:"",
				routeNav:{
					firstInfo:"",
					secondInfo:"",
					thirdInfo:""
				},
				shopInfo:"",
				info: {
					options: [{
						icon: "男上衣"
					}, {
						icon: "女上衣"
					}, {
						icon: "男裤"
					}, {
						icon: "女裤"
					}, {
						icon: "男衬衫"
					}, {
						icon: "到店的商品"
					}, {
						icon: "全部商品"
					}]
				}
			}
		},
		created() {
			if(this.$route.matched.length>2){
				this.isShow=false
			}else{
				this.isShow=true
			}
			let info=this.$route.path.split("/")
			if(info[1]=="index"){
				this.routeNav.firstInfo="首页"
				switch(info[2]){
				case "city":
				this.routeNav.secondInfo="城市列表"
				break;
				case "store":
				this.routeNav.secondInfo=this.$store.state.store.name||sessionStorage.store;
					switch(info[3]){
						case "detail":
						this.routeNav.thirdInfo=this.$store.state.store.detail||sessionStorage.detail
						break;
					}
				break;
				
			}	
			}
			this.id=this.$route.params.shopid||sessionStorage.id
			
			this.$http.get("/api/store",{params:{id:this.id}}).then(data=>{
				this.shopInfo=data.body	
				this.shopInfo.imgArr=JSON.parse(this.shopInfo.imgArr)
			},err=>{
				console.log(err)
				this.$router.push("/404");
			})
		},
		beforeUpdate(){
			if(this.$route.matched.length>2){
				this.isShow=false
			}else{
				this.isShow=true
			};
				let info=this.$route.path.split("/")
			if(info[1]=="index"){
				this.routeNav.firstInfo="首页"
				switch(info[2]){
				case "city":
				this.routeNav.secondInfo="城市列表"
				break;
				case "store":
				this.routeNav.secondInfo=this.$store.state.store.name||sessionStorage.store;
					switch(info[3]){
						case "detail":
						this.routeNav.thirdInfo=this.$store.state.store.detail||sessionStorage.detail
						break;
					}
				break;
				
			}	
			}
		},
		methods: {
			tab($event) {
				//				console.log($event.currentTarget.src)
				this.shopInfo.img = $event.currentTarget.src
			},
			last(){
				       let num=this.shopInfo.imgArr.indexOf(this.shopInfo.img)
				       if(num==-1||num==0){
				       	this.shopInfo.img=this.shopInfo.imgArr[this.shopInfo.imgArr.length-1]
				       }else{
				       	this.shopInfo.img=this.shopInfo.imgArr[num-1]
				       }
			},
			next(){
					let num=this.shopInfo.imgArr.indexOf(this.shopInfo.img)
				       if(num==-1||num==this.shopInfo.imgArr.length-1){
				       	this.shopInfo.img=this.shopInfo.imgArr[0]
				       }else{
				       	this.shopInfo.img=this.shopInfo.imgArr[num+1]
				       }
			},
			go() {
				this.$router.push({name:"detail"})
			},
			actives(n) {
				this.isNav = n;
			}
		},

	}
</script>

<style lang="less" scoped>
	.store_box {
		height: 100%;
		font-family: "Microsoft Yahei";
		background: #FFFffc;
		#routeNav{
			width: 1181px;
			margin: 0 auto;
		}
		.overall {
			position: relative;
			width: 1181px;
			margin: 0 auto;
			background: #FFFFFF;
			.rt {
				position: absolute;
				top: 0;
				right: 0;
				width: 50px;
				height: 63px;
				background: url(./img/pic03.png) 0 0 no-repeat;
				font-size: 17px;
				color: #FFFFFF;
			}
			.choose {
				padding: 20px;
				overflow: hidden;
				background: #FFFFFF;
				box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
				.photo {
					float: left;
					width: 360px;
					background: #f2f2f2;
					.big_photo {
						width: 100%;
						height: 200px;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.min_photo {
						width: 100%;
						margin: 25px 0;
						height: 50px;
						position: relative;
						span {
							display: inline-block;
							width: 20px;
							height: 25px;
							cursor: pointer;
							background: url('./img/download.png ');
						}
						.tab_l {
							background-position: 0 -290px;
							position: absolute;
							left: 8px;
							top: 13px;
						}
						.tab_r {
							background-position: 0 -353px;
							position: absolute;
							top: 13px;
							right: 0;
						}
						li {
							display: inline-block;
							width: 70px;
							height: 50px;
							list-style-type: none;
							cursor: pointer;
							padding: 0 2px;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
				.top_center {
					float: left;
					width: 465px;
					height: 280px;
					margin: 0 20px;
					color: #666666;
					font-weight: 300;
					font-size: 14px;
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
							line-height: 25px;
							padding-bottom: 10px;
						}
					}
					.center_bottom {
						text-align: left;
						font-weight: 200;
						.contace {
							font-size: 16px;
							padding: 10px 0;
							border-bottom: 1px solid #dadada;
							p {
								padding: 2px 0;
							}
							span {
								display: inline-block;
								width: 25px;
								height: 25px;
								background: url(img/download.png);
								vertical-align: middle;
							}
							.names {
								background-position: -205px -21px;
							}
							.phone {
								background-position: -205px -50px;
							}
							.address {
								background-position: -205px -80px;
							}
						}
						.pub {
							padding-top: 5px;
							line-height: 25px;
							span {
								font-size: 18px;
								color: #FF6D26;
							}
						}
					}
				}
				.top_right {
					float: left;
					margin-left: 20px;
					width: 254px;
					text-align: left;
					color: #666666;
					.brade {
						font-size: 18px;
						span {
							font-size: 16px;
							font-weight: 200;
						}
					}
					.gcs {
						margin-top: 5px;
						.twig {
							display: inline-block;
							width: 87px;
							height: 6px;
							background: #D3D3D3;
							.bar {
								width: 80%;
								height: 100%;
								background: #FF6D26;
							}
						}
						span {
							vertical-align: middle;
						}
						.fen {
							font-weight: 100;
						}
					}
					.right_conents {
						overflow: hidden;
						width: 100%;
						margin: 35px 0;
						.contents {
							width: 1000px;
							.lis {
								border-right: 1px dashed #D3D3D3;
								display: inline-block;
								width: 80px;
								height: 55px;
								text-align: center;
								.text1 {
									padding-top: 10px;
									color: #FF6D26;
								}
							}
						}
					}
					.item {
						width: 100%;
						span {
							display: inline-block;
							border: 1px solid #D3D3D3;
							background: #F9F9F9;
							padding: 0 15px;
							margin-top: 20px;
							line-height: 30px;
							i {
								display: inline-block;
								width: 15px;
								height: 15px;
								padding-right: 10px;
								background: url(./img/pic_qq.png) no-repeat 0 0;
							}
						}
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
		.contents_box {
			width: 1181px;
			margin: 20px auto;
			text-align: left;
			background: #FFFFFF;
			border: 1px solid #D3D3D3;
			.details_nav {
				width: 100%;
				height: 50px;
				background: #f6f6f6;
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
			.divs{
				font-size: 50px;
				color: red;
				text-align: center;
			}
		}
	}
</style>