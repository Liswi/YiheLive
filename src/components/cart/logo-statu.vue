<template>
	<div class="wrap">
		<router-link to="/index"><img src="./img/logo.png" alt="易和生活港" /></router-link>
		<div class="statu" :class="{step1:status==1,step2:status==2,step3:status==3}">
			<div class="statu1">我的购物车</div><span class="flag1"></span>
			<div class="statu2">确认订单信息</div><span class="flag2"></span>
			<div class="statu3">订单提交成功</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["status"]
	}
</script>

<style lang="less" scoped>
	.wrap{
		height: 160px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #ededed;
		.statu{
			height: 80px;
			width: 715px;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			div{
				background: #e5e5e5;
				height: 42px;
				width: 215px;
				line-height: 42px;
				text-align: center;
				position: relative;
				font-size: 17px;
				font-weight: 300;
			}
			span{
					display: inline-block;
					height:42px;
					width: 32px;
					background: white;
				}
		}
		.step1{
			.statu1{
				background: #ff6e26;
				color: white;
				}
				.flag1{
					background: url("./img/icons.png") -255px -144px;
				}
				.flag2{
					background: url("./img/icons.png") -255px -220px;
				}
		
		}
		.step2{
			.statu2{
				background: #ff6e26;
				color: white;
				}
				.flag1{
					background: url("./img/icons.png") -254px -272px;
				}
				.flag2{
					background: url("./img/icons.png") -255px -144px;
				}
		
		}
		.step3{
			.statu3{
				background: #ff6e26;
				color: white;
				}
				.flag1{
					background: url("./img/icons.png") -255px -220px;
				}
				.flag2{
					background: url("./img/icons.png") -254px -272px;
				}
		}
	}
</style>