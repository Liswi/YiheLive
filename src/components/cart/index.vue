<template>
		<div>
			<div v-wechat-title="$route.meta.title"></div>
			<Topbar></Topbar>
			<div class="cart_wrap">
				<div class="cart_content">
				<Statu :status="status"></Statu>
				<router-view></router-view>
				</div>
			</div>
			<footer>
				<p>版权所有 © 2016易和生活港&nbsp;&nbsp;保留所有权利&nbsp;|&nbsp; 沪ICP备12042163</p>
					<p class="blue">易和生活&nbsp;&nbsp;纵享品质</p>
			</footer>
		</div>
</template>
<script>
	import Topbar from "@/components/header/headerTopbar/headerTopbar"
	import Statu from "./logo-statu"

	export default{
		data(){
			return{
				status:1,
			}
		},
		components:{
			Topbar,
			Statu
		},
		created(){
		
			if(this.$route.path.split("/")[2]=="confirm"){
					this.status=2;
//					console.log(this.status)
			}else if(this.$route.path.split("/")[2]=="success"){
				this.status=3;
//				console.log(this.status)
			}
		},
		beforeUpdate(){
//			console.log(this.$route.path.split("/")[2])
			if(this.$route.path.split("/")[2]=="confirm"){
					this.status=2;
//					console.log(this.status)
			}else if(this.$route.path.split("/")[2]=="success"){
				this.status=3;
//				console.log(this.status)
			}else if(this.$route.path.split("/")[2]=="car"||this.$route.path.split("/")[2]==undefined){
				this.status=1
			}
		}
	}
</script>

<style lang="less" scoped>
	.cart_wrap{
		width: 1179px;
		/*height: 100px;*/
		margin:25px auto 0;
		border: 1px solid #f7f7f7;
		.cart_content{
			width:1100px;
			margin: 0 auto;
		}
	}
	footer{
		padding: 40px;
		font-size: 14px;
		font-weight:200;
		color:rgb(153,153,153);
		p{
			margin-bottom: 15px;
		}
		.blue{
			color:#0183c4;
		}
	}
</style>