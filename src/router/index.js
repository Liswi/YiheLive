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
//import Car from '@/components/cart/car/car'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
  {
  			path:'/',
  			name:"guide",
  			component:Guide
  		},
  		{
  			path:"/login",
  			name:"Login",
  			component:Login
  		},
  		{
	  		path:"/reg",
	  		name:"Reg",
	  		component:Reg
  		},
   	 {
      path: '/index',
      name: 'root',
      component: Home,
      children:[{
      	path:"city",
      	name:"City",
      	component:City
      }]
    },
    {
    		path:'/cart',
    		component:Cart,
    		children:[
    			{
    				path:'/',
    				name:'shopCar1',
    				component:resolve => require(['@/components/cart/car/car'], resolve),
    			},
    			{
    				path:'car',
    				name:'shopCar2',
    				component:resolve => require(['@/components/cart/car/car'], resolve),
    			},
    			{
    				path:'confirm',
    				name:'confirm',
    				component:resolve => require(['@/components/cart/confirm-indent'], resolve),
    			},
    			{
    				path:'success',
    				name:'success',
    				component:resolve => require(['@/components/cart/success'], resolve),
    			},
    		
    		]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
	    	path:'/choice',
	    	name:'choice',
	    	component: Choice
    },
    {
    		path:'/special',
	    	name:'special',
	    	component: Special
    },
    {
    		path:'/rank',
	    	name:'rank',
	    	component: Rank
    },
    {
   	 	path:'/join',
	    	name:'join',
	    	component: Join
    },
    {
    		path:'/perCenter',

    		component: PerCenter,
    		children:[
    			{
    				path:"myAccount",
    				name:"myAccount",
    				component:MyAccount
    			},{
    			    	path:"/",
    				component:MyAccount
    			},
    			{
    				path:'recharge',
    				name:'recharge',
    				component:Recharge    				
    			},
    			{
    				path:"myOrder",
    				name:"myOrder",
    				component:MyOrder
    			},{
    				path:"address",
    				name:"address",
    				component:Address
    			},{
    				path:"myCollection",
    				name:"myCollection",
    				component:MyCollection
    			},{
    				path:"myItg",
    				name:"myItg",
    				component:MyItg
    			},{
    				path:"myMessage",
    				name:"myMessage",
    				component:MyMessage
    			},{
    				path:"myTicket",
    				name:"myTicket",
    				component:MyTicket
    			},{
    				path:"perInfo",
    				name:"perInfo",
    				component:PerInfo
    			},{
    				path:"recentView",
    				name:"recentView",
    				component:RecentView
    			},{
    				path:"resetPassword",
    				name:"resetPassword",
    				component:ResetPassword
    			}
    		
    		]
    },
    {
    		path:'*',
    		component:Wrong
    }
  ]
})
