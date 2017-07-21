<template>
	<div class="car_wrap">
		<div class="car_title">
			<span class="icon">
				
			</span>购物车
		</div>
		<div class="store_list">
			<table  v-for="(item,index) in shopcar">
				<tr class="tr_title">
					<th class="checkbox"><input type="checkbox" :value="index" v-model="checkeArr" @click="checkAll(index)"/></th>
					<th class="goodsname">{{item.store}}</th>
					<th class="goodsstand">规格</th>
					<th class="price">单价</th>
					<th class="num">数量</th>
					<th class="price_sum">金额</th>
					<th >操作</th>
				</tr>
				<tr v-for="(item,index2) in item.goodslist">
					<td class="checkbox"><input type="checkbox" :value="index2" v-model="checkArr[index]" @click="checkOne(index,index2)"/></td>
					<td class="goodsname"> <img :src="item.tImg" alt="" width="60" />{{item.name}}</td>
					<td class="goodsstand"><span>尺码: {{item.size}}</span>
						<span>颜色: {{item.color}}</span>
					</td>
					<td class="price">¥ {{item.price}}</td>
					<td class="num"><div><button @click="reducegoods(index,index2)">-</button>
						<input type="text" v-model="item.num"/>
						<button @click="addgoods(index,index2)">+</button>
					</div></td>
					<td class="price_sum">¥ {{item.price*item.num}}</td>
					<td class="operate" ><span @click="deletegood(index,index2)">删除</span></td>
				</tr>
				<tr class="sumPrice"><td colspan="7" >
					<span class="pricekey">商品金额</span>
					<span class="priceSum">¥ {{priceSum.arr[index]}}</span></td></tr>
			</table>
			<div class="pay">
				<div class="pay_left"><span @click="checkAll2">全选</span>
				<span @click="deletegoods">批量删除</span></div>
				<div class="pay_right">商品总计:
					<span>¥{{priceSum.arr[priceSum.arr.length-1]}}</span>
					<button @click="goConfirm">去结算</button>
				</div>
				
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				checkeArr:[],
				checkArr:[],
				priceArr:[],
				shopcar:[{
					store:"海澜之家旗舰店",
					goodslist:[{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖1",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					},{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖2",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					},{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖3",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					}]
				},{
					store:"海澜之家旗舰店",
					goodslist:[{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖a",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					},{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖b",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					},{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖c",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					},{
						tImg:"/static/user1/img/headimg.jpg",
						name:"蓝色短袖d",
						size:"M",
						color:"blue",
						price:175,
						num:1,
					}]
				}]
			}
		},
		created(){
			for (let i = 0; i < this.shopcar.length; i++) {
					this.checkArr.push([]);
					this.priceArr.push(0);
				}	
			},
		computed:{
			priceSum(){
				var arr=[];
				var goods=[];
				for (let i = 0; i < this.shopcar.length; i++) {
					 arr.push(0);
				}	
			   for(let i=0;i<this.checkArr.length;i++){
			   		if(this.checkArr[i].length!=0){
			   			let obj=new Object();
						goods.push(obj)
						for(var key in this.shopcar[i]){
			   			 goods[goods.length-1][key]=this.shopcar[i][key]
			   			}
						goods[goods.length-1].goodslist=[]
			   			 for(let item in this.checkArr[i]){
			   			 	
						goods[goods.length-1].goodslist.push(this.shopcar[i].goodslist[this.checkArr[i][item]])
			       	 	arr[i]+=this.shopcar[i].goodslist[this.checkArr[i][item]].price*this.shopcar[i].goodslist[this.checkArr[i][item]].num
			       	 }
			   		}
			   	 }
			   var arrsum=0;
			   for(let i=0;i<arr.length;i++){
			   	arrsum+=arr[i]
			   }
			   arr.push(arrsum)
			   return {arr,goods}
			},
			
		},
		methods:{
			checkAll(n){
				if(this.checkeArr.indexOf(n)==-1 ){
					this.checkArr[n].splice(0,this.checkArr[n].length)
				}else{
					for (let i = 0; i < this.shopcar[n].goodslist.length; i++) {
						if(this.checkArr[n].indexOf(i)==-1){
							this.$set(this.checkArr[n],this.checkArr[n].length,i)
						}
					}
				
				}
			},
			reducegoods(m,n){
				if(this.shopcar[m].goodslist[n].num>0){
					this.shopcar[m].goodslist[n].num-=1;
				}
				
			},
			addgoods(m,n){
//				if(this.shopcar[m].goodslist[n].num)
				this.shopcar[m].goodslist[n].num+=1;
			},
			deletegood(m,n){
					if(this.checkArr[m].indexOf(n)!=-1){
					
						this.checkArr[m].splice(this.checkArr[m].indexOf(n),1)
					    for(var i=0;i<this.checkArr[m].length;i++){
					    		if(this.checkArr[m][i]>n){
					    			this.checkArr[m][i]-=1
					    		}
					    }
					   this.shopcar[m].goodslist.splice(n,1);
					   for(let i=0;i<this.shopcar.length;i++){
					   		if(this.shopcar[i].goodslist.length==0){
					   			let a=this.checkeArr[i]
					   			
					   			 for(let j=0;j<this.checkeArr.length;j++){
					    		if(this.checkeArr[j]>a){
					    			this.checkeArr[j]-=1
					    		}
					   		}
					   			 this.shopcar.splice(i,1);
					   }
				}
				}	
			},
			deletegoods(){
					for(let i=0;i<this.checkArr.length;i++){
						if(this.checkArr[i].length!=0){
//							this.checkArr[i].reverse();
						for(let j=0;j<this.checkArr[i].length;j){
							this.deletegood(i,j)
						}
			   		}
					}
			},
			checkOne(m,n){
						let arr=[]
						arr=this.checkArr[m]
						this.checkArr.splice(m,1)
						this.checkArr.splice(m,0,arr)
						
			},
			checkAll2(){
				for (let i = 0; i < this.shopcar.length;i++){
					this.checkeArr.push(i);
					this.checkAll(i);
				}	
			},
			goConfirm(){
				this.$router.push({name:"confirm",params:{
					goodslist:this.priceSum
				}})
			}
		}
	}
