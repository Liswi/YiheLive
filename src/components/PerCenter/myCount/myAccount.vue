<template>
	<div class="myAccount">
		<div class="head">
			<div class="user">
				<div class="user_left">
					<img :src=userPic />
					<span>您好！</span>
					<a href="">{{userName}}</a>
				</div>
				<div class="user_right">
					<div><span>当前积分</span>
						<a href="">{{currentIntegral}}</a>
					</div>
					<div><span>余额</span>
						<a href="">¥{{remainder}}</a>
					</div>
					<div><span>易和券</span>
						<a href="">{{ticket}}</a>
					</div>
				</div>
			</div>
			<div class="vip">
				<p class="title">我的会员等级<i>VIP{{vip}}</i><span><router-link to="/perCenter/recharge">去充值</router-link></span></p>
				<div class="progress">
					<div class="line">
						<div class="lineCover"></div>
					</div>
					<div class="item_Cover">
						<div class="item">
							<i>V1</i>
						</div>
						<div class="item">
							<i>V2</i>
						</div>
						<div class="item">
							<i>V3</i>
						</div>
						<div class="item">
							<i>V4</i>
						</div>
						<div class="item">
							<i>V5</i>
						</div>
						<div class="item">
							<i>V6</i>
						</div>
						<div class="item">
							<i>V7</i>
						</div>
					</div>
					<div class="progress_foot">
						<span>(0-500)</span>
						<span>(501-2k)</span>
						<span>(2k-5k)</span>
						<span>(5k-2w)</span>
						<span>(2w-5w)</span>
						<span>(5w-10w)</span>
						<span>(10w+)</span>
					</div>
				</div>
			</div>
		</div>

		<div class="foot">
			<img :src=footImg />
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				userPic: "",
				userName: '当前未登录',
				currentIntegral: 0,
				remainder:0,
				ticket: 0,
				vip:0,
				CRM: 2500, //消费额
				footImg:"/static/img/myAccount-pic1.png"
			}
		},
		created(){
			console.log("调用了生成")
			this.userName=this.$store.state.user.name;
			if(this.$store.state.userid!=0){
				this.$http.get('/api/myaccount',{params:{userid:this.$store.state.userid}},{emulateJSON:true}).then(data=>{
					console.log(data)
					this.currentIntegral=data.body.data.rank;
					this.remainder=data.body.data.cash;
					this.ticket=data.body.data.yihequan;
					this.vip=data.body.data.vip;
					this.userPic=data.body.data.img;
					
				},err=>{
					alert("初始化数据出错..请刷新重试")
				})
			}
		},
		beforeUpdate(){
			console.log("调用了更新")
			this.userName=this.$store.state.user.name;
		},
		methods :{
//			VIPclass() {
//				if (this.CRM>2000) {
//					
//				}
//			}
		}
	}
</script>

<style lang="less" scoped>
	.myAccount {
		width: 985px;
		font-size: 18px;
		float: left;
		.head {
			border: 1px solid #D3D3D3;
			.user {
				overflow: hidden;
				padding: 20px;
				background-color: #fff4ec;
				border-bottom: 1px solid #D3D3D3;
				.user_left {
					width: 400px;
					float: left;
					img {
						width: 100px;
						height: 100px;
						margin-right: 10px;
						vertical-align: middle;
						display: inline-block;
					}
					a {
						color: #FF6C00;
					}
				}
				.user_right {
					float: left;
					display: flex;
					justify-content: space-around;
					div {
						width: 180px;
						span {
							padding: 10px;
							display: block;
							text-align: center;
						}
						a {
							padding: 10px;
							display: block;
							text-align: center;
							color: #FF6D25;
						}
					}
				}
			}
			.vip {
				background-color: white;
				padding: 20px;
				.title {
					margin: 20px 0;
					i {
						font-size: 24px;
						color: #FF6C00;
					}
					span{
						display: inline-block;
						padding: 2px 10px;
						background-color: #FF6C00;
						border-radius:5px ;
						margin-left: 650px;
						color: white;
					}
				}
				.progress {
					height: 60px;
					border: 1px solid transparent;
					/*解决第一个子元素设置magintop传递个父元素，设置有效border*/
					position: relative;
					.line {
						width: 880px;
						height: 6px;
						position: absolute;
						top: 20px;
						left: 0;
						background-color: #D3D3D3;
						.lineCover {
							width: 20%;
							height: 100%;
							background-color: #FF6C00;
						}
					}
					.item_Cover {
						width: 5000px;
						position: absolute;
						top: 0;
						left: 0;
						.item {
							width: 30px;
							height: 30px;
							float: left;
							margin-right: 100px;
							background-color: #D3D3D3;
							border: 5px solid white;
							border-radius: 50%;
							text-align: center;
							i {
								display: block;
								margin-top: 5px;
								font-size: 16px;
								color: white;
							}
						}
						.active {
							background-color: #FF6D25;
						}
					}
					.progress_foot {
						margin-top: 40px;
						span {
							font-weight: 500;
							margin-right: 88px;
							font-size: 14px;
						}
					
		
			
		}}}}
		.foot{
		   margin-top: 20px;
		}
	}
</style>