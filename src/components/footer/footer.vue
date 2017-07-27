<template>
	<footer>
		<div class="footer_top">
			<ul>
				<router-link to="">
					<li><i class="pic1"></i>正品保障</li>
				</router-link>
				<router-link to="">
					<li><i class="pic2"></i>全程跟踪</li>
				</router-link>
				<router-link to="">
					<li><i class="pic3"></i>客户监督</li>
				</router-link>
				<router-link to="">
					<li><i class="pic4"></i>售后无忧</li>
				</router-link>
				<router-link to="">
					<li><i class="pic5"></i>准时到达</li>
				</router-link>
			</ul>
		</div>
		<div class="footer_contents">
			<router-link to="" class="footer_logo">
				<img src="./img/logo.png" />
			</router-link>
			<div class="download">
				<div class="ele">
					<img src="./img/QR.png" />
					<span>
					<i class="pic_phone weichat" ></i>
					官方微信
				</span>
				</div>
				<div class="ele">
					<img src="./img/QR.png" />
					<span>
					<i class="pic_phone"></i>
					APP下载
				</span>
				</div>
			</div>
			<ul class="footer_nav">
				<li>
					<h1>
					<router-link to="">关于易和</router-link>
				</h1>
					<h3>
					<router-link :to="{name:'logon'}">新用户注册</router-link>
				</h3>
					<h3>
					<router-link :to="{name:'money'}">支付方式</router-link>
					
				</h3>
				</li>
				<li>
					<h1>
					<router-link to="">快递说明</router-link>
				</h1>
					<h3>
					<router-link :to="{name:'express'}">验货与签收</router-link>
				</h3>
					<h3>
					<router-link :to="{name:'salesReturn'}">退换货规则</router-link>
				</h3>
					<h3>
					<router-link :to="{name:'distribution'}">配送方式</router-link>
				</h3>
				</li>
				<li>
					<h1>
					<router-link to="">关于我们</router-link>
				</h1>
					<h3>
					<router-link :to="{name:'company'}">公司简介</router-link>
				</h3>
					<h3>
					<router-link :to="{name:'Integral'}">积分介绍</router-link>
				</h3>
				</li>
			</ul>
		</div>
		<div class="footer_bottom">
			<div class="copyright">
				版权所有 © 2016易和生活港&emsp;保留所有权利&emsp;|&emsp;鲁ICP备：16022180号-1
			</div>
			<div class="slogan">
				易和生活&emsp;众享品质
				<h5>
					<a href="http://www.360server.cn/">北京澳环科技提供技术支持</a>
				</h5>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: ""
	}
</script>

<style scoped lang="less">
	footer {
		width: 100%;
		.footer_top {
			width: 100%;
			height: 85px;
			line-height: 85px;
			border-top: 1px solid #D8D8D8;
			border-bottom: 1px solid #D8D8D8;
			
			.pic1 {
				background-position: -116px -250px;
			}
			.pic2 {
				background-position: -116px -170px;
			}
			.pic3 {
				background-position: -116px -333px;
			}
			.pic4 {
				background-position: -116px -95px;
			}
			.pic5 {
				background-position: -116px -26px;
			}
		}
		i {
			display: inline-block;
			width: 45px;
			height: 45px;
			background: url(img/download.png);
			/*vertical-align: middle;*/
			margin-right: 20px;
		}
		.footer_top ul {
			width: 1181px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			li{
				display: flex;
				justify-content: space-between;
				align-items: center;	
			}
		}
		
		.footer_top a {
			color: #666666;
			text-decoration: none;
			font-size: 25px;
		}
		.footer_contents {
			width: 1181px;
			height: 246px;
			margin: 0 auto;
			.footer_logo {
				float: left;
				width: 220px;
				height: 125px;
				margin-top: 50px;
			}
			.download {
				float: left;
				margin-top: 30px;
				margin-left: 80px;
				border-right: 1px solid #d3d3d3;
				.ele {
					float: left;
					width: 145px;
					margin-right: 30px;
					span {
						display: inline-block;
						font-size: 16px;
						font-weight: 500;
						width: 145px;
						height: 30px;
						line-height: 40px;
						/*margin-top: 10px;*/
						text-align: center;
					}
					.pic_phone {
						width: 30px;
						height: 30px;
						margin-right: 0px;
						vertical-align: middle;
						background-position: -48px -259px;
					}
					.weichat{
						background-position: -53px -219px;
					}
				}
			}
		}
		.footer_nav {
			/*border: 1px solid red;*/
			display: block;
			float: left;
			width: 500px;
			margin-top: 30px;
			margin-left: 30px;
			a {
				text-decoration: none;
				font-size: 16px;
				color: #666666;
			}
			li {
				float: left;
				width: 25%;
				h1 {
					display: block;
					height: 30px;
					line-height: 30px;
					margin-bottom: 25px;
				}
				h3 {
					margin-bottom: 18px;
					a {
						font-size: 14px;
						font-weight: normal;
					&:hover{
						color: #018DE2;
					}
					}
				}
			}
		}
		.footer_bottom {
			border-top: 1px solid #d3d3d3;
			height: 125px;
			.copyright {
				font-size: 14px;
				margin: 30px 0 10px;
				color: #999;
				font-weight: 500;
			}
			.slogan {
				font-size: 14px;
				color: #0033C7;
				a {
					text-decoration: none;
					font-weight: normal;
					color: #0033C7;
				}
			}
		}
	}
	
	;
</style>