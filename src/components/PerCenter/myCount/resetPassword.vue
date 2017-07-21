<template>
	<div class="resetPas_warp">
		<div id="tips" >
			<p><span></span>恭喜你成功修改</p>
		</div>
		<Tl :cmsg="Tl.title"></Tl>
		<ul class="resetPas_cont">
			<li>
				<input type="text" placeholder="请输入手机号" />
			</li>
			<li>
				<input type="text" placeholder="请输入密码（6-20位号码字符）" />
			</li>
			<li>
				<input type="text" placeholder="请再次输入密码" />
			</li>
			<li>
				<input type="" name="" id="remark" value="" placeholder="验证码" />
				<img src="../img/code.png" alt="" />
				<a href="javascript:void(0)">看不清换一张</a>
			</li>
			<li class="phone_Code">
				<input type="" name="" id="" value="" placeholder="手机验证码" />
				<button id="codeBtn">获取验证码</button>
			</li>
			<li>
				<button id="submitBtn" @click="subBtn">提交修改</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import Tl from "./title"
	export default {
		name: "",
		components: {
			Tl
		},
		data() {
			return {
				tips:"none",
				Tl: {
					title: "重置密码"
				},
				
			}
		},
		methods : {
		     subBtn: function(){
		     	var time = setTimeout(function  () {
		     		 document.getElementById("tips").style.display = "block";
		     		 var timer = setTimeout(function  () {
		     		 	 document.getElementById("tips").style.display = "none";		     		 	 
		     		 },1000);
		     	},100);               
		     }
		},
	}
</script>

<style lang="less" scoped>
	.resetPas_warp {
		width: 983px;
		height: 675px;
		float: left;
		background-color: white;
		border: 1px solid #D3D3D3;
		position: relative;
		#tips{			
			display: none;
			position: absolute;
			left: 50%;
		    top: 50%;
			padding: 70px 100px;
			border-radius:10px ;
			background-color: #7f7f7f;
			p{
				font-size: 24px;
				color: white;
			}
			span{
				width: 45px;
				height: 45px;
				display: inline-block;
				vertical-align: middle;
				background-image: url(../img/sprite.png);				
				background-position: -264px -360px;
			}			
		}
		.resetPas_cont {
			
			padding: 20px;
		
			input {
				border: 1px solid #D3D3D3;
				outline: none;
				padding: 10px;
				width: 300px;
				font-size: 16px;
			}
			li {
				margin-bottom: 30px;
				img {
					display: inline-block;
					vertical-align: middle;
				}
				a {
					color: #FF6C00;
				}
				#remark {
					width: 112px;
				}
			}
			.phone_Code {
				position: relative;
				#codeBtn {
					width: 100px;
					height: 32px;
					font-size: 16px;
					background-color: #008CE1;
					color: white;
					border: none;
					outline: none;
					position: absolute;
					top: 5px;
					left: 214px;
				}
			}
			#submitBtn{
				width: 170px;
				height: 50px;
				border: none;
				border-radius:5px ;
				color: white;
				background-color: #FF6C00;
				outline: none;
				font-size: 18px;
			}
		}
	}
</style>