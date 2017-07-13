<template>
	<header>
		我是头部:
		<Nav></Nav>
	</header>
	
</template>
	
<script>
	import Nav from "./nav/header_nav"
	export default{
		name:"header",
	components:{
		Nav,
	}
	}
</script>

<style>
	header{
		width:1181px;
		height:210px;
		border:1px solid red;
		margin: 0 auto;
		position: relative;
	}
</style>