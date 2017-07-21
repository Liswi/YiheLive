<template>
	<div class="msg_detail_warp">
		<Tl :cmsg="title"></Tl>
		<div class="msg_detail_cont">
			<h2 class="cont_title">{{cont.t}}</h2>
			<p class="cont_inner">{{cont.c}}</p>
			<button class="beforeBtn" @click="before">返回</button>
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
		created() {
			this.cont.t = this.$route.params.title;
			this.cont.c = this.$route.params.detail
		},
		data() {
			return {
				title: "消息详情",
				cont: {
					t: "",
					c: ""
				}
			}
		},
		methods:{
			before :function  () {
				this.$router.go(-1);
			}
		}

	}
</script>

<style lang="less" scoped>
	.msg_detail_warp {
		width: 983px;
		height: 675px;
		background-color: white;
		border: 1px solid #D3D3D3;
		float: left;
		.msg_detail_cont {
			padding: 20px;
			.cont_title{
				font-size: 20px;
				color: #008CDD;
				text-align: center;
				padding: 20px;
			}
			.cont_inner{
				text-indent: 40px;
				padding: 20px;
			}
			.beforeBtn{
				width: 100px;
				height: 30px;
				font-size: 16px;
				background-color: #FF6C00;
				color: white;
				border: none;
				outline: none;
				border-radius:5px ;
				margin: 40px;
			}
		}
	}
</style>