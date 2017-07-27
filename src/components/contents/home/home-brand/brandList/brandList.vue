<template>
	<div class="brand_list_warp">
		<div class="list_cont" v-for="(item,index) in srcArr" @click="goStore(item.name,index)">
			<div class="cover"></div>
			<img :src="item.img" alt="" />	
			<!--<img src="./img/brand-1.png"/>-->			
		</div>
	</div>
</template>

<script>
	export default{
		name:"",
		data(){
			return {
//				shopName:["海澜之家旗舰店",""],
				srcArr: [{name:"One SmAlL SHoP",img:"./img/brand-1.png",shopId:"6"},{name:"蓝鸥大卖场",img:"./img/brand-2.png",shopId:"8"},{name:"太平鸟服饰",img:"./img/brand-3.png"},{name:"美特斯邦威",img:"./img/brand-4.png"},{name:"杰克琼斯",img:"./img/brand-5.png"},{name:"阿玛尼",img:"./img/brand-6.png"},{name:"香奈儿",img:"./img/brand-7.png"},{name:"海澜之家旗舰店",img:"./img/brand-8.png"},{name:"海澜之家旗舰店",img:"./img/brand-9.png"},{name:"海澜之家旗舰店",img:"./img/brand-10.png"},{name:"海澜之家旗舰店",img:"./img/brand-11.png"},{name:"波司登羽绒服",img:"./img/brand-12.png"}],
			}
		},
		created(){
			for(var i=0;i<12;i++){
				this.srcArr[i].img = require(this.srcArr[i].img+"");
			}
		},
		methods:{
			goStore(name,index){
				this.$store.commit("changeStore",name)
				sessionStorage.store=name
				sessionStorage.id=this.srcArr[index].shopId
				this.$router.push({name:"store",params:{shopid:this.srcArr[index].shopId,shopName:name}})
			}
		}
	}
</script>

<style lang="less" scoped>
	.brand_list_warp{
		margin-left: 10px;
		float: left;		
		width: 832px;
		height: 351px;
		border-right:1px solid #ccc;
		border-bottom: 1px solid #ccc;
		.list_cont{
			cursor: pointer;
			position: relative;
			width: 207px;
			height: 116px;					
			float: left;
			border-top: 1px solid #ccc;
			border-left: 1px solid #ccc;			
			.cover{
				position: absolute;
				top: -1px;
				left: -1px;
				width: 100%;
				height: 100%;
				border: 1px solid red;
				display: none;
				z-index: 10;
			}
			img{
				margin: 18px auto;
			}
			&:hover .cover{
				display: block;
			}
		}		
	}

</style>