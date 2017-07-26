<template>
	<div id="header_topbar">
		<div class="wrap">
			<div class="city">
				所在城市：
				
				<router-link to="/index/city" class="pointer" >
					{{city}} 
					<span class="city_select"></span>
				</router-link>
				
			</div>
			
			<div class="userMenu">
				<span v-if="!isLogin">你好，&nbsp;<router-link to="/perCenter" class="login">{{name}}</router-link></span><a to="" class="reg" v-if="!isLogin" ><span @click="exit">退出</span></a>
				<router-link to="/login" class="login" v-show="isLogin">登录</router-link><router-link to="/reg" class="reg" v-show="isLogin">注册</router-link><router-link to=""  >我的订单</router-link><router-link to=""  >我的消息</router-link><router-link to=""  >我是商家</router-link><router-link to=""  ><span class="phoneico icon iconfont icon-dianhua"></span>400-800-8820</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{

		data:function(){
			return{
				city:"",
				isLogin:1,
			}
		},
		created(){
			this.city=window.localStorage.city
			this.$store.commit('changeuser',localStorage.userid);
			if(this.$store.state.userid!=0){
//				console.log(this.$store.state.userid)
				this.$http.post('/api/user',{userid:this.$store.state.userid},{emulateJSON:true}).then(res=>{
					this.isLogin=0;
					if(!res.body.err){
						this.$store.commit('changeName',res.body.data.username)	
					}else{
						return;
					}
				},err=>{
					console.log(err)
				})
			}else{
				console.log(this.$store.state.userid,"未登录")
			}
		},
		computed:{
			name(){
				return this.$store.state.user.name
			}
		},
		methods:{
			exit(){
				this.isLogin=1;
				localStorage.userid=0;
				this.$router.push({path:"/index"})
				this.$store.commit("emit")
			}
		}
		
	}
</script>
	
<style lang="less" scoped="scoped">
	@import url("font/iconfont.css");
	#header_topbar{
		height:34px;
		background: #eee;
		font-size: 12px;
		.wrap{
			width: 1181px;
			display: flex;
			margin: 0 auto;
			line-height: 34px;
			justify-content: space-between;
			.city_select{
				display: inline-block;
				width:5px;
				height:5px;
				border-right: 1px solid;
				border-top: 1px solid;
				transform:translateY(-2px) rotateZ(135deg) ;
			}
		}
	}
	.userMenu{
		
		a{
			border-left: 1px solid rgba(0,0,0,0.2);
			padding:0 17px;
			cursor: pointer;
			&:hover{
				color: darkred;
			}
		}
		.login{
			padding: 0;
			border: none;
			color: darkred;
		}
		.reg{
			border: none;
		}
	}
</style>