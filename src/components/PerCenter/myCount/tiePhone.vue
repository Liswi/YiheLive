<template>
	<div class="phone_warp">
		<Tl :cmsg=msg></Tl>
		<div class="phone_cont">
			<div class="progress">
				<p :class="{active_p :progress.pBol==1}">1.验证原手机号</p><span :class="{active_sp1:progress.spanBol==1,active_sp2:progress.spanBol==3,active_sp3:progress.spanBol==2}"></span>
				<p :class="{active_p :progress.pBol==2}">2.验证新手机号</p><span :class="{active_sp1:progress.spanBol==2,active_sp2:progress.spanBol==1,active_sp3:progress.spanBol==3}"></span>
				<p :class="{active_p :progress.pBol==3}">3.换绑成功</p>
			</div>
			<div class="message" :style="{display:disBol}">
				<div class="oldPhone">
					<input type="text" name="" id="" value="" />
				</div>
				<div class="iDFC">
					<!--验证码-->
					<input type="" name="" id="" value="" placeholder="验证码" /> <img src="../img/code.png"></img>
					<a href="javascript:void(0)">看不清？换一张</a>
				</div>
				<div class="phoneCode">
					<input type="" name="" id="" value="" /> <button id="codeBtn">获取验证码</button>
				</div>
				<button id="submitBtn" @click="submit">提交修改</button>
				
			</div>
		</div>
		<div id="step3">
			<p><span></span>恭喜您成功修改</p>
		</div>
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
				msg: "换绑手机",
				act: "step1",
				progress: {
					pBol: 1,
					spanBol: 1,
				},
				disBol: "",

			}
		},
		methods: {
			submit: function() {
				if(this.act == "step1") {
					this.act = "step2";

				} else if(this.act == "step2") {
					this.act = "step3";
				}
				if(this.act == "step1") {
					this.progress.pBol = 1;
					this.progress.spanBol = 1;
				} else if(this.act == "step2") {
					this.progress.pBol = 2;
					this.progress.spanBol = 2;
				} else {
					this.progress.pBol = 3;
					this.progress.spanBol = 3;
					this.disBol = "none";
					document.getElementById("step3").style.display="block";
				}
			}
		},

	}
</script>

<style lang="less" scoped>
	.phone_warp {
		width: 983px;
		font-size: 18px;
		float: left;
		background-color: white;
		border: 1px solid #D3D3D3;
		.phone_cont {
			padding: 20px;
			.progress {
				overflow: hidden;
				padding: 20px;
				p {
					background-color: #e5e5e5;
					width: 208px;
					text-align: center;
					line-height: 42px;
					float: left;
					height: 42px;
				}
				span {
					width: 31px;
					height: 42px;
					display: block;
					float: left;
					background-image: url(../img/sprite.png);
				}
				.active_p {
					background-color: #FF6C00;
					color: white;
				}
				.active_sp1 {
					background-position: -255px -144px;
				}
				.active_sp2 {
					background-position: -255px -220px;
				}
				.active_sp3 {
					background-position: -255px -272px;
					
				}
			}
			.message {
				padding: 20px;
				.oldPhone {
					width: 300px;
					padding: 10px;
					margin-bottom: 30px;
					border: 1px solid #D3D3D3;
					input {
						width: 100%;
						height: 100%;
						display: block;
						border: none;
						font-size: 18px;
					}
				}
				.iDFC {
					width: 500px;
					margin-bottom: 30px;
					img {
						display: inline-block;
						vertical-align: middle;
					}
					input {
						width: 114px;
						padding: 8px;
						font-size: 18px;
					}
					a {
						color: #FF6C00;
					}
				}
				.phoneCode {
					width: 300px;
					padding: 10px;
					margin-bottom: 30px;
					border: 1px solid #D3D3D3;
					input {
						width: 180px;
						height: 100%;
						border: none;
						outline: none;
						font-size: 18px;
					}
					button {
						width: 100px;
						height: 30px;
						background-color: #008DE1;
						border: none;
						outline: none;
						color: white;
						margin-left: 10px;
					}
				}
			}
			#submitBtn {
				width: 170px;
				height: 45px;
				border: none;
				border-radius: 5px;
				outline: none;
				background-color: #FF6D25;
				color: white;
				font-size: 20px;
				margin-bottom: 165px;
			}
		}
		#step3{
			height: 485px;
			display: none;
			position: relative;
			p{ 
				width: 300px;
				height: 50px;
				line-height: 50px;
				font-size: 30px;
				background-color: white;
				color: #FF6C00;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
			}
			span{
				width: 50px;
				height: 50px;
				display: inline-block;
				background-image: url(../img/sprite.png);
				background-position: -260px -360px;
				vertical-align: middle;
				
			}
		}
		
	}
</style>