</script>

<style lang="less" scoped>
	.car_wrap{
		width: 1100px;
		margin: 0 auto;
		.car_title{
			height: 60px;
			padding-top: 30px;
			border-bottom: 1px solid #ededed;
			text-align:left;
			font-size:25px;
			color:rgba(0,0,0,0.6);
			.icon{
				display: inline-block;
				width: 40px;
				height: 60px;
				background: url(../img/icons.png) -297px -423px;
				vertical-align:middle;
				margin-right: 12px;
			}
		}
		table{
			margin-top:20px;
			width: 100%;
			border: 1px solid #ededed;
			font-weight: 200;
			.tr_title{
				height: 35px;
				background: #f2f2f2;
				font-size: 15px;
			}
			.sumPrice{
				td{
						span{
							display: block;
							text-align: right;
							padding-right: 160px;
						}
						.pricekey{
							font-size: 17px;
							margin-top:15px;
							margin-bottom: 6px;
						}
						.priceSum{
							color: orange;
							font-size: 22px;
						}
				}
			
			}
			tr{
				border-bottom: 1px solid #ededed;
				height: 80px;
				font-size: 14px;
				.checkbox{
					width: 75px;
					input{
						width: 14px;
						height: 14px;
					}
				}
				.operate{
					text-decoration: underline;
					color: blue;
					cursor: pointer;
				}
				.goodsname{
					width: 400px;
					text-align: left;
					img{
						display: inline-block;
						vertical-align: middle;
						border: 1px solid #D3D3D3;
						margin-right: 20px;
					}
				}
				.goodsstand{
					width: 170px;
					span{
						display: block;
						color: gray;
						margin-bottom: 5px;
						
					}
				}
				.price{
					
				}
				.num{
					div{
						width: 120px;
						height: 30px;
						border: 1px solid rgba(0,0,0,0.2);
						margin: 0 auto;
						display: flex;
						justify-content: space-between;
						button{
							background: #f2f2f2;
							height: 100%;
							width: 30px;
							font-size: 20px;
							flex:2;
							cursor: pointer;
						}
						input{
							height: 30px;
							width: 45px;
							font-size: 16px;
							text-align: center;
							flex:3;
							border: none;
							border-left:1px solid rgba(0,0,0,0.2);
							border-right:1px solid rgba(0,0,0,0.2);
							vertical-align: top;
						}
					}
				}
			}
		}
		.pay{
			height: 45px;
			padding: 40px 0;
			line-height: 45px;
			display: flex;
			justify-content: space-between;
			align-items: center;		
			.pay_left{
			span{
				cursor: pointer;
				color: #0183C4;
				margin-right: 50px;
			}
		}
		.pay_right{
			font-size: 18px;
			span{
				font-size: 23px;
				color: orange;
				padding-right: 60px;
			}
			button{
				width: 170px;
				height: 45px;
				border-radius: 5px;
				color: white;
				font-size: 17px;
				cursor: pointer;
				background-color: #ff6c00;
				
			}
			}
		}
		
	}
</style>