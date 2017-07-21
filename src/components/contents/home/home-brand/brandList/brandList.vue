<template>
	<div class="brand_list_warp">
		<div class="list_cont" v-for="(item,index) in srcArr" @click="goStore(index)">
			<div class="cover"></div>
			<img :src="item" alt="" />	
			<!--<img src="./img/brand-1.png"/>-->			
		</div>
	</div>
</template>

<script>
	export default{
		name:"",
		data(){
			return {
				srcArr: [],
			}
		},
		created:function(){
			for(var i=0;i<12;i++){
				this.srcArr[i] = require("./img/brand-"+(i+1)+".png");
			}
		},
		methods:{
			goStore(){
				this.$router.push({name:"store"})
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