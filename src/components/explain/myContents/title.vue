<template>
		<div class="title" >
			<h1>{{con.con_title}}</h1>
			<div class="txt">
				<span>{{con.con_classify}}</span>
				<span>{{con.con_date}}</span>
			</div>
		</div>
</template>

<script>
	export default {
		name: "",
		props: {
			con: Object
		},
	}
</script>

<style lang="less" scoped>
	.title {
		text-align: center;
		padding: 40px 40px 0;
		h1{
			font-size: 20px;
			color: #666666;
			font-weight: 400;
			line-height: 40px;
		}
		.txt{
			font-size: 16px;
			color: #999999;
			line-height: 30px;
			margin: 10px 0 20px;
			span{
				margin: 0 60px;
			}
		}
	}
</style>