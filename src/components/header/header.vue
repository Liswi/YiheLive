<template>
	<header>
		<Topbar></Topbar>
		<div class="header_content">
			<router-link to="home"><img src="./img/logo.png" alt="" class="logo"/></router-link>
			<div class="search_block">
				<span class="shop" :class="{blue:num==1}" @click="switchClass(1)">商家</span>
				<span class="goods" :class="{blue:num==2}" @click="switchClass(2)">商品</span>
				<input type="text" name="" id="" value="" placeholder="请输入商家名称或关键字进行筛选" /><button class="search_button"></button>
				<div class="hotTag"><strong>热门:</strong> <router-link to="" v-for="(item,index) in hotArr" :key="index">{{item}}</router-link></div>
			</div>
			<div class="my">
					<div class="myinfo">
						<div class="myYihe" @click="goCenter">
							<span class="iconfont1 icon-rentou" ></span>我的易和<span class="arrows"></span><em class="news">1</em>
						</div>
						<div class="shopcar" @click="goCart">
							<span class="iconfont1 icon-gouwuche"></span>购物车<span class="arrows"></span><em class="car_goods">0</em>
						</div>
					</div>
			</div>
		</div>
		
		<div id="nav_wrap">
			<Nav> </Nav>
		</div>
	</header>
	
</template>
	
<script>
	import Nav from "./nav/header_nav"
	import Topbar from "./headerTopbar/headerTopbar"
	export default{
		name:"header",
		data(){
			return{
				num:1,
				hotArr:["酒店","洗车","餐饮","进口","旅游","如家"],
			}
		},
		methods:{
			switchClass(n){
				this.num=n;
			},
			goCenter(){
				this.$router.push({path:'/perCenter'})	
			},
			goCart(){
				this.$router.push({path:'/cart'})	
			}
		},
	components:{ Topbar, Nav,}
	}
</script>

<style lang="less" scoped>
	@import url("./font/iconfont.css");
	header{
		height:210px;
		position: relative;
		border-bottom:2px solid #018de2;
		.header_content{
			display:flex;
			width:1181px;
			margin:0 auto;
			justify-content:space-between;
			align-items:center;
			height:130px;
			
			.logo{
				width: 140px;
				height: 80px;
				}
			.search_block{
			position: relative;
			margin-left:200px;
			margin-bottom: -23px;
			.shop,.goods{
				display: inline-block;
				font-size: 15px;
				line-height: 26px;
				cursor: pointer;
				width: 52px;
				height: 26px;
				position: absolute;
				left: 0;
				top: -26px;
				&:hover{
					background: #018de2;
					color: white;
					font-weight: bold;
				}
			}
			.goods{
				left: 52px;
			}
			.blue{
				background: #018de2;
				color: white;
				font-weight: bold;
			}
			input{
				width: 442px;
				height: 30px;
				border: 2px solid #018de2;
				outline: none;
				font-size:14px;
				padding-left: 10px;
				
			}
			.search_button{
				height: 34px;
				width: 48px;
				cursor: pointer;
				background: #018de2 url("./img/search.png") no-repeat 14px 8px;
				background-size: 21px 21px;
				border: none;
				vertical-align: middle;
				}
			.hotTag{
				font-size: 12px;
				text-align: left;
				margin-top: 5px;
				a{
					margin-left:22px;
					&:hover{
						color: red;
					}
				}
			}
		}
		.myinfo{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 16px;
			.shopcar,.myYihe{
				height: 32px;
				line-height: 30px;
				font-size: 14px;
				font-weight: light;
				cursor: pointer;
				border: 1px solid #d3d3d3;
				background: #f9f9f9;
				position: relative;
				span{
					margin: 0 10px;
					}
				.arrows{
					display: inline-block;
					border: 5px solid transparent;
					border-top:5px solid #999;
					height:0;
					vertical-align: middle;
	
				}
				em{
					display: block;
					width: 20px;
					height: 20px;
					line-height: 18px;
					text-align: center;
					font-style: normal;
					position: absolute;
					right: 10px;
					top: -10px;
					color: white;
					font-size: 12px;
					background: url("./img/news.png") 0 0;
					background-size: contain;
				}  
				}
			.myYihe{
				margin-left: 60px;
			}
			.shopcar{
				margin-left: 20px;
			}
		}
		
		}
		
		#nav_wrap{
			width:1181px;
			margin: 0 auto;
		}
	}
</style>