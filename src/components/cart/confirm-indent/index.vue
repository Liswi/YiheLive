<template>
	<div class="confirm_wrap">
		<div class="address">

			<div class="address_title">
			<span>收货人信息</span>
			<button class="">使用新地址</button>
			</div>
			<dl>
				<dt class="add_default"><div class="add_left">
					<input type="radio" /><span>{{addressShow.msg}}</span><em class="default" >默认地址</em>
				</div>
				<div class="add_right">
					<span class="change">修改</span>
				</div></dt>
				<dt v-for="(item,index) in address" v-if="item.id!==addressShow.id && !isShow">
					
					<div class="add_left">
					<input type="radio" /><span>{{item.msg}}</span>
				</div>
				<div class="add_right">
					<span class="setDefault" @click="setDefault(index)">设为默认地址</span><span class="change">修改</span><span class="delete" @click="deleteAddr(index)">删除</span>
				</div>
				</dt>
			</dl>
			<div class="add_operate"> <span @click="traggleAddr"><span v-if="isShow">展开其他地址</span><span v-if="!isShow">收起地址</span></span></div>
		</div>
		<div class="goods_info">
			<div class="goods_title">
			<span>商品信息</span>
		    </div>
		     <div v-for="(item,index) in goodslist.goods" class="shops_info">
		    <table  >
				<tr class="tr_title">
				
					<th class="goodsname">{{item.store}}</th>
					<th class="goodsstand">规格</th>
					<th class="price">单价</th>
					<th class="num">数量</th>
					<th class="price_sum">金额</th>
				</tr>
				<tr v-for="(item,index2) in item.goodslist">
					
					<td class="goodsname"> <img :src="item.tImg" alt="" width="60" />{{item.name}}</td>
					<td class="goodsstand"><span>尺码: {{item.size}}</span>
						<span>颜色: {{item.color}}</span>
					</td>
					<td class="price">¥ {{item.price}}</td>
					<td class="num">
						{{item.num}}
						
					</td>
					<td class="price_sum">¥ {{item.price*item.num}}</td>
					
				</tr>
				<tr class="sumPrice"><td colspan="7" >
					<span class="pricekey">商品金额</span>
					<span class="priceSum">¥ {{goodslist.arr[index]}}</span></td></tr>
			</table>
			<div class="billinfo">
			<span>开票信息</span>
				<input type="radio" :id="'rad1'+index"/><label :for="'rad1'+index">不需要</label>
				<input type="radio" :id="'rad2'+index"/><label :for="'rad2'+index">个人</label>
				<input type="radio" :id="'rad3'+index"/><label :for="'rad3'+index">单位</label>
				发票抬头: <input type="text" />
			<span>添加订单备注</span>	
				<input type="text" placeholder="限5个字,请填写相关商品\支付\发票等信息" />
		    </div>
		   </div>
		</div>
		<div class="check_info">
			<div class="top">
				<p>总计<span>¥{{goodslist.arr[goodslist.arr.length-1]}}</span></p>
				<p>使用积分抵扣(您有很多积分) <input type="" name="" id="" value="1000" /><span>-¥5</span></p>
			</div>
			<button class="submit" @click="submit">提交订单</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
				return{
				addressShow:{},
				isShow:true,
				address:[{id:0,msg:"河南省 郑州市 高新区郑州大学新校区 手机18037975851"},{id:1,msg:"河南省 上海市 高新区郑州大学新校区 手机18037975850"},{id:2,msg:"河南省 北京市 高新区郑州大学新校区 手机18037975856"}],
				goodslist:[],
				
			}
		},
		created(){
			this.addressShow=this.address[1];
			this.goodslist=this.$route.params.goodslist
		},
		methods:{
			setDefault(n){
				this.addressShow=this.address[n];
			},
			deleteAddr(n){
				this.address.splice(n,1)
			},
			traggleAddr(){
				this.isShow=!this.isShow
			},
			submit(){
				this.$router.push("success")
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./confirm.less");
</style>