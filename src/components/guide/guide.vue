<template>
	<div style="height: 100% ">
		<div v-wechat-title="$route.meta.title"></div> 
		<Topbar></Topbar>
			<Headtitle :city="currCity"></Headtitle>
		<div class="content">
			<h1 class="title">易和生活，纵享品质</h1>
			<div class="choice">
				<div class="input">
					<input type="" placeholder="请输入您所在的城市" @click="block"  v-model="city" @input="select"/>
					<div class="city_choice" >{{currCity}}</div>
					<div class="city_list" v-show="isShow">
				<span id="arrows">
					
				</span>
				<div :style="{overflow:'auto',height:'100%',position:'relative'}" >
				<div class="scrollWrap">
				<h3>热门城市: <div class="hot_city">哈尔滨</div> <div class="hot_city">洛阳</div></h3>
				<dl>
					<dt v-for="item in cityList"> <span>{{item.title}}</span> <b v-for="citem in item.list" @click="getCity(citem)">{{citem}}</b></dt>
				</dl>
				</div>
				</div>
			</div>
				</div>
				<router-link to="/index"><button>进入易和</button></router-link>
			</div>
			
		</div>
		<Footbar></Footbar>
	</div>
</template>

<script>
	import Topbar from "./repeatuse/topbar"
	import Headtitle from "./repeatuse/headtitle"
	import Footbar from "./repeatuse/bottom"
	export default{
		name:"",
		data:function(){
			return{
				isShow:0,
				isShow2:0,
				city:"",
				num:{
					line:'',
					col:''
				},
				currCity:"北京",
			cityList:[{title:"A",list:["安阳"]},{title:"B",list:["北京","本溪","包头"]},{title:"C",list:["长春"]},{title:"D",list:["丹东","大连"]},{title:"F",list:["抚顺"]},{title:"H",list:["哈尔滨","邯郸","菏泽","呼和浩特",'衡水']},{title:"J",list:["济南","焦作","锦州","吉林","济宁"]},{title:"K",list:["开封"]},{title:"L",list:["临沂","洛阳"]},{title:"N",list:["南京","南昌"]},{title:"Q",list:["秦皇岛","青岛"]},{title:"S",list:["石家庄","上海"]},{title:"T",list:["太原","唐山","天津","泰安"]},{title:"W",list:["威海市","武汉","无锡","潍坊"]},{title:"X",list:["西安","邢台","新乡"]},{title:"Y",list:["烟台"]},{title:"Z",list:["张家口","淄博","郑州","枣庄"]}
			]
			}
		},
		created(){
			this.currCity=window.localStorage.city	
		},
		methods:{
			getCity(city){
				this.currCity=city;
				window.localStorage.city=city
//				console.log(document.getElementsByClassName("choice")[0].getElementsByClassName("scrollWrap")[0].scrollTop)
			},
			block(){
				this.isShow=true;	
			},
			select(){
				if(this.city!=""){
					for(var item in this.cityList){
						if(this.cityList[item].list.indexOf(this.city)!=-1){
							this.num.line=item
							this.num.col=this.cityList[item].list.indexOf(this.city)
							var odt=document.getElementsByClassName("choice")[0].getElementsByTagName("dt")
//							odt[this.num.line].scrollIntoView();
							document.getElementsByClassName("choice")[0].getElementsByClassName("scrollWrap")[0].style.top=(this.num.line*(66)+61)*(-1)+"px"
							
							odt[this.num.line].getElementsByTagName("b")[this.num.col].style.border="2px solid orange"
							return;
						}
					}
				}
			}
		},
		components:{Topbar,Headtitle,Footbar}
	}
</script>

<style lang="less" scoped>
.scrollWrap{
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.5s;
	width: 100%;
}
	.content{
		height:650px;
		background: url("./img/guide_bg.png") no-repeat center -100px ;
		.title{
			color: white;
			font-weight: 200;
			font-size: 40px;
			padding: 130px 0 100px 0;
		}
		.choice{
			position: relative;
			.input{
				display: inline-block;
				/*width: 512px;*/
				padding: 10px 0 10px 25px ;
				background: #FFFFFF;
				input{
					height: 30px;
					width: 365px;
					font-size: 16px;
					font-weight: 200;
					outline: none;
					border: none;
			}
			.city_choice{
				display: inline-block;
				font-size: 17px;	
				width: 90px;
				border-left: 1px solid rgba(0,0,0,0.3);
				}
			}
			button{
				height: 50px;
				width: 170px;
				outline: none;
				cursor: pointer;
				vertical-align: middle;
				color: white;
				border-radius:5px;
				margin-left: 40px;
				border: none;
				font-size: 18px;
				background: #F46B2C;
			}
			}
		.city_list{
			border: 1px solid rgba(0,0,0,0.15);
			background: white;
			width: 702px;
			color: rgba(0,0,0,0.5);
			height: 260px;
			position: absolute;
			top: 70px;
			left:50%;
			margin-left: -351px;
			/*position: relative;*/
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
					padding-left:20px;
					font-size: 18px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.hot_city{
						border: 1px solid #FF6D26;
						font-size: 14px;
						font-weight: 200;
						color: #FF6D26;
						height: 25px;
						margin: 0 5px;
						padding:0 20px;
						line-height: 25px;
					}
				}
				dl{
					padding: 0 15px;
					dt{
						border-bottom: 1px solid rgba(0,0,0,0.15);
						text-align: left;
						/*height: 50px;*/
						padding: 15px  0;
						span{
							display: inline-block;
							background: #eee;
							color: #999;
							width: 45px;
							height: 35px;
							text-align: center;
							line-height: 35px;
							border-radius: 4px;
						}
						b{
							margin:0 10px;	
							cursor: pointer;
						}
					}
				}
			}
	}
</style>