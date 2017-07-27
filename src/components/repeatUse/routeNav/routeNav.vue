<template>
	<div class="routeNav">
		<span>您当前的位置:</span>
		<span>{{obj.firstInfo}}</span>
			<em v-if="obj.secondInfo"></em>
		<span>{{obj.secondInfo}}</span>
			<em v-if="obj.thirdInfo"></em>
		<span>{{obj.thirdInfo}}</span>
	</div>
</template>

<script>
	export default{
		props:["obj"],
		created(){
			
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