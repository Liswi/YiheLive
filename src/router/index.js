import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/contents/home/home'
import Guide from '@/components/guide/guide'
import Login from '@/components/guide/login/login'
import Reg from '@/components/guide/reigister/reg'
import Choice from '@/components/contents/choice/choice'
import Special from '@/components/contents/special/special'
import Rank from '@/components/contents/rank/rank'
import Join from '@/components/contents/join/join'
import PerCenter from '@/components/PerCenter/perCenter'
import MyAccount from '@/components/PerCenter/myCount/myAccount'
import MyOrder from '@/components/PerCenter/myCount/myOrder'
import Address from '@/components/PerCenter/myCount/address'
import MyCollection from '@/components/PerCenter/myCount/myCollection'
import MyItg from '@/components/PerCenter/myCount/myItg'
import MyMessage from '@/components/PerCenter/myCount/myMessage'
import MyTicket from '@/components/PerCenter/myCount/myTicket'
import PerInfo from '@/components/PerCenter/myCount/perInfo'
import RecentView from '@/components/PerCenter/myCount/recentView'
import ResetPassword from '@/components/PerCenter/myCount/resetPassword'
import Recharge from '@/components/PerCenter/myCount/recharge'
import Wrong from '@/components/404/404'
import City from '@/components/contents/home/city/city'
import Cart from '@/components/cart/index'
import TiePhone from '@/components/PerCenter/myCount/tiePhone'
import MsgDetail from '@/components/PerCenter/myCount/msg-detail'
import Exchange from '@/components/PerCenter/myCount/exchange'
import Explain from '@/components/explain/explain'
Vue.use(Router)
Vue.use(require('vue-wechat-title'));
export default new Router({
	mode: "history",
	routes: [{
			path: '/',
			name: "guide",
			meta: {
				title: '引导'
			},
			component: Guide
		},
		{
			path: "/login",
			name: "Login",
			meta: {
				title: '登录'
			},
			component: Login
		},
		{
			path: "/reg",
			name: "Reg",
			meta: {
				title: '注册'
			},
			component: Reg
		},
		{
			path: '/index',
			name: 'root',
			component: Home,
			meta: {
				title: '首页'
			},
			children: [{
				path: "city",
				name: "City",
				meta: {
					title: '城市列表'
				},
				component: City
			}, {
				path: "store",
				name: "store",
				meta: {
					title: '店铺详情'
				},
				component: resolve => require(['@/components/stors'], resolve),
				children: [{
					path: "detail",
					name: "detail",
					meta: {
						title: '商品详情'
					},
					component: resolve => require(['@/components/stors/goodsDetail/goodsDetail'], resolve),
				}]
			}]
		},
		{
			path: 'explain',
			component: Explain,

			children: [{
					path: '/',
					name: 'logon',
					meta: {
						title: '关于易和'
					},
					component: resolve => require(['@/components/explain/myContents/logon'], resolve),
				}, {
					path: 'money',
					name: 'money',
					meta: {
						title: '关于易和'
					},
					component: resolve => require(['@/components/explain/myContents/money'], resolve),
				}, {
					path: 'express',
					name: 'express',
					component: resolve => require(['@/components/explain/myContents/express'], resolve),
				}, {
					path: 'salesReturn',
					name: 'salesReturn',
					component: resolve => require(['@/components/explain/myContents/salesReturn'], resolve),
				}, {
					path: 'distribution',
					name: 'distribution',
					component: resolve => require(['@/components/explain/myContents/distribution'], resolve),
				}, {
					path: 'company',
					name: 'company',
					component: resolve => require(['@/components/explain/myContents/company'], resolve),
				}, {
					path: 'Integral',
					name: 'Integral',
					component: resolve => require(['@/components/explain/myContents/Integral'], resolve),
				}

			]
		},
		{
			path: '/cart',
			component: Cart,
			meta: {
				title: '购物车'
			},
			children: [{
					path: '/',
					name: 'shopCar1',
					meta: {
						title: '购物车'
					},
					component: resolve => require(['@/components/cart/car/car'], resolve),
				},
				{
					path: 'car',
					name: 'shopCar2',
					meta: {
						title: '购物车'
					},
					component: resolve => require(['@/components/cart/car/car'], resolve),
				},
				{
					path: 'confirm',
					name: 'confirm',
					meta: {
						title: '确认订单'
					},
					component: resolve => require(['@/components/cart/confirm-indent'], resolve),
				},
				{
					path: 'success',
					name: 'success',
					meta: {
						title: '提交成功'
					},
					component: resolve => require(['@/components/cart/success'], resolve),
				},

			]
		},
		{
			path: '/home',
			name: 'home',
			meta: {
				title: '首页'
			},
			component: Home
		},
		{
			path: '/choice',
			name: 'choice',
			meta: {
				title: '精选品牌'
			},
			component: Choice
		},
		{
			path: '/special',
			name: 'special',
			meta: {
				title: '今日特价'
			},
			component: Special
		},
		{
			path: '/rank',
			name: 'rank',
			meta: {
				title: '积分商城'
			},
			component: Rank
		},
		{
			path: '/join',
			name: 'join',
			meta: {
				title: '加入我们'
			},
			component: Join
		},
		{
			path: '/perCenter',

			component: PerCenter,
			children: [{
					path: "myAccount",
					name: "myAccount",
					meta: {
						title: '个人中心'
					},
					component: MyAccount
				}, {
					path: "/",
					meta: {
						title: '个人中心'
					},
					component: MyAccount
				},
				{
					path: 'recharge',
					name: 'recharge',
					meta: {
						title: '个人中心'
					},
					component: Recharge
				},
				{
					path: "exchange",
					name: "exchange",
					meta: {
						title: '个人中心'
					},
					component: Exchange
				},
				{
					path: "msgDetail",
					name: "msgDetail",
					meta: {
						title: '个人中心'
					},
					component: MsgDetail
				},
				{
					path: 'tiePhone',
					name: 'tiePhone',
					meta: {
						title: '个人中心'
					},
					component: TiePhone
				},
				{
					path: "myOrder",
					name: "myOrder",
					component: MyOrder
				}, {
					path: "address",
					name: "address",
					component: Address
				}, {
					path: "myCollection",
					name: "myCollection",
					component: MyCollection
				}, {
					path: "myItg",
					name: "myItg",
					component: MyItg
				}, {
					path: "myMessage",
					name: "myMessage",
					component: MyMessage
				}, {
					path: "myTicket",
					name: "myTicket",
					component: MyTicket
				}, {
					path: "perInfo",
					name: "perInfo",
					component: PerInfo
				}, {
					path: "recentView",
					name: "recentView",
					component: RecentView
				}, {
					path: "resetPassword",
					name: "resetPassword",
					component: ResetPassword
				}

			]
		},
		{
			path: '*',
			name: 'wrong',
			component: Wrong
		}
	]
})