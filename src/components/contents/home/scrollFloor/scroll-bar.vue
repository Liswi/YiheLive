<template>
	<ul class="scroll_bar" >
		<li v-for="(item,index1) in msg" @click.prevent="goFloor(index1)" ><strong>{{item.index}}  F</strong><span>{{item.title}}</span></li>	
		<li @click="gotoTop" id="scroll_bar_top">TOP</li>
	</ul>
</template>

<script>
	export default {
		name: "",
		props: {
			msg:Array
		},
		methods:{
			goFloor:function  (index) {
				this.$emit("clickFl",index);
			},
			gotoTop:function  () {
				this.$emit("gotoTop");
			}
			
		}
	}
</script>

<style lang="less" scoped>
     #scroll_bar_top{
     	color: #008CDD;
     	&:hover{
     		color: white;
     	}
     }
	.scroll_bar {		
		position: fixed;
		bottom: 10%;
		right: 2%;
		z-index: 1000;
		border-top: 1px solid #D3D3D3;
		border-left: 1px solid #D3D3D3;
		li {
			cursor: pointer;
			font-weight: 500;
			padding: 10px;
			border-right: 1px solid #D3D3D3;
			border-bottom: 1px solid #D3D3D3;
			background-color: white;
			span {
				display: block;
			}
			strong {
				letter-spacing: 0.15em;
				color: #018CE0;
				font-weight: 200;
			}
			&:hover {
				background-color: #008CDD;
				color: white;
				strong {
					color: white;
				}
			}
		}
	}
</style>