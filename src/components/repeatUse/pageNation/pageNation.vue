<template>
	<div id="pageNation">
		<button class="firstPage" @click="goFirst">首页</button>
			<button class="lastPage" @click="goLast">上一页</button>
			<button class="pagenum" v-for="item of pageNum" :class="{active:item==activeNum}" @click="tab(item)">{{item}}</button>

			<button class="nextPage" @click="goNext">下一页</button>
			<span>共{{page}}页,到第</span>
			<input type="text" v-model="pageShow" />
			页 
			<button class="sure" @click="go">确定</button>
			<span>共{{pageinfo.infoNum}}条</span>
			
	</div>
</template>
	
<script>
	export default{
		name:"",
		props:{
			pageinfo:Object,
		},
		data:function(){
			return{
				page:'',
				pageShow:"",
				activeNum:1,
		}
		},
		created(){
			this.page =parseInt(this.pageinfo.infoNum/this.pageinfo.everyNum)+(this.pageinfo.infoNum%this.pageinfo.everyNum==0?0:1);	
		},
		computed:{
			pageNum(){
				var pageNum1=[];
				for(let i=0;i<this.page;i++){
					pageNum1.push(i+1);
					}
				return pageNum1;
			}
		},
		methods:{
			tab(n){
				this.activeNum=n;
				this.$emit("tab",this.activeNum);
			},
			go(){
				if(this.pageShow&&this.pageShow<=this.page){
					this.activeNum=this.pageShow;
				}else{
					alert("请输入一个有效数字")
				}
				this.$emit("tab",this.activeNum);
			},
			goFirst(){
					this.activeNum=1;
					this.$emit("tab",this.activeNum);
			},
			goLast(){
					if(this.activeNum>1){
					this.activeNum-=1}else{
						alert("已经是第一页")
					}
					this.$emit("tab",this.activeNum);
			},
			goNext(){
					if(this.activeNum<this.page){
					this.activeNum+=1}else{
						alert("已经是最后一页")
					}
					this.$emit("tab",this.activeNum);
			}
			
		}
	}
</script>

<style lang="less" scoped>
		button, input{
			border: 1px solid #d2d2d2;
			background: #fff;
			font-size: 16px;
			font-weight: 200;
			color: rgba(0,0,0,0.6);
			outline: none;
			cursor: pointer;
			
		}
		#pageNation{
			clear: both;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba(0,0,0,0.6);
			/*border: none;*/
			span{
				/*border: none;*/
			}
			input{
				width: 30px;
				height: 13px;
				margin: 0 15px;
				padding: 10px;
			}
		}
		.firstPage{
			 height: 35px;
			 width: 65px;
			 color: #018DE2;
			 margin-right: 22px;
		}
		.lastPage,.nextPage{
			 height: 35px;
			 width: 89px;
		}
		.nextPage{
			margin-right: 20px;
		}
		.pagenum{
			width: 38px;
			height: 35px;
			cursor: pointer;
		}
		.active{
			background:#018DE2; 
			color: white;
		}
		.sure{
			border: none;
			color: white;
			width: 93px;
			height: 37px;
			font-size: 19px;
			margin: 0 18px;
			background: #018DE2; 
			font-weight: 100;
			border-radius: 4px;
		}
</style>