<template>
	<div class="warp">
		<div class="personal">
			<div class="leftbar">
				<ul class="left_cont">
					<!--交易管理-->
					<li class="manager">
						<h2>关于易和<em></em></h2>
					</li>
					<li>
						<router-link :to="{name:'logon'}">新用户注册</router-link>
					</li>
					<li>
						<router-link :to="{name:'money'}">支付方式</router-link>
					</li>
					<!--会员资料-->
					<li class="user">
						<h2>快递说明<em></em></h2>
					</li>
					<li>
						<router-link :to="{name:'express'}">验货与签收</router-link>
					</li>
					<li>
						<router-link :to="{name:'salesReturn'}">退换货规则</router-link>
					</li>
					<li>
						<router-link :to="{name:'distribution'}">配送方式</router-link>
					</li>
					<li class="msg">
						<h2>关于我们<em></em></h2>
					</li>
					<li>
						<router-link :to="{name:'company'}">公司简介</router-link>
					</li>
					<li>
						<router-link :to="{name:'Integral'}">积分介绍</router-link>
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

<style lang="less" scoped>
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
					position: relative;
					font-size: 16px;	
					font-weight: 500;	
					em{
						width: 16px;
						height: 16px;
						display: inline-block;
						background-image: url(/static/img/sprite.png);
						background-position: 0 -463px;
						vertical-align: middle;
					    position: absolute;
					    top: 8px;
					    right: 0;
					}			
					span{
						width: 18px;
						height: 18px;
						margin-right:18px ;
						display: inline-block;
						background-image: url(/static/img/sprite.png);
						background-position:0 -20px ;
						vertical-align: middle;						
					     /*解决加背景图的span不居中问题*/
					}
				}
				.left_cont{
					padding:20px ;	
					li{
						padding: 10px 0;
						font-size: 14px;
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