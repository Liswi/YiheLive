<template>
<div>
<Topbar :city="city"></Topbar>
<div class="headtitle"><img src="../img/logo.png" alt="" /><h1>{{title}}</h1></div>
<div class="cont_wrap">
		<div class="login_block">
			<div class="title_wrap"><span class="title">登录</span> 
			<span class="phonelogin"><router-link to="{name='phonelogin'}">手机验证码登录</router-link><em></em></span></div>
			<div class="number"><input type="number" placeholder="请输入手机号" v-model="phoneNumber" @blur="checkNum"/> <span class="state" v-show="isNumRight"></span><span class="alert" v-show="isNumWrong"><em></em>手机号码不正确,请重新输入</span></div>
			<div class="password"><input type="password" placeholder="请输入密码" v-model="passWord" @blur="checkPass"/><span class="state" v-show="isPassRight"></span><span class="alert" v-show="isPassWrong"><em></em>请输入正确的密码,密码中只能包含数字,字母,下划线</span></div>
			<div class="checkCode"><input type="text" placeholder="验证码" v-model="checkcode"/></span><span class="alert" v-show="isCheckWrong"><em></em>请输入正确的验证码</span><img :src="check_code[i].url" alt="" /> <span class="exchange" @click="change">看不清换一张</span></div>
			<div class="autolog">
				<input id="autologin" type="checkbox" v-model="isRemmber"/> <label for="autologin">自动登录</label>    <a href="">忘记密码</a>
			
			</div>
			<div style="margin-bottom: 20px;"><button class="login" @click="login">登录</button> <router-link :to="{name:'Reg',params:{city}}"><button class="reg">会员注册</button></router-link></div>
			<div class="line"><span>------------------</span>用合作网站登录<span>------------------</span></div>
				<div class="otherlogin">
					<img src="../img/weichat.png" alt="" /><img src="../img/qq.png" alt="" />
				</div>
				
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
		        	title:"会员登录",
		        	city:"北京",
		        	phoneNumber:"",
		        	passWord:"",
		        	checkcode:"",
		        	isNumRight:0,
		        	isNumWrong:0,
		        	isPassRight:0,
		        	isPassWrong:0,
		        	isCheckWrong:0,
		        	isRemmber:false,
		        	check_code:[{url:"/static/check_code/code1.jpeg",code:"ocfb"},{url:"/static/check_code/code2.jpeg",code:"ceec"},{url:"/static/check_code/code3.jpeg",code:"nhmm"},{url:"/static/check_code/code4.jpeg",code:"hwyh"},{url:"/static/check_code/code5.jpeg",code:"nmxh"},{url:"/static/check_code/code6.jpeg",code:"tyqh"}],
				i:0,
		        }
		},
	
			
			
		methods:{
			checkNum(){
				var reg=/^1[34578]\d{9}$/
				if(this.phoneNumber!=""){
					if(reg.test(this.phoneNumber)){
					this.isNumWrong=0
					this.isNumRight=1
				}else{
					this.isNumRight=0
					this.isNumWrong=1
				}
				}
				
			},
			checkPass(){
				var patrn=/^(\w){6,20}$/
				if(this.passWord!=""){
					if(patrn.test(this.passWord)){
					this.isPassWrong=0
					this.isPassRight=1
				}else{
					this.isPassRight=0
					this.isPassWrong=1
				}
				}else{
					this.isPassRight=0
					this.isPassWrong=0
				}
			},
			login(){
				if(this.isNumRight&&this.isPassRight){
					if(this.checkcode&&this.checkcode==this.check_code[this.i].code){
						this.isCheckWrong=0
						if(this.isRemmber==true){
							window.localStorage.passWord=this.passWord
							window.localStorage.phoneNumber=this.phoneNumber
						}else{
							window.localStorage.removeItem('passWord')
						}
							this.$http.post('/api/login',{
									userNumber:this.phoneNumber,
									passWord:this.passWord
								},{emulateJSON:true}).then((res)=>{
							if(res.body!="error"){
								localStorage.userid=res.body;
							this.$store.commit('changeuser',res.body)
							this.$router.push({path:"/index"})
							}else{
								alert("账号或密码错误,请重新输入")
							}
						},(err)=>{
							console.log(1,err)
						})
						
					}else{
						 	this.isCheckWrong=1
					}
				}else{
					alert("请输入完整的账号密码信息!")
				}
			},
			change(){
				this.i=parseInt(Math.random()*7)
			}
		},
		components:{Topbar},
		created:function(){
			this.change();
			this.city=this.$route.params.city
			if(window.localStorage.passWord!=""){
				this.isRemmber=true;
				this.phoneNumber=window.localStorage.phoneNumber
				window.localStorage.passWord=this.passWord
				this.checkNum()
			}
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
			right:10%;
			top: 40px;
			.title_wrap{
				margin:25px 0 15px 0;
				display: flex;
				justify-content:space-between;
				.title{
					font-size: 25px;
					color: rgba(0,0,0,0.5);
				}
				.phonelogin{
					font-size:14px;
					color: #008CDD;
					font-weight: 200;
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					/*margin-bottom: 20px;*/
					em{
						display: inline-block;
						margin-left: 5px;
						vertical-align: middle;
						width: 18px;
						height:18px;
						background: url(../img/phone.png) 0 0;
						background-size: contain;
					}
				}
			}
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
			.autolog{
				font-size: 14px;
				font-weight: light;
				text-align: left;
				margin-bottom: 20px;
				#autologin{
					width: 12px;
					vertical-align: middle;
					outline: none;
				}
				a{
					color:  #f46b2b;
					text-decoration: underline;
					margin-left: 140px;
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
			.line{
				font-size: 200;
				color: rgba(0,0,0,0.5);
				font-weight: light;
			}
			.otherlogin{
				img{
					display: inline-block;
					margin: 0 20px;
				}
			}
		}
	}
</style>