<template>
  <div id="app">
    <Header></Header>
    <Slide></Slide>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/header"
import Slide from "@/components/slidePic/slidePic"
import Footer from "@/components/footer/footer"
export default {
  name: 'app',
	data(){
		return{
			msg:"我是一个app"
		}
	},
	methods: {
		tanchu:function(){
			console.log("1");
		}
	},
	components:{
		Header,Slide,Footer
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
