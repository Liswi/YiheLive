<template>
	<div class="city_list">
		<div class="city_wrap">
				<RouNav></RouNav>
				<h3>当前城市: <div class="hot_city" style="font-size: 20px;">{{currCity}}</div></h3>
				<h3>热门城市: <div class="hot_city">哈尔滨</div> <div class="hot_city">洛阳</div></h3>
				<h3>最近访问: <div class="hot_city" v-for="item in recCity">{{item}}</div> </h3>
				<dl>
					<dt v-for="item in cityList"> <span>{{item.title}}</span> <b v-for="citem in item.list" @click="getCity(citem)">{{citem}}</b></dt>
				</dl>
		</div>
	</div>
</template>

<script>
	import RouNav from "@/components/repeatUse/routeNav/routeNav"
	export default{
		components:{
			RouNav	
		},
		data(){
			return{
				currCity:"",
				recCity:[],
				cityList:[{title:"A",list:["安阳"]},{title:"B",list:["北京","本溪","包头"]},{title:"C",list:["长春"]},{title:"D",list:["丹东","大连"]},{title:"F",list:["抚顺"]},{title:"H",list:["哈尔滨","邯郸","菏泽","呼和浩特",'衡水']},{title:"J",list:["济南","焦作","锦州","吉林","济宁"]},{title:"K",list:["开封"]},{title:"L",list:["临沂","洛阳"]},{title:"N",list:["南京","南昌"]},{title:"Q",list:["秦皇岛","青岛"]},{title:"S",list:["石家庄","上海"]},{title:"T",list:["太原","唐山","天津","泰安"]},{title:"W",list:["威海市","武汉","无锡","潍坊"]},{title:"X",list:["西安","邢台","新乡"]},{title:"Y",list:["烟台"]},{title:"Z",list:["张家口","淄博","郑州","枣庄"]}
			]
			}
		},
		created(){
			this.currCity=window.localStorage.city
			this.recCity=window.localStorage.recentCity
		},
		methods:{
			getCity(e){
				this.currCity=e
				window.localStorage.city=e
				console.log(window.localStorage.recentCity)
				if(window.localStorage.recentCity){
					
					window.localStorage.recentCity.unshift(e)
					if(window.localStorage.recentCity.length>6){
						window.localStorage.recentCity.splice(6,window.localStorage.recentCity.length-6)
					}
				}else{
					window.localStorage.recentCity=[];
				}
			}
		}
	}
</script>

<style lang="less" scoped>
		.city_list{
			
			background: white;
			color: rgba(0,0,0,0.7);
			.city_wrap{
			width: 1181px;
			margin: 0 auto;	
			}
			#arrows{
					display: block;
					width: 10px;
					height: 10px;
					background-color: white;
					z-index: 10;
					position: absolute;
					right: 80px;
					top: -6px;
					border-top: 1px solid rgba(0,0,0,0.15);
					border-right:1px solid rgba(0,0,0,0.15);
					transform: rotateZ(-45deg);
				}
				h3{
					height: 60px;
					border-bottom: 1px solid rgba(0,0,0,0.15);
					/*padding-left:20px;*/
					font-size: 18px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.hot_city{
						/*border: 1px solid #FF6D26;*/
						font-size: 16px;
						font-weight: 200;
						color: #FF6D26;
						height: 25px;
						margin: 0 5px;
						padding:0 20px;
						line-height: 25px;
					}
				}
				dl{
					/*padding: 0 15px;*/
					dt{
						border-bottom: 1px solid rgba(0,0,0,0.15);
						text-align: left;
						/*height: 50px;*/
						padding: 10px  0;
						&:hover{
							background: rgba(0,0,0,0.03);
							span{
								background: #2E8DED;
								color: white;
							}
						}
						span{
							display: inline-block;
							border:1px solid #eee;
							font-size: 20px;
							width: 55px;
							height: 55px;
							text-align: center;
							line-height: 55px;
						}
						b{
							margin:0 20px;	
							cursor: pointer;
						}
					}
				}
			}
</style>