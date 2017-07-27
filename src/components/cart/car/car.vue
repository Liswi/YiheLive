<template>
	<div class="car_wrap">
		<div class="car_title">
			<span class="icon">
				
			</span>购物车
		</div>
		<div class="store_list">
			<table v-for="(item1,index) in shopcar">
				<tr class="tr_title">
					<th class="checkbox"><input type="checkbox" :value="index" v-model="checkeArr" @click="checkAll(index)" /></th>
					<th class="goodsname">{{item1.shopName}}</th>
					<th class="goodsstand">规格</th>
					<th class="price">单价</th>
					<th class="num">数量</th>
					<th class="price_sum">金额</th>
					<th>操作</th>
				</tr>
				<tr v-for="(item,index2) in item1.goods">
					<td class="checkbox"><input type="checkbox" :value="index2" v-model="checkArr[index]" @click="checkOne(index,index2)" /></td>
					<td class="goodsname"> <img :src="item.img" alt="" width="60" /><span>{{item.abstract}}</span></td>
					<td class="goodsstand"><span>尺码: {{item.size}}</span>
						<span>颜色: {{item.color}}</span>
					</td>
					<td class="price">¥ {{item.price}}</td>
					<td class="num">
						<div><button @click="reducegoods(index,index2,item.goodid,item1.shopid)">-</button>
							<input type="text" v-model="item.num" />
							<button @click="addgoods(index,index2,item.goodid,item1.shopid)">+</button>
						</div>
					</td>
					<td class="price_sum">¥ {{item.price*item.num}}</td>
					<td class="operate"><span @click="deletegood(index,index2,item.id)">删除</span></td>
				</tr>
				<tr class="sumPrice">
					<td colspan="7">
						<span class="pricekey">商品金额</span>
						<span class="priceSum">¥ {{priceSum.arr[index]}}</span></td>
				</tr>
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
	export default {
		data() {
			return {
				checkeArr: [],
				checkArr: [],
				priceArr: [],
				shopcar: [],
			}
		},
		created() {
			if(this.$store.state.userid==0){
				this.$router.push("/login");
			}else{
				this.$http.get("/api/car", {
				params: {
					userid: this.$store.state.userid
				}
			}).then(res => {
				if(res.body != "error"){
					this.shopcar = res.body
					for(let i = 0; i < this.shopcar.length; i++){
						this.checkArr.push([]);
						this.priceArr.push(0);
//						console.log
					}
				}
				else {
					this.$router.push("/404");
				}
			},err=>{
				this.$router.push("/404");
			})
			}
			
		},
		computed: {
			priceSum() {
				var arr = [];
				var goods = [];
				for(let i = 0; i < this.shopcar.length; i++) {
					arr.push(0);
				}
				for(let i = 0; i < this.checkArr.length; i++) {
					if(this.checkArr[i].length != 0) {
						let obj = new Object();
						goods.push(obj)
						for(var key in this.shopcar[i]) {
							goods[goods.length - 1][key] = this.shopcar[i][key]
						}
						goods[goods.length - 1].goods = []
						for(let item in this.checkArr[i]) {

							goods[goods.length - 1].goods.push(this.shopcar[i].goods[this.checkArr[i][item]])
							arr[i] += this.shopcar[i].goods[this.checkArr[i][item]].price * this.shopcar[i].goods[this.checkArr[i][item]].num
						}
					}
				}
				var arrsum = 0;
				for(let i = 0; i < arr.length; i++) {
					arrsum += arr[i]
				}
				arr.push(arrsum)
				return {
					arr,
					goods
				}
			},

		},
		methods: {
			checkAll(n) {
				if(this.checkeArr.indexOf(n) == -1) {
					this.checkArr[n].splice(0, this.checkArr[n].length)
				} else {
					for(let i = 0; i < this.shopcar[n].goods.length; i++) {
						if(this.checkArr[n].indexOf(i) == -1) {
							this.$set(this.checkArr[n], this.checkArr[n].length, i)
						}
					}

				}
			},
			reducegoods(m, n,a,b) {
					if(this.shopcar[m].goods[n].num > 1) {
				this.$http.get("/api/reduce",{params:{shopid:b,goodsid:a}}).then(res=>{
						if(res.body==1){
					
						this.shopcar[m].goods[n].num -= 1;	
						}else{
							alert("操作失败")
						}
					},err=>{
						alert("操作失败")
					})
			
				}else{
					alert("如果您实在不想要,请点击删除!")
				}
			},
			addgoods(m, n,a,b) {
				this.$http.get("/api/add",{params:{shopid:b,goodsid:a}}).then(res=>{
//						console.log(res)
						if(res.body==1){
							//if(this.shopcar[m].goodslist[n].num)
						this.shopcar[m].goods[n].num += 1;
						}else{
							alert("操作失败")
						}
					},err=>{
						alert("操作失败")
					})
			
			},
			deletegood(m, n,a) {
				this.$http.get("/api/delete",{params:{id:a}}).then(res=>{
					if(res!='error'){
						if(this.checkArr[m].indexOf(n) != -1) {
					this.checkArr[m].splice(this.checkArr[m].indexOf(n), 1)
					for(var i = 0; i < this.checkArr[m].length; i++) {
						if(this.checkArr[m][i] > n) {
							this.checkArr[m][i] -= 1
						}
					}
					this.shopcar[m].goods.splice(n, 1);
					for(let i = 0; i < this.shopcar.length; i++) {
						if(this.shopcar[i].goods.length == 0) {
							let a = this.checkeArr[i]

							for(let j = 0; j < this.checkeArr.length; j++) {
								if(this.checkeArr[j] > a) {
									this.checkeArr[j] -= 1
								}
							}
							this.shopcar.splice(i, 1);
						}
					}
				} else {
					this.shopcar[m].goods.splice(n, 1);
					for(let i = 0; i < this.shopcar.length; i++) {
						if(this.shopcar[i].goods.length == 0) {

							this.shopcar.splice(i, 1);
						}
					}
				}
					}
				},err=>{
					alert("网络延迟,请重试")
				})
				

			},
			deletegoods() {
				for(let i = 0; i < this.checkArr.length; i++) {
					if(this.checkArr[i].length != 0) {
						//							this.checkArr[i].reverse();
						for(let j = 0; j < this.checkArr[i].length; j) {
							this.deletegood(i, this.checkArr[i][j])
						}
					}
				}
			},
			checkOne(m, n) {
				let arr = []
				arr = this.checkArr[m]
				this.checkArr.splice(m, 1)
				this.checkArr.splice(m, 0, arr)

			},
			checkAll2() {
				for(let i = 0; i < this.shopcar.length; i++) {
					this.checkeArr.push(i);
					this.checkAll(i);
				}
			},
			goConfirm() {
				this.$router.push({
					name: "confirm",
					params: {
						goods: this.priceSum
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.car_wrap {
		width: 1100px;
		margin: 0 auto;
		.car_title {
			height: 60px;
			padding-top: 30px;
			border-bottom: 1px solid #ededed;
			text-align: left;
			font-size: 25px;
			color: rgba(0, 0, 0, 0.6);
			.icon {
				display: inline-block;
				width: 40px;
				height: 60px;
				background: url(../img/icons.png) -297px -423px;
				vertical-align: middle;
				margin-right: 12px;
			}
		}
		table {
			margin-top: 20px;
			width: 100%;
			border: 1px solid #ededed;
			font-weight: 200;
			.tr_title {
				height: 35px;
				background: #f2f2f2;
				font-size: 15px;
			}
			.sumPrice {
				td {
					span {
						display: block;
						text-align: right;
						padding-right: 160px;
					}
					.pricekey {
						font-size: 17px;
						margin-top: 15px;
						margin-bottom: 6px;
					}
					.priceSum {
						color: orange;
						font-size: 22px;
					}
				}
			}
			tr {
				border-bottom: 1px solid #ededed;
				height: 80px;
				font-size: 14px;
				.checkbox {
					width: 75px;
					input {
						width: 14px;
						height: 14px;
					}
				}
				.operate {
					text-decoration: underline;
					color: blue;
					cursor: pointer;
				}
				.goodsname {
					width: 400px;
					text-align: left;
					/*height: 100px;*/
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 15px 0;
					img {
						display: inline-block;
						border: 1px solid #D3D3D3;
						margin-right: 20px;
					}
					span{
						display: inline-block;
					}
				}
				.goodsstand {
					width: 170px;
					span {
						display: block;
						color: gray;
						margin-bottom: 5px;
					}
				}
				.price {}
				.num {
					div {
						width: 120px;
						height: 30px;
						border: 1px solid rgba(0, 0, 0, 0.2);
						margin: 0 auto;
						display: flex;
						justify-content: space-between;
						button {
							background: #f2f2f2;
							height: 100%;
							width: 30px;
							font-size: 20px;
							flex: 2;
							cursor: pointer;
						}
						input {
							height: 30px;
							width: 45px;
							font-size: 16px;
							text-align: center;
							flex: 3;
							border: none;
							border-left: 1px solid rgba(0, 0, 0, 0.2);
							border-right: 1px solid rgba(0, 0, 0, 0.2);
							vertical-align: top;
						}
					}
				}
			}
		}
		.pay {
			height: 45px;
			padding: 40px 0;
			line-height: 45px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.pay_left {
				span {
					cursor: pointer;
					color: #0183C4;
					margin-right: 50px;
				}
			}
			.pay_right {
				font-size: 18px;
				span {
					font-size: 23px;
					color: orange;
					padding-right: 60px;
				}
				button {
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