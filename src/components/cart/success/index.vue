<template>
	<div class="success_wrap">
		<div class="icon"></div>
		<p>订单已提交, 请于24小时内完成支付 <span>( 逾期订单将被取消 ) </span></p>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped> 
	.success_wrap{
		.icon{
			width: 50px;
			height: 50px;
			background: url("/static/img/sprite.png") -260px -360px;
			margin: 40px auto;
		}
		p{
			font-size: 18px;
			color: rgba(0,0,0,0.5);
			span{
				color: #F46B2C;
			}
		}
	}
</style>