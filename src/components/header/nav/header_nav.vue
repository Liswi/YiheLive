<template>
	<div id="header_nav">
		<div id="guide" @mouseover.stop="showMenuList" @mouseout.stop="hideMenuList">
			行业分类 <span id="guide_ico"></span>
			<listMenu v-show="isMenushow"></listMenu>
		</div>
		<div class="nav_items">
			<router-link to="/home">首页</router-link>
		</div>
		<div class="nav_items">
			<router-link to="/choice">精选品牌</router-link>
		</div>
		<div class="nav_items">
			<router-link to="special">今日特价</router-link>
		</div>
		<div class="nav_items">
			<router-link :to="'rank'">积分商城</router-link>
		</div>
		<div class="nav_items">
			<router-link :to="'/join'">加入我们</router-link>
		</div>
		<div id="online_service" class="nav_items" @mouseover.stop="showService" @mouseleave.stop="hideService">
			<a >在线客服</a>
			<div class="service_items" v-show="isShow">
				<div class="arrows"></div>
				<div class="item">
					<span class="iconfont2 icon-qq"></span>在线客服1
				</div>
				<div class="item">
					<span class="iconfont2 icon-qq"></span>在线客服2
				</div>
				<div class="item">
					<span class="iconfont2 icon-qq"></span>在线客服3
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import listMenu from "./navList/navList"
	export default {
		name: "nav",
		data(){
			return{
				isShow:false,
				isMenushow:false,
			}
		},
		methods:{
			showService(){
				this.isShow=true;
			},
			hideService(){
				this.isShow=false;
			},
			showMenuList(){
				this.isMenushow=true;
			},
			hideMenuList(){
				this.isMenushow=false;
			}
		},
		components:{listMenu}
	}
</script>

<style lang="less" scoped>
@import url("./font/iconfont.css");
	#header_nav {
		position: relative;
		display: flex;
		height: 46px;
		width: 100%;
		line-height: 46px;
	}
	
	#guide {
		background-color: #018de2;
		font-size: 17px;
		color: white;
		width: 175px;
		margin-right: 40px;
		#guide_ico {
			display: inline-block;
			width: 15px;
			height: 15px;
			vertical-align: middle;
			margin-left: 13px;
			background: url("img/10.png") no-repeat 0 2px;
			background-size: contain;
			transform: rotateZ(180deg);
			transition: all 0.3s;
		}
		&:hover{
			#guide_ico{
				
				transform: rotateZ(0deg);
			}
		}
	}
	
	.nav_items {
		width: 148px;
		cursor: pointer;
		a {
			text-decoration: none;
			color: rgba(0,0,0,0.6);
			font-weight: 500 ;
		}
		&:hover {
			a {
				color: #ff6d25;
			}
		}
	}
	
	#online_service {
		width: 68px;
		position: absolute;
		right: 0;
		.service_items{
			z-index: 100;
			position: absolute;
			right: 0;
			top: 46px;
			 padding: 10px;
			 border:1px solid rgba(0,0,0,0.1);
			 background-color:white;
			 border-radius:2px;
			 .arrows{
			 	width: 10px;
			 	height: 10px;
			 	background: white;
			 	position: absolute;
			 	right: 20px;
			 	top: -7px;
			 	border-top: 1px solid rgba(0,0,0,0.1);
			 	border-right: 1px solid rgba(0,0,0,0.1);
			 	transform: rotateZ(-45deg);
			 }
			 .item{
			 	background: #FF6D25;
			 	border-radius: 3px;
			 	margin-bottom: 10px;
			 	cursor: pointer;
			 	color: white;
			 	font-size: 14px;
			 	height: 30px;
			 	width: 148px;
			 	line-height: 30px;
			 	span{
			 		margin-right: 10px;
			 	}
			 }
		}
	}
</style>