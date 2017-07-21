<template>
	<div class="topbar">

			<div class="topcont">
				<span class="left_cont" ><router-link to="" v-show="city"><span>所在城市: </span><span>{{city}}<span class="city_select"></span></span></router-link></span>
				<span class="right_cont"><span class="title">欢迎光临易和生活港</span><span>我是商家</span><span ><em class="iconfont icon-dianhua"></em>400-800-8820</span></span>
			</div>
		</div>
</template>

<script>
	export default{
		name:"",
		props:["city"]
	}
</script>

<style lang="less" scoped>
@import url("./font/iconfont.css");
	.topbar{
		height: 34px;
		background: #eee;
		font-size:12px;
		.topcont{
			width: 1181px;
			margin: 0 auto;
			display:flex;
			justify-content:space-between;
			line-height:34px;
			.city_select{
				display: inline-block;
				width:5px;
				height:5px;
				border-right: 1px solid;
				border-top: 1px solid;
				margin-left: 4px;
				transform:translateY(-2px) rotateZ(135deg) ;
			}
			.right_cont{
				.title{
					border: none;
				}
				span{
					border-left: 1px solid darkgray;
					padding:0 20px;
					cursor: ppointer;
					&:hover{
						color: darkred;
					}
				} 
				
			}
		}
	}
</style>