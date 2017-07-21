<template>
	<div class="shopping_box">
		<div class="address">
			<div class="address_top">收货地址</div>
			<div class="address_contents">
				<div class="contents">
					<div class="composite one">
						<span class="star">*</span> 收货人姓名：
					</div>
					<input id="" class="w_input" />
				</div>
				<div class="contents">
					<div class="composite">
						<span class="star">*</span> 所在地区：
					</div>
				</div>
				<div class="contents">
					<div class="composite">
						<span class="star">*</span> 详细地址：
					</div>
					<input id="" class="w_input" />
				</div>
				<div class="contents">
					<div class="composite">
						<span class="star">*</span> 联系电话：
					</div>
					<input id="put" class="w_input " /> &emsp;或固定电话:&emsp;
					<input id="inp" class="w_input "  /> &emsp;-&emsp;
					<input id="ipt" class="w_input " />
				</div>
				<div class="contents bottom">
					<span class="text goBack" @click="goback">返回</span>
					<span class="text">保存</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		methods:{
			goback(){
				this.$emit("close")
			}
		}
	}
</script>

<style lang="less" scoped>
	.shopping_box {
		position: fixed;
		width: 1920px;
		height: 1080px;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .2);
		.address {
			position: fixed;
			width: 648px;
			height: 390px;
			top: 50%;
			left: 50%;
			margin: -199px 0 0 -328px;
			background: #FFFFFF;
			border: 4px solid #e2e2e2;
			.address_top {
				font-size: 18px;
				color: #008ee2;
				padding: 0 30px;
				height: 58px;
				line-height: 58px;
				text-align: left;
				border-bottom: 1px solid #e2e2e2;
			}
		}
		.address_contents {
			margin: 30px;
			height: 272px;
			.contents {
				height: 35px;
				margin: 0 0 20px -5px;
				overflow: hidden;
				.one {
					width: 120px;
					margin-left: -12px;
				}
				.w_input {
					border: 1px solid #D4D4D4;
					box-sizing: border-box;
					padding: 3px 8px;
					width: 480px;
					height: 35px;
					line-height: 35px;
					font-size: 16px;
					color: #666;
					outline: none;
				}
				#put{
					width: 150px;
				}
				#inp{
					width: 50px;
				}
				#ipt{
					width: 110px;
				}
			}
			.composite {
				float: left;
				width: 109px;
				font-size: 16px;
				color: #666;
				text-align: right;
				height: 35px;
				line-height: 35px;
				.star {
					color: #ff6c00;
					display: inline-block;
					vertical-align: -16%;
					font-size: 20px;
				}
			}
			.bottom{
				padding-top: 15px;
				margin-left: 0;
				.text{
					display: inline-block;
					background: #999;
					color: #fff;
					height: 35px;
					line-height: 35px;
					font-size: 16px;
					margin:0 30px;
					padding:0 30px;
					border-radius: 5px;
				}
				.goBack{
					background: #FF6C00;
					cursor: pointer;
				}
			}
		}
	}
</style>