<template>
	<div class="msg_warp">
		<Tl :cmsg="title"></Tl>
		<div class="msg_cont">
			<table cellspacing="" cellpadding="">
				<tr>
					<th>标题</th>
					<th>发送时间</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
				<tr v-for="(item,index) in successData.msg">
					<td>{{item.title}}</td>
					<td>{{item.time}}</td>
					<td>{{item.state}}</td>
					<td class="operation">
						<a class="view" @click="view(index)">查看</a>
						<a class="delete" @click="deleteBtn">删除</a>
					</td>
				</tr>
			</table>
			<div id="tips">
				<p><span></span>删除成功</p>
			</div>
		</div>
		<div class="pages">
			<PageNav :pageinfo="{infoNum:successData.msg.length,everyNum:2}"></PageNav>
		</div>
	</div>
</template>

<script>
	import Tl from "./title"
	import PageNav from "@/components/repeatUse/pageNation/pageNation"
	export default {
		name: "",
		components: {
			Tl,PageNav
		},
		data() {
			return {
				title: "我的消息",
				successData: {
					msg: [{
						title: "您的货物已发送",
						time: "2017年08月04日",
						state: "未查看",
						detail: "这是详请1"
					}, {
						title: "您的货物已发送",
						time: "2017年08月04日",
						state: "未查看",
						detail: "这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2这是详请2"
					}, {
						title: "您的货物已发送",
						time: "2017年08月04日",
						state: "未查看",
						detail: "这是详请3"
					}]
				}
			}
		},
		methods: {
			view: function(index) {
				
				this.$router.push({
					name: "msgDetail",
					params: {
						title: this.successData.msg[index].title,
						detail: this.successData.msg[index].detail,
					}
				})
			},
			deleteBtn: function(){
				var timer = setTimeout(function  () {
					document.getElementById("tips").style.display = "block";
					var time = setTimeout(function  () {
						document.getElementById("tips").style.display = "none";
						clearTimeout(timer);
						clearTimeout(time);
					},1000);
				},100)
                
		     }
		}
	}
</script>

<style lang="less" scoped>
	.msg_warp {
		width: 983px;
		height: 675px;
		border: 1px solid #D3D3D3;
		background-color: white;
		float: left;
		.msg_cont {
			padding: 20px;
			#tips {
				display: none;
				position: absolute;
				left: 50%;
				top: 50%;
				padding: 70px 100px;
				border-radius: 10px;
				background-color: #7f7f7f;
				p {
					font-size: 24px;
					color: white;
				}
				span {
					width: 45px;
					height: 45px;
					display: inline-block;
					vertical-align: middle;
					background-image: url(../img/sprite.png);
					background-position: -264px -360px;
				}				
			}
			table {
				width: 100%;
				text-align: center;
				tr {
					&:hover {
						background-color: #FFF3EC;
					}
				}
				th {
					padding: 10px 0;
					background-color: #eaeaea;
				}
				td {
					padding: 10px 0;
					border-bottom: 1px solid #D3D3D3;
				}
				.operation {
					.delete,
					.view {
						color: #008CDD;
						&:hover {
							color: red;
						}
					}
				}
			}
		}
	}
</style>