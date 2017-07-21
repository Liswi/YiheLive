<template>
	<div class="title">
		{{cmsg}}
	</div>
</template>

<script>
	export default {
		name: "",
		props:{
			cmsg:String
		}
	}
</script>

<style>
	.title {
		color: #008DE1;
		font-size: 18px;
		padding: 20px;
		border-bottom: 1px solid #D3D3D3;
	}
</style>