<template>
	<div class="comments">
		<div class="box" v-for="item in info">
			<div class="box_left">
				<img :src="item.via" alt="" />
				<span>{{item.name}}</span>
			</div>
			<div class="box_right">
				<div class="score">
					<span class="times">{{item.time}}</span>
					<Star :rank=4 ></Star>
				</div>
				<span class="texts">{{item.texts}}</span>
				<div class="pic">
					<ul class="images">
						<li class="imgs" v-for="item in item.pics"><img :src="item" alt="" /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Star from "../fivestart"
	export default {
		data() {
			return {
				info: [{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				},{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				},{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				},{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				},{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				},{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				},{
					name: "张✘✘",
					via: require("./img/111.jpeg"),
					time: "2017-7-20",
					texts: "我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，我的天，好神奇啊，",
					pics: ["./img/goods04.png", "./img/goods04.png", "./img/goods04.png", "./img/goods04.png", ]
				}]
			}
		},
		created(){
			for(let j=0;j<this.info.length;j++){
				for (var i = 0; i < this.info[j].pics.length; i++) {
				this.info[j].pics[i]=require(this.info[j].pics[i]+"");
			}
			}
			
		},
		components: {
			Star,
		}
	}
</script>

<style lang="less" scoped>
	.comments {
		width: 1181px;
		text-align: center;
		.box{
			border-bottom: 1px solid #D3D3D3;
			margin:20px 60px 0;
			font-size: 16px;
			position:relative;
					font-weight:100;
			.box_left{
				position: absolute;
				top: 0;
				left: 0;
				width: 80px;
				height: 80px;
				img{
					width: 100%;
					height: 100%;
				}
				span{
					line-height: 50px;
				}
			}
			.box_right{
				text-align: left;
				padding-left: 100px;
				.score{
					margin-bottom: 5px;
				}
				.times{
					display: inline-block;
					font-size: 12px;
					height: 30px;
					vertical-align: middle;
					padding-right: 5px;
				}
				.imgs{
					display: inline-block;
					width: 55px;
					height: 55px;
					margin: 20px  5px 20px;
					padding: 1px;
					border: 2px solid #D3D3D3;
					&:hover{
						border: 2px solid #F46B2B;
					}
					img{
						width: 100%;
					}
				}
			}
		}
	}
</style>