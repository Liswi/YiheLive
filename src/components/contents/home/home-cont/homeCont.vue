<template>
	<div class="home_cont_warp">
		<div id="" v-for="(item,index_top) in info">
			<div class="cont_top">
				<h2><span :class="item.ptn"></span>{{item.title}}</h2>
				<div class="cont_top_nav">
					<a href="javascript:void(0)" @mouseover="change(index_top,index,$event)" :key="index" v-for="(citem,index) in item.each">{{citem.title}}
					</a>
					<div class="change" :style="{left:0}"><span></span></div>
				</div>
			</div>
			<div class="cont_center" v-for="(citem,index) in item.each" :key="index" v-if="index==showArr[index_top]">
				<div class="cont_flag">
					<img :src="citem.img1" />
				</div>
				<div class="cont_list">
					<div class="list_warp">
						<ShopsInfo v-for="(item2,index) in citem.items" :key="index" :bitem="item2"></ShopsInfo>

					</div>
				</div>
			</div>
			<div class="cont_foot">
				<img :src="item.img2" />
			</div>
		</div>
	</div>
</template>

<script>
	import ShopsInfo from "./shopsInfo"
	export default {
		name: "",
		components:{ShopsInfo},
		data() {
			return {
				num:0,
				showArr:[],
				info: [{
					title: "汽车装饰",
					img2: "/static/img/home-cont-foot1.png",
					ptn:"position1",
				
						each: [
						{title:"精品装饰",
						img1: "/static/img/home-cont-flag1.png",
						items:[{
						shop: "汽车城1",
						
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}, {
						shop: "汽车城",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-2.png"
					}, {
						shop: "汽车城1",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-3.png"
					}, {
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-4.png"
					}, {
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-5.png"
					}, {
						shop: "汽车城4",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-6.png"
					}]},{title:"汽车美容",
						img1: "/static/img/home-cont-flag1.png",
						items:[{
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}, {
						shop: "汽车城",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-2.png"
					}, {
						shop: "汽车城1",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-3.png"
					}, {
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-4.png"
					}, {
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-5.png"
					}, {
						shop: "汽车城4",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-6.png"
					}]},{title:"洗车打蜡",
						img1: "/static/img/home-cont-flag1.png",
						items:[{
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}, {
						shop: "汽车城",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-2.png"
					}, {
						shop: "汽车城1",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-3.png"
					}, {
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-4.png"
					}, {
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-5.png"
					}, {
						shop: "汽车城4",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-6.png"
					}]}]
				},{
					title: "汽车装饰",
					img2: "/static/img/home-cont-foot1.png",
					ptn:"position1",
				
						each: [
						{title:"精品装饰",
						img1: "/static/img/home-cont-flag1.png",
						items:[{
						shop: "汽车城1",
						
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}, {
						shop: "汽车城",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-2.png"
					}, {
						shop: "汽车城1",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-3.png"
					}, {
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-4.png"
					}, {
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-5.png"
					}, {
						shop: "汽车城4",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-6.png"
					}]},{title:"汽车美容",
						img1: "/static/img/home-cont-flag1.png",
						items:[{
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}, {
						shop: "汽车城",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-2.png"
					}, {
						shop: "汽车城1",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-3.png"
					}, {
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-4.png"
					}, {
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-5.png"
					}, {
						shop: "汽车城4",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-6.png"
					}]},{title:"洗车打蜡",
						img1: "/static/img/home-cont-flag1.png",
						items:[{
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}, {
						shop: "汽车城",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-2.png"
					}, {
						shop: "汽车城1",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-3.png"
					}, {
						shop: "汽车城2",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-4.png"
					}, {
						shop: "汽车城3",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-5.png"
					}, {
						shop: "汽车城4",
						img1: "/static/img/home-cont-flag1.png",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-6.png"
					}]}]
				} ]
			}
		},
		created(){
			for(let i=0;i<this.info.length;i++){
				this.showArr[i]=0;
			}
	},
		methods: {
			change(m,n, $event) {
				 let num = n * 132;
				$event.currentTarget.parentElement.lastElementChild.style.left=num+"px";		
				this.showArr.splice(m,1,n)
			}
		}
	}
</script>

<style lang="less" scoped>
	.home_cont_warp {
		width: 1181px;
		margin-bottom: 50px;
		.cont_top {
			width: 100%;
			height: 70px;
			border-bottom: 3px solid #008de1;
			position: relative;
			h2 {
				font-size: 24px;
				color: #008de1;
				text-align: left;
				position: absolute;
				top: 28px;
				left: 0;
				span {
					display: inline-block;
					width: 24px;
					height: 24px;
					vertical-align: middle;
					background-image: url(./img/sprite.png);
					background-position: -205px -127px;
					margin-right: 24px;
					padding-top: -5px;
				}
				.position1 {
				background-position: -205px -127px;
			}
			
			.position2 {
				background-position: -205px -196px;
			}
			
			.position3 {
				background-position: -205px -260px;
			}
			
			.position4 {
				background-position: -205px -330px;
			}
				
			}
			.cont_top_nav {
				position: absolute;
				left: 336px;
				top: 36px;
				font-size: 20px;
				a {
					display: inline-block;
					width: 102px;
					margin-right: 30px;
				}
				.change {
					width: 102px;
					height: 3px;
					position: absolute;
					
					bottom: -9px;
					background-color: #ff6c00;
					transition: all 0.5s; 
					span {
						position: absolute;
						left: 50px;
						top: -4px;
						display: block;
						width: 0;
						height: 0;
						border-left: 4px solid transparent;
						border-right: 4px solid transparent;
						border-bottom: 4px solid #ff6c00;
					}
				}
			}
		}
		.cont_center {
			border: 1px solid #ccc;
			border-top: none;
			padding: 10px;
			overflow: hidden;
			.cont_flag {
				float: left;
				margin-right: 10px;
			}
			.cont_list {
				float: left;
				width: 832px;
				.list_warp {
					width: 1000px;
					overflow: hidden;
			
				}
			}
		}
		.cont_foot {
			margin-top: 30px;
		}
	}
</style>