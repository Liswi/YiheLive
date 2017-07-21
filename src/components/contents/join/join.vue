<template>
	<div class="box">
		<div class="box-top">
			<div class="top-center">
				<div class="top-left">
					<p class="text">
						客服电话：<span>400-100-0907</span>
					</p>
					<p class="text">
						商务洽谈：<span>400-100-0907</span>
					</p>
					<p class="text">
						工作时间：<span>周一至周六</span>
					</p>
					<p class="text">上午8：00 - 12：00， 下午14：00 - 17：30</p>
				</div>
			</div>
		</div>
		<div class="box-bottom">
			<div class="bottom-hidden">
				<div class="circle">
					<div class="make">
						<p class="make1">我是用户</p>
						<p class="make2">功能建议</p>
						<p class="make3">期待您的建议和反馈</p>
						<p class="make3">不断完善成长</p>
						<p class="make4">
							<a @click="advise">提点建议</a>
						</p>
					</div>
				</div>
				<div class="circle r">
					<div class="make r">
						<p class="make1">我是商家</p>
						<p class="make2">商户入驻</p>
						<p class="make3">期待您的入驻</p>
						<p class="make3">共同打造新的平台</p>
						<p class="make4">
							<router-link to="">申请入驻</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cover" v-show="isShow">
			<div class="bali">
				<div class="bali-input">
					<textarea class="cover-text" placeholder="请输入您的意见，我们将与您共同成长(不得超过200字)"></textarea>
				</div>
				<div class="bali-btn">
					<a @click="back">返回</a>
					<a class="bg" @click="submit">提交</a>
				</div>
			</div>
		</div>
		<div class="suc" v-show="isSuccess">提交成功</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				isShow: false,
				isSuccess: false,
			}
		},
		methods: {
			advise() {
				this.isShow = true;
			},
			back() {
				this.isShow = false;
			},
			submit() {
				this.isShow = false;
				setTimeout(() => {
					this.isSuccess = true;
					setTimeout(() => {
						this.isSuccess = false;
					}, 1500);
				}, 1000);
			}
		}
	}
</script>

<style lang="less" scoped>
	.box {
		font-weight: 500;
	}
	
	.box-top {
		width: 100%;
		height: 360px;
		background: url("./img/pic001.png") no-repeat center;
		.top-center {
			width: 1181px;
			margin: 0 auto;
			overflow: hidden;
			.top-left {
				float: left;
				margin-top: 100px;
				.text {
					font-size: 26px;
					height: 50px;
					line-height: 50px;
					color: #666;
					text-align: left;
					span {
						color: #ff6c00;
					}
				}
			}
		}
	}
	
	.box-bottom {
		width: 1181px;
		margin: 0 auto;
		overflow: hidden;
		.bottom-hidden {
			width: 1500px;
			overflow: hidden;
		}
		.circle {
			float: left;
			width: 590px;
			height: 400px;
			border-right: 1px solid #d3d3d3;
			margin: 100px 0;
			.make {
				/*				margin: 0 auto;*/
				width: 400px;
				height: 400px;
				border: 1px solid #ec6917;
				border-radius: 50%;
				.make1 {
					font-size: 36px;
					color: #EC6917;
					height: 50px;
					line-height: 50px;
					margin-top: 100px;
				}
				.make2 {
					font-size: 20px;
					color: #666;
					height: 30px;
					line-height: 30px;
					margin: 10px 0;
				}
				.make3 {
					font-size: 14px;
					color: #999;
					height: 30px;
					line-height: 30px;
				}
				.make4 {
					margin-top: 10px;
					a {
						display: inline-block;
						font-size: 16px;
						font-weight: 800;
						height: 35px;
						line-height: 35px;
						color: #fff;
						background: #EC6917;
						padding: 0 30px;
						border-radius: 5px;
						text-decoration: none;
					}
				}
			}
			.r {
				float: right;
				border: 1px solid #008CE1;
				.make1 {
					color: #008CE1;
				}
				.make4 a {
					background: #008CE1;
				}
			}
		}
	}
	
	.cover {
		/*display: none;*/
		position: fixed;
		width: 1920px;
		height: 1080px;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .2);
		.bali {
			position: fixed;
			width: 650px;
			height: 390px;
			border: 4px solid #E2E2E2;
			top: 50%;
			left: 50%;
			margin: -325px 0 0 -195px;
			background: #fff;
			.bali-input {
				margin: 30px 30px 10px 30px;
				.cover-text {
					width: 100%;
					height: 270px;
					font-size: 16px;
					line-height: 20px;
					box-sizing: border-box;
					padding: 10px;
					border: 1px solid #d3d3d3;
				}
			}
			.bali-btn a {
				display: inline-block;
				background: #999;
				color: #fff;
				margin: 0 30px;
				padding: 0 30px;
				height: 35px;
				line-height: 35px;
				font-size: 16px;
				text-decoration: none;
				border-radius: 5px;
				margin-top: 15px;
			}
			.bali-btn .bg {
				background: #ff6c00;
			}
		}
	}
	
	.suc {
		position: fixed;
		top: 50%;
		left: 50%;
		color: white;
		background: rgba(0, 0, 0, .6);
		border-radius: 5px;
		padding: 0 30px;
		height: 30px;
		line-height: 30px;
	}
</style>