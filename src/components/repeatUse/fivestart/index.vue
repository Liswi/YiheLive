<template>
	<span style="display:inline-block">
		<div class="start_wrap">
		<span v-for="item in num" class="light"></span>
		<span v-for="item in (5-num)" class="dark"></span>
	</div>
	</span>
	
</template>

<script>
	export default{
		props:{
			rank:Number,
		},
		data(){
			return{
				num:0,	
			}
		},
		created(){
			
			if(this.rank&&this.rank>=5){
				this.num=5
			}else if(this.rank&&this.rank<0){
				this.num=0
			}else{
				this.num=this.rank
			}
		}
	}
</script>

<style lang="less" scoped>
	.start_wrap{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 125px;
		span{
			display: inline-block;
			width: 25px;
			height: 25px;
			background: url("/static/img/sprite.png") -55px -350px;
			
		}
		.dark{
			background: url("/static/img/sprite.png") -55px -310px;
		}
	}
</style>