<template>
	<div class="per_warp">
		<Tl :cmsg="msg"></Tl>
		<ul class="per_cont">
			<li>
				<p class="P_left head_p">当前头像：</p>
				<div class="P_right">
					<img class="head_pic" :src='successData.headPic' alt="" />
					<a href="javascript:viod(0)" class="head_change">修改</a>
				</div>
			</li>
			<li>
				<p class="P_left">昵称：</p>
				<div class="P_right">
					<input class="nick_name" type="text" name="" id="" :value='successData.nick_name' />
				</div>
			</li>
			<li>
				<p class="P_left">性别：</p>
				<div class="P_right">
					<input type="radio" value="1" v-model="picked" /> 男
					<input type="radio"  value="0" v-model="picked"  /> 女
				</div>
			</li>
			<li>
				<p class="P_left">生日：</p>
				<div class="P_right birthday">
					<select name="" :value='successData.birthday.year' >
						<option v-for="item in birthday.year" >{{item}}</option>
						
					</select>
					<span>年</span>
					<select name="" :value='successData.birthday.month'>
						<option v-for="item in birthday.month" >{{item}}</option>
						
					</select>
					<span>月</span>
					<select :value="successData.birthday.day">
						<option v-for="item in birthday.day" >{{item}}</option>
						<option value="">11</option>
						<option value="">10</option>
					</select>
					<span>日</span>

				</div>
			</li>
			<li>
				<p class="P_left">手机：</p>
				<div class="P_right ">
					<input class="phone" type="text" :value='successData.phone' />
					<router-link style="color: #008CE1;" to="/perCenter/tiePhone">更换手机</router-link>

				</div>
			</li>
			<li>
				<p class="P_left" style="height: 40px;"></p>
				<button class="P-right submitBtn">
					确认提交
				</button>
			</li>
		</ul>
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
				birthday:{
					year:[1991,1992,1993,1994,1995,1996,1997],
					month:[1,2,3,4,5,6,7,8,9,10,11,12],
					day:[1,2,3,4,5,6,7,8,9,10]
				},
				picked: "0",
				msg: "个人资料",
				successData: {
					headPic: "/static/img/headPic1.png",
					birthday:{
						year:1993,
						month:10,
						day:4
					},
					nick_name:"义",
					phone:"18317855654"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.per_warp {
		width: 983px;
		background-color: white;
		border: 1px solid #D3D3D3;
		float: left;
		.per_cont {
			padding: 20px;
			.head_pic {
				width: 50px;
				height: 50px;
				display: inline-block;
				vertical-align: middle;
			}
			li {
				overflow: hidden;
				padding: 20px;
				position: relative;
				.head_p {
					height: 50px;
					line-height: 50px;
				}
				.birthday {
					select {
						width: 100px;
						height: 35px;
						font-size: 16px;
					}
					span {
						margin: 0 10px;
					}
				}
				.P_left {
					width: 90px;
					font-size: 18px;
					text-align: right;
					margin-right: 10px;
					float: left;
				}
				.P_right {
					width: 800px;
					float: left;
					.head_change {
						color: #008CE1;
					}
					.head_change {
						color: #008CE1;
						margin-left: 10px;
					}
					.nick_name,
					.phone {
						font-size: 18px;
						background-color: #f4f4f4;
						border: 1px solid #D3D3D3;
						padding: 5px;
					}
					.phone {
						margin-right: 10px;
					}
				}
				.submitBtn {
					width: 170px;
					height: 45px;
					background-color: #FF6C00;
					color: white;
					border-radius: 5px;
					outline: none;
					font-size: 20px;
					border: none;
					margin-bottom: 98px;
				}
			}
		}
	}
</style>