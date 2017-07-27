<template>
  <div id="app">
    <Header v-if="isShowHeader"></Header>
    <router-view></router-view>
    <Footer v-if="isShowFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/header/header"
import Footer from "@/components/footer/footer"
export default {
  name: 'app',
	data(){
		return{
			isShowHeader:1,
			isShowFooter:1,
		}
	},
	created(){
		if(this.$route.name=="guide"||this.$route.path.split('/')[1]=="cart"){
			this.isShowHeader=0;
			this.isShowFooter=0
		}else if(this.$route.name=="Login"||this.$route.name=="Reg"){
			this.isShowHeader=0;
			this.isShowFooter=1;
		}else if(this.$route.name!="Login"&&this.$route.name!=="Reg"){
			this.isShowHeader=1;
			this.isShowFooter=1;
		}else{
			
		}
	},
	beforeUpdate(){
		if(this.$route.name=="guide"||this.$route.path.split('/')[1]=="cart"){
			this.isShowHeader=0;
			this.isShowFooter=0
		} else if(this.$route.name=="Login"||this.$route.name=="Reg"){
			this.isShowHeader=0;
			this.isShowFooter=1;
		}else if(this.$route.name!="Login"&&this.$route.name!=="Reg"){
			this.isShowHeader=1;
			this.isShowFooter=1;
		}else{
			
		}
	},
	methods: {
		
	},
	components:{
		Header,Footer
	},
	beforeDestroy(){
		window.localStorage.removeItem("passWord")
	}
}
</script>

<style>
	@import url("./css/reset.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
}
</style>
