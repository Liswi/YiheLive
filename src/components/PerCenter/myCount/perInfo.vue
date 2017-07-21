<template>
	<div class="per_warp">
	  <Title :cmsg="msg"></Title>
	</div>
</template>

<script>
	import Title from "./title"
	export default{
		name:"",
		components:{Title},
		data(){
			return{
				msg:"个人资料"
			}
		}
	}
</script>

<style>
</style>