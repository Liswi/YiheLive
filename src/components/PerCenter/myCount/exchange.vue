<template>
	<div class="myItg_wrap">
		<Tl :cmsg="title"></Tl>
		<div class="myItg_cont">
			
			<table class="Itg_table" cellspacing="" cellpadding="">
				<tr>
					<th>兑换日期</th>
					<th>积分</th>
					<th>兑换商品</th>
				</tr>
				<tr v-for="(item,index) in getData">
					<td>{{item.time}}</td>
					<td>{{item.integral}}</td>
					<td>{{item.goods}}</td>
				</tr>
			</table>
		</div>
		<div id="return" @click="goback">
			<<返回我的积分
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
				title: "兑换记录",
				
				getData: [{
					time: "2016年10月04日",
					integral: "-80",
					goods: "手机"
				},{
					time: "2016年10月04日",
					integral: "-80",
					goods: "手机"
				},
				{
					time: "2016年10月04日",
					integral: "-80",
					goods: "手机"
				},
				{
					time: "2016年10月04日",
					integral: "-80",
					goods: "手机"
				}],
			}
		},
		methods:{
			goback:function  () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped>
     .myItg_wrap{
     	width: 983px;
     	height: 675px;
     	position: relative;
     	border: 1px solid #D3D3D3;
     	background-color: white;
     	float: left;
     	#return{
     		position: absolute;
     		top: 20px;
     		right: 20px;
     		color: #008CDD;
     	}
     	.myItg_cont{
     		padding: 20px;
     		
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