<template>
	<div class="routeNav">
		<span>您当前的位置:</span>
		<span>{{firstInfo}}</span>
			<em></em>
		<span>{{secondInfo}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				firstInfo:"",
				secondInfo:""
			}
		},
		created(){
//			console.log(this.$route)
			var info=this.$route.path.split("/")
			if(info[1]=="index"){
				this.firstInfo="首页"
				switch(info[2]){
				case "city":
				this.secondInfo="城市列表"
				break;
				case "store":
				
				this.secondInfo=this.$route.params.shopName;
				break;
				
			}
				
			}
		}
	}
</script>
	
<style lang="less" scoped>
	.routeNav{
		height: 70px;
		line-height: 70px;
		text-align: left;
		font-size: 14px;
		font-weight:400;
		/*background: rgba(0,0,0,0.02);*/
		em{
			display: inline-block;
			width: 8px;
			height:8px;
			border-top: 1px solid;
			border-right: 1px solid;
			transform: rotateZ(45deg);
		}
	}
</style>