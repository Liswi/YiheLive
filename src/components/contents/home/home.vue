<template>
	<div>
		<div v-wechat-title="$route.meta.title"></div> 
		<SlidePic v-if="isShow"></SlidePic>
		<div class="wrap" v-if="isShow">
	     <TopImg></TopImg>
	     <Brand></Brand>
	     <Cont></Cont>
	     </div>
	   

	      <router-view>
	      	
	      </router-view>

	</div>
</template>

<script>
	import TopImg from "./homeTopImg/homeTopImg"
	import Brand from "./home-brand/homeBrand"
	import Cont from "./home-cont/homeCont"
	import SlidePic from "@/components/slidePic/slidePic"
	export default{
		name:"home",
		data(){
			return{
				isShow:true
			}
		},
		created(){

			if(this.$route.matched.length>1){
				this.isShow=false
			}else{
				this.isShow=true
			}
		},
		destroyed(){
			
		},
		beforeUpdate(){

//			console.log(this.$route.matched)
			if(this.$route.matched.length>1){
				this.isShow=false
			}else{
				this.isShow=true
			}
				
			
		},
		components:{TopImg,Brand,Cont,SlidePic}
	}
</script>

<style lang="less" scoped>
	.wrap{
		width: 1181px;
		margin: 0 auto;
	}
</style>