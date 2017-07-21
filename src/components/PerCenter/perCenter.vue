<template>
	<div class="warp">
		<div class="personal">
			<div class="leftbar">
				<h2 class="left_title"><span></span>个人中心</h2>
				<ul class="left_cont">
					<!--交易管理-->
					<li class="manager">
						<h2>交易管理<em>&gt;</em></h2>
					</li>
					<li>
						<router-link to="/perCenter/myAccount">我的账户</router-link>
					</li>
					<li>
						<router-link to="/perCenter/myOrder">我的订单</router-link>
					</li>
					<li>
						<router-link to="/perCenter/myItg">我的积分</router-link>
					</li>
					<li>
						<router-link to="/perCenter/myTicket">我的易和券</router-link>
					</li>
					<!--会员资料-->
					<li class="user">
						<h2>会员资料<em>&gt;</em></h2>
					</li>
					<li>
						<router-link to="/perCenter/perInfo">个人资料</router-link>
					</li>
					<li>
						<router-link to="/perCenter/address">地址管理</router-link>
					</li>
					<li>
						<router-link to="/perCenter/myCollection">我的收藏</router-link>
					</li>
					<li>
						<router-link to="/perCenter/recentView">最近浏览</router-link>
					</li>
					<li>
						<router-link to="/perCenter/resetPassword">修改密码</router-link>
					</li>
					<li class="msg">
						<h2>站内信<em>&gt;</em></h2>
					</li>
					<li>
						<router-link to="/perCenter/myMessage">我的消息</router-link>
					</li>
				</ul>
			</div>
			<!--右侧显示区-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
	}
</script>

<style lang="less">
	.warp {
		background-color: #f2f2f2;
		.personal {
			width: 1181px;			
			padding: 20px 0;
			margin: 0 auto;
			text-align: left;
			overflow:hidden;
			.leftbar {
				width: 174px;
				background-color: white;
				float: left;				
				border: 1px solid #D3D3D3;
				margin-right: 20px;
				h2{
					font-size: 18px;	
					font-weight: 500;	
					em{
						float: right;
					}			
					span{
						width: 18px;
						height: 18px;
						margin-right:18px ;
						display: inline-block;
						background-image: url(./img/sprite.png);
						background-position:0 -20px ;
						vertical-align: middle;						
					     /*解决加背景图的span不居中问题*/
					}
				}
				.left_title{
					padding:20px ;
					border-bottom: 1px solid #d3d3d3;
				}
				.left_cont{
					padding:20px ;	
					li{
						padding: 10px 0;
						a:hover{
							color: #ec6a17;
							text-decoration: underline;
						}
					}				
				}
			}
			
		}
	}
</style>