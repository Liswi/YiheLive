<template>
	<div class="recharge_warp">
		<div class="recharge_head">
			<Tl :cmsg=msg[0]></Tl>
			<div class="recharge_cont">
				<p>账户余额:<span>¥{{remainder}}</span></p>
				<p>充值金额:<input type="number" /></p>
				<div class="recharge"><router-link to="#">充值</router-link></div>
			</div>
		</div>
		<div class="rec_record">
			<Tl :cmsg=msg[1]></Tl>
			<!--<h2 class="title">充值记录</h2>-->
			<table class="rec_cont" cellspacing="80" cellpadding="20">
				<tr style="border-bottom: 1px solid #D3D3D3;">
					<th>时间</th>
					<th>充值订单号</th>
					<th>充值金额</th>
					<th>账户金额</th>
				</tr>
				<tr v-for="item in recharge_record">
				    <td>{{item.time}}</td>
				    <td style="color: #FF6D25">{{item.orderNum}}</td>
				    <td style="color: #FF6D25">¥{{item.rechargeNum}}元</td>
				    <td>¥{{item.remainderNum}}元</td>
				</tr>
			</table>
			<div class="selectPages">
				这是分页器
			</div>
		</div>
	</div>
</template>

<script>
	import Tl from "./title"
	export default{
		components:{Tl},
		name:"",
		data(){
			return{
				msg:["账户充值","充值记录"],
				remainder:"1220",
				recharge_record:[{
					time:"2017-04-19 15:21:33",
					orderNum: "41305214556612",
					rechargeNum:"1000.00",
					remainderNum:"720.00"
				},{
					time:"2017-04-25 15:21:33",
					orderNum: "41305214556622",
					rechargeNum:"2000.00",
					remainderNum:"270.00"
				},{
					time:"2017-05-15 15:21:33",
					orderNum: "41305214556632",
					rechargeNum:"1500.00",
					remainderNum:"2220.00"
				},{
					time:"2017-06-15 15:21:33",
					orderNum: "41305214556639",
					rechargeNum:"500.00",
					remainderNum:"200.00"
				},]
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.recharge_warp {
		width: 985px;
		font-size: 18px;
		float: left;		
		.recharge_head {
			border: 1px solid #D3D3D3;
			background-color: white;
			
			.recharge_cont {
				padding: 20px;
				p{
					padding: 20px 0;
					span{
						margin-left: 20px;
						color: #FF6C00;
					}
					input{
						width: 160px;
						margin-left: 20px;
						padding: 5px;
					}
				
				}
				.recharge{
					width: 170px;
					height: 45px;
					background-color: #FF6C00;
					border-radius:5px ;
					color: white;
					margin: 20px 100px ;
					text-align: center;
					a{
						display: inline-block;
						margin-top: 10px;
					}
				}
			}
		}
		.rec_record{
			margin-top: 20px;
			background-color: white;
			border: 1px solid #D3D3D3;
			.rec_cont{
				width: 985px;
				text-align: center;
				
				td{
					border-bottom: 1px dashed #D3D3D3;
				}				
			}
		}
	}
</style>