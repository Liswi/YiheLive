<template>
	<div class="address_warp">
		<Tl :cmsg=msg></Tl>
		<button id="addNewDres">添加新地址</button>
		<div class="address_cont">
			<table cellspacing="" cellpadding="">
				<tr style="background-color: #eaeaea;font-size: 14px;font-weight:800;color: black;">
					<th v-for="item in tHeadArr">{{item}}</th>
				</tr>
				<tr v-for="item in successData.address">
					<td>{{item.id}}</td>
					<td>{{item.user}}</td>
					<td>{{item.area1}}</td>
					<td>{{item.address}}</td>
					<td>{{item.phone}}</td>
					<td>{{item.remarks}}</td>
					<td>
						<a href="" class="toStatic">设为默认</a>
						<a href="">修改</a>
						<a href="">删除</a>
					</td>
				</tr>
			</table>
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
				msg: "收货地址",
				tHeadArr: ["序号", "收货人", "所在区域", "街道地址", "联系电话", "备注", "操作"],
				successData: {
					address: [{
						id: "001",
						user: "周萌",
						area1: "北京",
						address: "朝阳区",
						phone: "15890754444",
						remarks: "无"
					}, {
						id: "001",
						user: "周萌",
						area1: "北京",
						address: "朝阳区",
						phone: "15890754444",
						remarks: "无"
					}, {
						id: "001",
						user: "周萌",
						area1: "北京",
						address: "朝阳区",
						phone: "15890754444",
						remarks: "无"
					}, {
						id: "001",
						user: "周萌",
						area1: "北京",
						address: "朝阳区",
						phone: "15890754444",
						remarks: "无"
					}]
				},
			}
		}
	}
</script>

<style lang="less" scoped>
	.address_warp {
		width: 983px;
		height: 675px;
		float: left;
		position: relative;
		border: 1px solid #D3D3D3;
		background-color: white;
		#addNewDres{
			width: 100px;
			height: 30px;
			font-size: 16px;
			background-color: #FF6C00;
			color: white;
			border-radius:5px ;
			border: none;
			outline: none;
			position: absolute;
			top: 16px;
			right: 20px;
		}
		.address_cont{
			padding: 20px;
			table{
				text-align: center;
				width: 100%;
				tr{
					height: 33px;
					font-size: 14px;
					border-bottom:1px solid #D3D3D3;
					&:hover{
						background-color: #fff3ec;
					}
					a{
						display: inline-block;
						
						padding: 0 10px;
						border-left:1px solid #666666 ;
					}
					.toStatic{
						color: #FF6C00;
						border: none;
					}
				}
			}
		}
	}
</style>