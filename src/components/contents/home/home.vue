<template>
	<div>
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
//			console.log("调用了生成钩子")
			if(this.$route.matched.length>1){
				this.isShow=false
			}else{
				this.isShow=true
			}
		},
		destroyed(){
//			console.log("调用了销毁")
		},
		beforeUpdate(){
//			console.log("调用了更新")
			console.log(this.$route.matched)
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