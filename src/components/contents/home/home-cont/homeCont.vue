<template>
	<div class="home_cont_warp">
		<div id="" v-for="(item,index_top) in floor_info">
			<div class="cont_top">
				<h2><img :src="item.icon"  />{{item.title}}</h2>
				<div class="cont_top_nav">
					<a href="javascript:void(0)" @mouseover="change(index_top,index,$event)" :key="index" v-for="(citem,index) in item.classify">{{citem}}
					</a>
					<div class="change" :style="{left:0}"><span></span></div>
				</div>
			</div>
			<div class="cont_center_wrap">
			<div class="cont_center" v-for="(citem,index) in floor_shop[index_top]" :key="index" v-if="index==showIndex[index_top]">

				<div class="cont_flag">
					<img :src="citem.title_img" />
				</div>
				<div class="cont_list">
					<div class="list_warp">
						<ShopsInfo v-for="(item2,index) in citem.shops" :key="index" :bitem="item2"></ShopsInfo>

					</div>
				</div>
			</div>
			</div>
			<div class="cont_foot">
				<img :src="item.img2" />
			</div>
		</div>
		<transition name="fade">
			<ScrollBar class="scroll_b" :msg="scrollBarData" v-show="isShow" v-on:clickFl="tab" v-on:gotoTop="tab2"></ScrollBar>
		</transition>
	</div>
</template>

<script>
	import ShopsInfo from "./shopsInfo"
	import ScrollBar from  "../scrollFloor/scroll-bar"
	export default {
		name: "",
		components:{ShopsInfo,ScrollBar},
		data() {
			return {
				num:0,
				isShow:false,
				scrollBarData:[],
				showIndex:[],
				floor_info:[
					{title:"餐饮",
					icon:"./img/floor1.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["火锅","自助餐","小吃餐饮","日韩料理","西餐","烧烤烤肉","东北菜"],
					},
					{title:"服饰",
					icon:"./img/floor2.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["男装","凉鞋凉拖","潮流女包","精品男包","功能箱包","其他服饰","女装"]
					},
					{title:"娱乐",
					icon:"./img/floor3.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["桌游","电玩","运动健身","足疗按摩","洗浴汗蒸","温泉","DIY手工","密室逃脱"]
					},
					{title:"家具",
					icon:"./img/floor4.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["成套家具","床类","柜类","床垫","沙发","卓类","椅凳","架箱类"]
					},
					{title:"零售",
					icon:"./img/floor5.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["超市","水果生鲜","日用品","百货","配件","其他产品"]
					},
					{title:"日化",
					icon:"./img/floor6.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["面部护理","洗发护身","身体护理","口腔护理","女性护理","香水彩妆"]
					},
					{title:"建材",
					icon:"./img/floor7.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["基础建材","卫浴洁具","厨卫电器","卫浴五金","地板地暖","灯具开关"]
					},
					{title:"酒店",
					icon:"./img/floor8.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["经济型酒店","豪华酒店","主题酒店","公寓型酒店","青年旅社"]
					},
					{title:"旅游",
					icon:"./img/floor9.png",
					img2: "/static/img/home-cont-foot1.png",
					classify:["温泉","景点","主题公园","水上公园","动植物园","海洋馆","展览馆","游船"]
					},
					
				],	

				floor_shop:[[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}],[{title_img:"/static/img/home-cont-flag1.png",shops:[]},{title_img:"/static/img/home-cont-flag2.png",shops:[]},{title_img:"/static/img/home-cont-flag3.png",shops:[]}]],
			}
				
		},
		created(){
			this.scrollBar(window.document);
			for(let i = 0; i < this.floor_info.length; i++) {
				this.scrollBarData.push({
					title: this.floor_info[i].title,
					index: i + 1
				})
			}
			for(let i=0;i<this.floor_info.length;i++){
				this.floor_info[i].icon=require(this.floor_info[i].icon+"")
				this.showIndex[i]=0
			}
			this.$http.get("api/home").then(data=>{
//				console.log(data)
				for(let i=0;i<this.floor_shop.length;i++){
					  this.floor_shop[i][0].shops=data.body[0]
				      this.floor_shop[i][1].shops=data.body[1]
				      this.floor_shop[i][2].shops=data.body[2]
				}	    	 
			},err=>{
				console.log(err)
			})
			
	},
		methods: {
			change(m,n, $event) {
				 let num = n * 100;
				$event.currentTarget.parentElement.lastElementChild.style.left=num+"px";		
				this.showIndex.splice(m,1,n)
			},
			tab2() {
				this.tab(0)
			},
			tab(data) {
				var nowST = document.body.scrollTop;
				var tagST = 1250 + data * 758;
				var speed=50;
				var timer = setInterval(function() {	
					if(document.body.scrollTop>tagST){
						document.body.scrollTop -= speed
						speed-=1
						if(speed<20){
							speed=20
						}
					if(document.body.scrollTop <= tagST) {
						clearInterval(timer);
					}
					}else if(document.body.scrollTop<tagST){
						document.body.scrollTop += speed
						speed-=1
						if(speed<20){
							speed=20
						}
					if(document.body.scrollTop >= tagST) {
						clearInterval(timer);
					}
					}else{
						clearInterval(timer);
					}
					
				}, 5)

			},
			scrollBar(ele) {
				//判断是否是火狐

				var isFF = navigator.userAgent.indexOf("Firefox") == -1;
				if(isFF) {
					//非火狐
					ele.onmousewheel = scroll.bind(this);

				} else {
					//火狐
					ele.addEventListener("DOMMoouseScroll", scroll, false);

				}

				function scroll(event) {
					//					alert(1)
					//记录滚动方向 false 向下 true向上
					var h = document.body.scrollTop;
					//					console.log(h, this)
					var bar = document.getElementsByClassName("scroll_b")[0];

					if(h <= 1050) {
						this.isShow = false;
					} else {
						this.isShow = true;
					}
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
	.home_cont_warp {
		width: 1181px;
		margin-bottom: 50px;
		.cont_center_wrap{
			height: 535px;
		}
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
				display: inline-block;
				top: 28px;
				left: 0;
				img{
					display: inline-block;
					width: 30px;
					height: 30px;
					vertical-align: top;
					margin-right: 24px;
					padding-top: -5px;
				}
			}
			.cont_top_nav {
				position: absolute;
				left: 336px;
				top: 37px;
				font-size: 20px;
				a {
					display: inline-block;
					width: 100px;
					/*padding:0 12px;*/
					font-size: 16px;
				}
				.change {
					width: 102px;
					height: 3px;
					position: absolute;
					
					bottom: -9px;
					background-color: #ff6c00;
					transition: all 0.3s; 
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
				background:#FF6E26;
				
			}
			.cont_list {
				float: left;
				width: 832px;
				.list_warp {
					width: 100%;
						display:flex;
						justify-content: space-between;
						flex-wrap: wrap;
					overflow: hidden;
			
				}
			}
		}
		.cont_foot {
			margin-top: 30px;
		}
	}
</style>