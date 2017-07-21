<template>
	<div class="list_item" >
							<div class="list_top">
								<a href="">
									<img :src="bitem.img" />
									<div class="list_cover"></div>
									<p>{{bitem.shop}}</p>
								</a>
							</div>
							<div class="list_foot">
								<div class="userName">
									<span></span>
									<a href="">{{bitem.name}}</a>
								</div>
								<div class="phone">
									<span></span>
									<a href="">{{bitem.phone}}</a>
								</div>
								<div class="position">
									<span></span>
									<a href="">{{bitem.localion}}</a>
								</div>
							</div>
						</div>
</template>

<script>
	export default {
		name:"",
		props:{
			bitem:Object
		},
		
	}
</script>

<style lang="less">
			.list_item {
						width: 271px;
						float: left;
						margin-right: 10px;
						margin-top: 1px;
						background-color: #fff;
						/*cursor:pointer;*/
						&:hover{
						box-shadow: 0 0 1px 1px rgba(0,0,0,0.1);
						}
						.list_top {
							position: relative;
							p {
								width: 100%;
								font-size: 18px;
								color: white;
								position: absolute;
								bottom: 0;
								left: 0;
								text-align: center;
							}
							.list_cover {
								position: absolute;
								bottom: 0;
								left: 0;
								width: 100%;
								height: 32px;
								background-color: rgba(0, 0, 0, .3);
							}
						}
						.list_foot {
							width: 100%;
							overflow: hidden;
							/*padding-left: 10px;*/
							text-align: left;
							div {
								margin-top: 10px;
								margin-bottom: 10px;
							}
							span {
								width: 16px;
								height: 16px;
								display: inline-block;
								margin-right: 14px;
								margin-left: 10px;
							}
							a {
								font-size: 14px;
							}
							.userName span {
								background-image: url(./img/sprite.png);
								background-position: 0 -20px;
							}
							.phone span {
								background-image: url(./img/sprite.png);
								background-position: -206px -52px;
							}
							.position span {
								background-image: url(./img/sprite.png);
								background-position: -206px -84px;
							}
						}
					}
</style>