<template>
	<div class="listMenu">
		<ul class="list">
			<li @mouseover="showChildMenu(1)">服装市场<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(2)">建材装修<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(3)">休闲娱乐<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(4)">生活服务<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(5)">3C市场<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(6)">丽人<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(7)">本地生活<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(8)">购物<span id="arrows"></span></li>
			<li @mouseover="showChildMenu(9)">电子数码<span id="arrows"></span></li>
		</ul>
		<div class="listContent">
			<a  v-for="item in arr">{{item}}</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"",
		data(){
			return{
				menuArr:[["男装","女装","男鞋","女鞋","潮流前线","嘻哈街区","箱包","时尚配饰"],["木地板","瓷砖","地暖","管道铺设","灯具","厨卫套装","床柜单品"],["电影","KTV","酒Bar","网咖","夜总会","茶餐厅","电玩"],["家政"],["手机商家","电脑配件","厨房电器件","智能生活","个护保健","显示器","油烟机"],["美妆","SPA中心","美发修护","足部护理","按摩","美甲"],["哪好吃",'哪好玩',"公园","景区","游泳馆","健身俱乐部"],["吃的","喝的","玩的","穿的","抽的","吸得"],["游戏机","掌机","PC端","移动端"]],
				arr:["男装","女装","男鞋","女鞋","潮流前线","嘻哈街区","箱包","时尚配饰"],
			}
		},
		methods:{
			showChildMenu(n){
				this.arr=this.menuArr[n-1];
			}
		}
	}
</script>

<style lang="less" scoped>
	.listMenu{
		position: absolute;
		z-index: 100;
		left: 0;
		top: 48px;
		height: 472px;
		width: 576px;
		background: rgba(0,0,0,0.5);
		overflow: hidden;
		border-radius: 1px;
		display: flex;
		justify-content: space-between;
		font-size: 15px;
				font-weight: 100;
		.list{
			background:rgba(0,0,0,0.5);
			width: 175px;
			li{
				
				
				height: 52px;
				line-height: 52px;
				border-bottom: 1px solid rgba(255,255,255,0.2);
				cursor:pointer;
				text-align: left;
				padding:0 40px;
				display: flex;
				justify-content: space-between;
				align-items:center;
				&:hover{
					background: #f46b2c;
				}
				#arrows{
					display: inline-block;
					width: 7px; 
					height: 7px;
					border-top: 1px solid white;
					border-right: 1px solid white;
					margin-bottom: 1px;
					transform: rotateZ(45deg);
					/*vertical-align: middle;*/				
					margin-left: 25px;
					}
			}
		}
		.listContent{
			padding:30px 30px 30px 20px;
			text-align: left;
			width: 350px;
			a{
				padding:0 20px;
				display: inline-block;
				height: 14px;
				line-height: 14px;
				border-right: 1px solid white;
				&:hover{
					color: orange;
					text-decoration: underline;
					cursor: pointer;
				}
			}
		}
	}
</style>