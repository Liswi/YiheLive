<template>
	<div class="myItg_wrap">
		<Tl :cmsg="title"></Tl>
		<div class="myItg_cont">
			<div class="myItg_nav">
				<span>累计积分：<i>{{accumulatedIntegral}}</i>分</span><span>当前积分：<i>{{currentIntegral}}</i>分</span>
				<router-link class="link" to="/perCenter/exchange">兑换记录</router-link>
			</div>
			<table class="Itg_table" cellspacing="" cellpadding="">
				<tr>
					<th>积分日期</th>
					<th>积分</th>
					<th>来源</th>
				</tr>
				<tr v-for="(item,index) in getData">
					<td>{{item.time}}</td>
					<td>{{item.integral}}</td>
					<td>{{item.get}}</td>
				</tr>
			</table>
		</div>
		<div class="pages">
			这是分页器
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
		data() {
			return {
				title: "我的积分",
				accumulatedIntegral: 1780,
				currentIntegral: 30,
				getData: [{
					time: "2016年10月04日",
					integral: "+80",
					get: "消费赠送"
				},{
					time: "2016年10月04日",
					integral: "+80",
					get: "消费赠送"
				},
				{
					time: "2016年10月04日",
					integral: "+80",
					get: "消费赠送"
				},
				{
					time: "2016年10月04日",
					integral: "+80",
					get: "消费赠送"
				}],
			}
		}
	}
</script>

<style lang="less" scoped>
     .myItg_wrap{
     	width: 983px;
     	height: 675px;
     	border: 1px solid #D3D3D3;
     	background-color: white;
     	float: left;
     	.myItg_cont{
     		padding: 20px;
     		.myItg_nav{
     			position: relative;
     			padding: 20px;
     			i {
     				font-style: normal;
     				color: #F46B2C;
     			}
     			span{
     				margin-right:60px ;
     			}
     			.link{
     				color: #008CDD;
     				position: absolute;
     				top: 20px;
     				right: 20px;
     			}
     		}
     		.Itg_table{
     			width: 100%;
     			text-align: center;
     			tr {
     				padding: 16px ;
     				&:hover{
     					background-color: #fff3ec;
     				}
     			}
     			th{
     				width: 33%;
     				padding: 10px;
     				background-color: #EAEAEA;
     			}
     			td{
     				padding: 10px;
     				border-bottom: 1px solid #D3D3D3;
     			}
     		}
     	}
     }
</style>