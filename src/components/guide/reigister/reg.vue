<template>
<div>
<Topbar :city="city"></Topbar>
<div class="headtitle"><img src="../img/logo.png" alt="" /><h1>{{title}}</h1></div>
<div class="cont_wrap">
		<div class="login_block">
			<div class="number"><input type="number" placeholder="请输入手机号" v-model="phoneNum" @blur="checkNum"/> <span class="state" v-show="isNumRight"></span><span class="alert" v-show="isNumWrong"><em></em>手机号码不正确,请重新输入</span></div>
			<div class="password"><input type="password" placeholder="请输入密码(6-20位号码字符)" v-model="passWord" @blur="checkPass" @input="checkPass3"/><span class="state" v-show="isPassRight"></span><span class="alert" v-show="isPassWrong"><em></em>密码只能包含数字,字母,下划线</span></div>
			<div class="password2"><input type="password" placeholder="请再次输入密码"  v-model="passWord2" @blur="checkPass2" @input="checkPass3"/><span class="state" v-show="isPass2Right"></span><span class="alert" v-show="isPass2Wrong"><em></em>两次密码不一致</span></div>
			<div class="checkCode"><input type="text" placeholder="验证码" /> <img :src="check_code[i].url" alt="" /> <span class="exchange" @click="change">看不清换一张</span></div>
			<div class="phone_check">
				<input type="text" placeholder="手机验证码" /><button class="phone_checkcode">获取验证码</button>
			</div>
			<div style="margin-bottom: 20px;"><button class="login" @click="reg">注册</button> <router-link :to="{name:'Login',params:{city}}"><button class="reg">登录</button></router-link></div>
				
		</div>
</div>
</div>
</template>

<script>
	import Topbar from "../repeatuse/topbar"
	export default{
		name:"",
		data:function(){
		        return{
		        	title:"会员注册",
		        	city:"北京",
		        	phoneNum:"",
		        	passWord:"",
		        	passWord2:"",
		        	isNumRight:0,
		        	isNumWrong:0,
		        	isPassRight:0,
		        	isPassWrong:0,
		        	isPass2Right:0,
		        	isPass2Wrong:0,
		        	check_code:[{url:"/static/check_code/code1.jpeg",code:"ocfb"},{url:"/static/check_code/code2.jpeg",code:"ceec"},{url:"/static/check_code/code3.jpeg",code:"nhmm"},{url:"/static/check_code/code4.jpeg",code:"hwyh"},{url:"/static/check_code/code5.jpeg",code:"nmxh"},{url:"/static/check_code/code6.jpeg",code:"tyqh"}],
				i:0,
		        }
		},
		methods:{
			checkNum(){
				var reg=/^1[34578]\d{9}$/
				if(this.phoneNum!=""){
					if(reg.test(this.phoneNum)){
					this.isNumWrong=0
					this.isNumRight=1
				}else{
					this.isNumWrong=0
					this.isNumWrong=1
				}
				}else{
					this.isNumWrong=0
					this.isNumWrong=0
				}
				
			},
			checkPass(){
				var patrn=/^(\w){6,20}$/
				if(this.passWord!=""){
					if(patrn.test(this.passWord)){
					this.isPassWrong=0
					this.isPassRight=1
					if(this.passWord2!==""){
						if(this.passWord2==this.passWord){
					this.isPass2Wrong=0
					this.isPass2Right=1
				}else{
					this.isPass2Wrong=1
					this.isPass2Right=0
				}
					}
				}else{
					this.isPassRight=0
					this.isPassWrong=1
				}
				}else{
					this.isPassRight=0
					this.isPassWrong=0
				}
			},
			checkPass2(){
				if(this.passWord!=""){
				if(this.passWord2==this.passWord){
					this.isPass2Wrong=0
					this.isPass2Right=1
				}else{
					this.isPass2Wrong=1
					this.isPass2Right=0
				}}else{
					this.isPass2Wrong=0
					this.isPass2Right=0
				}
			},
			checkPass3(){
				if(this.passWord!=""&&this.passWord2!=""){
				if(this.passWord2==this.passWord){
					this.isPass2Wrong=0
					this.isPass2Right=1
				}else{
					this.isPass2Wrong=1
					this.isPass2Right=0
				}}
			},
			reg(){
				
			},
			change(){
				this.i=parseInt(Math.random()*7)
			}
		},
		components:{Topbar},
		created:function(){
			this.city=this.$route.params.city
		}
		
	}
</script>

<style lang="less" scoped>
	.headtitle{
		width: 1181px;
		height: 130px;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		h1{
			color: #999999;
			border-left: 1px solid #Dadada;
			height: 80px;
			line-height: 80px;
			font-weight: 400;
			margin-left: 30px;
			padding-left: 30px;
		}
	}
	.cont_wrap{
		background: url("../img/login.png");
		height: 575px;
		position: relative;
		.login_block{
			width: 310px;
			height: 495px;
			background: white;
			padding: 0 40px;
			position: absolute;
			right: 410px;
			top: 40px;
			div{
				margin-bottom: 30px;	
				position: relative;
				input{
					width:285px;
					height: 15px;
					border: 1px solid #cbcbcb;
					padding: 12px;
					font-weight: lighter;
					background: #F9F9F9;
					font-size: 15px;
					}
				.state{
					position: absolute;
					right: 12px;
					top: 16px;
					display: inline-block;
					width: 14px;
					height: 14px;
					background: url('../img/stateyes.png') 0 0;
					background-size: contain;
				}
				.alert{
					position: absolute;
					left: 5px;
					bottom: -23px;
					font-size: 12px;
					font-weight: light;
					color: red;
					em{
						display: inline-block;
						width: 12px;
						height: 12px;
						vertical-align: middle;
						margin-right: 5px;
						background: url('../img/alert.png') 0 0;
						background-size: contain;
					}
				}
			}
			.number{
				margin-top: 40px;
			}
			.password{
				
			}
			.checkCode{
				text-align: left;
				margin-bottom: 20px;
					input{
						width: 80px;
						}
						img{
							display: inline-block;
							width: 90px;
							margin: 0 5px 0 15px;
							vertical-align: middle;
						}
					.exchange{
						cursor: pointer;
						color: #f46b2b;
						font-size: 14px;
						font-weight: 200;
					}
			}
			.phone_check{
					.phone_checkcode{
						border:none;
						border-radius: 2px;
						height: 30px;
						width: 90px;
						background: #008CDD;
						font-size: 14px;
						font-weight: lighter;
						color: white;
						position: absolute;
						right:5px;
						top: 5px;
						
					}	
			}
			.login,.reg{
				width: 100px;
				height: 45px;
				border: none;
				border-radius: 4px;
				font-size:19px;
				font-weight: lighter;
				color: white;
				background: #F46B2B;
				
				}
				.login{
					margin-right: 30px;
				}
				.reg{
					background: #008CDD;
					margin-left: 30px;
				}
			
		}
	}
</style>