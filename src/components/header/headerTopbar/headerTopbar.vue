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
				<router-link to="" class="login">登录</router-link><router-link to="" class="reg">注册</router-link><router-link to=""  >我的订单</router-link><router-link to=""  >我的消息</router-link><router-link to=""  >我是商家</router-link><router-link to=""  ><span class="phoneico icon iconfont icon-dianhua"></span>400-800-8820</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"topbar",
		data:function(){
			return{
				city:""
			}
		},
		created(){
			this.city=window.localStorage.city
		},
		methods:{
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