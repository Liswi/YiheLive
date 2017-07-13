<template>
	<div id="header_nav">
		<div id="guide">
			行业分类 <span id="guide_ico"></span>
		</div>
		<div class="nav_items">
			<router-link to="/home">首页</router-link>
		</div>
		<div class="nav_items">
			<router-link to="/choice">精选品牌</router-link>
		</div>
		<div class="nav_items">
			<router-link to="special">今日特价</router-link>
		</div>
		<div class="nav_items">
			<router-link :to="'rank'">积分商城</router-link>
		</div>
		<div class="nav_items">
			<router-link :to="'/join'">加入我们</router-link>
		</div>
		<div id="online_service" class="nav_items"><a>在线客服</a></div>
	</div>
</template>

<script>
	export default {
		name: "nav",
	}
</script>

<style lang="less" scoped>
	#header_nav {
		position: absolute;
		bottom: 0;
		display: flex;
		height: 46px;
		width: 100%;
		line-height: 46px;
	}
	
	#guide {
		background-color: #018de2;
		font-size: 17px;
		color: white;
		width: 175px;
		margin-right: 40px;
		#guide_ico {
			display: inline-block;
			width: 15px;
			height: 15px;
			vertical-align: middle;
			margin-left: 13px;
			background: url("img/10.png") no-repeat 0 2px;
			background-size: contain;
		}
	}
	
	.nav_items {
		width: 148px;
		cursor: pointer;
		a {
			text-decoration: none;
			color: black;
		}
		&:hover {
			a {
				color: #ff6d25;
			}
		}
	}
	
	#online_service {
		width: 68px;
		position: absolute;
		right: 0;
	}
</style>