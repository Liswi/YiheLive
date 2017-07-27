<template>
	<div>
		<div v-wechat-title="$route.meta.title"></div>
		<SlidePic></SlidePic>
		<div class="" id="choice_wrap">
			<div class="wrap">
			<ShopsInfo v-for="(item,index) in  infoShowChange"  :key="index" :bitem="item" class="everyshop"></ShopsInfo>
			
			</div>
			<PageNation :pageinfo="pageinfo" @tab="tab"></PageNation>
		</div>
		
	</div>
</template>

<script>
	import SlidePic from "@/components/slidePic/slidePic"
	import ShopsInfo from "@/components/contents/home/home-cont/shopsInfo"
	import PageNation from "@/components/repeatUse/pageNation/pageNation"
	export default{
		name:"",
		data(){
			return{
				infoShow:[],
				pageinfo:{infoNum:"",everyNum:16},
				showStart:0,
				 info:[{
						shop: "汽车城1",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城2",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城3",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城4",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城5",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城6",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城7",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城8",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城9",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城10",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城11",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城12",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城13",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城14",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城15",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城16",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城17",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城18",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城19",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城20",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					
					{
						shop: "汽车城21",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城22",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城23",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城24",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城25",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城26",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					
					{
						shop: "汽车城27",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城28",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城29",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城30",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城31",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城32",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城33",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},
					{
						shop: "汽车城34",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					},{
						shop: "汽车城35",
						name: "李杰",
						phone: "15894453678",
						localion: "河南省郑州市高新区",
						img: "/static/img/cont-list1-1.png"
					}
					
			]
			}
		},
		created(){
			this.pageinfo.infoNum=this.info.length;
		},
		computed:{
			infoShowChange(){
				if(this.info.length>this.pageinfo.everyNum){
				this.infoShow=this.info.slice(this.showStart,this.showStart+this.pageinfo.everyNum)
//				console.log(this.infoShow)
				}else{
				this.infoShow=this.info.slice(0)
				}
				return this.infoShow
			}
			
		},
		methods:{
			tab(data){
				this.showStart=(data-1)*this.pageinfo.everyNum;
				}
			  },
		components:{
			SlidePic,
			ShopsInfo,
			PageNation
		}
	}
</script>

<style lang="less" scoped>
	#choice_wrap{
		overflow: hidden;
		width: 1181px;
		margin: 40px auto;
		
		.wrap{
			/*float: left;*/
			display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
			width: 100%;
			margin:0 20px 30px 30px;
			.everyshop{
				margin-right: 20px;
				margin-bottom: 15px;
				box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
			}
		}
	}
</style>