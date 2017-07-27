<template>
	<div class="outlayer">
		<div v-wechat-title="$route.meta.title"></div>
		<div class="contents">
			<div class="sub" v-for="item in info">
				<div class="pic">
					<img :src="item.img" />
				</div>
				<router-link to="" class="text">{{item.txt}}</router-link>
				<div class="detailed">
					<span class="integral">积分：{{item.integrals}}</span>
					<span class="worth">价值 ¥{{item.worths}}</span>
				</div>
				<a href="javascript:;" class="convert" @click="hit">兑换</a>
			</div>
		</div>
		<div class="masks" v-show="isHit">
			<div class="select">
				<div class="select_top">
					信息
					<span class="back" @click="cancel"></span>
				</div>
				<div class="type">确定要兑换吗？</div>
				<div class="select_btn">
					<span class="btn l" @click="yes">确定</span>
					<span class="btn" @click="cancel">取消</span>
				</div>
			</div>
		</div>
		<div class="write" v-show="isWrite">请先填写收货地址</div>
		<Shopping v-show="isHide" v-on:close="close"></Shopping>
	</div>
</template>

<script>
	import Shopping from "@/components/repeatUse/address/address"
	export default {
		name: "",
		data() {
			return {
				isHit: false,
				isHide: false,
				isWrite: false,
				info:[{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				},{
					img:require("./img/1487535290891.jpg"),
					txt:'自家大礼包，送家人送朋友的不二之选！自家大礼包，送家人送朋友的不二之选',
					integrals:"1000",
					worths:"1000",
				}]
			}
		},
		methods: {
			hit() {
				this.isHit = true;
			},
			cancel() {
				this.isHit = false;
			},
			yes() {
				this.isHit = false;
				setTimeout(() => {
					this.isWrite = true;
					setTimeout(() => {
						this.isWrite = false;
					}, 1000);
				}, 500);
				setTimeout(()=>{
					this.isHide=true;
				},2000)
			},
			close() {
				this.isHide = false
			}
		},
		components: {
			Shopping
		}
	}
</script>

<style lang="less" scoped>
	.contents {
		width: 1181px;
		margin: 0 auto;
		overflow: hidden;
		.sub {
			border: 1px solid #f5f5f5;
			float: left;
			width: 220px;
			margin: 10px 5px 10px;
			&:hover {
				.text {
					text-decoration: underline;
					color: #FF6C00;
				}
				box-shadow:0 2px 5px #F0F0F0;
			}
			.pic {
				width: 180px;
				padding: 20px;
				cursor: pointer;
				img {
					width: 100%;
				}
			}
			.text {
				display: inline-block;
				margin: 0px 20px 5px;
				font-size: 14px;
				color: #000;
				line-height: 20px;
				text-decoration: none;
				height: 42px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.detailed {
				margin: 0 20px;
				padding-bottom: 10px;
				overflow: hidden;
				.integral {
					font-size: 16px;
					height: 30px;
					line-height: 30px;
					color: #FF6C00;
					float: left;
				}
				.worth {
					font-size: 14px;
					height: 30px;
					line-height: 30px;
					color: #666;
					float: right;
				}
			}
			.convert {
				display: inline-block;
				background: #FF6C00;
				font-size: 16px;
				color: #fff;
				height: 30px;
				line-height: 30px;
				padding: 0 20px;
				border-radius: 5px;
				text-decoration: none;
				margin-bottom: 20px;
			}
		}
	}
	
	.masks {
		position: fixed;
		width: 1920px;
		height: 1080px;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .2);
		.select {
			border-radius: 5px;
			position: fixed;
			width: 260px;
			height: 150px;
			top: 50%;
			left: 50%;
			margin: -75px 0 0 -130px;
			background: #FFFFFF;
			.select_top {
				border-bottom: 1px solid #eee;
				background: #f8f8f8;
				height: 42px;
				line-height: 42px;
				padding: 0 20px;
				text-align: left;
				font-size: 14px;
				.back {
					display: inline-block;
					width: 16px;
					height: 16px;
					background: url(../../footer/img/download.png);
					background-position: -57px -133px;
					transform: translateY(10px) rotate(45deg);
					float: right;
					cursor: pointer;
				}
			}
			.type {
				padding: 20px;
				line-height: 24px;
				font-size: 14px;
				text-align: left;
			}
			.select_btn {
				text-align: right;
				padding: 0 10px 12px;
				.btn {
					border: 1px solid #dedede;
					border-radius: 5px;
					display: inline-block;
					padding: 0 15px;
					background: #f1f1f1;
					height: 28px;
					line-height: 28px;
					font-size: 14px;
					color: #333;
					margin: 0 6px;
					cursor: pointer;
				}
				.l {
					background: #2e8ded;
					border: 1px solid #4898d5;
					color: #fff;
				}
			}
		}
	}
	
	.write {
		position: fixed;
		top: 50%;
		left: 50%;
		color: white;
		background: rgba(0, 0, 0, .5);
		border-radius: 5px;
		padding: 0 30px;
		font-size: 16px;
		height: 50px;
		line-height: 50px;
	}
</style>