import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/contents/home/home'
import Choice from '@/components/contents/choice/choice'
import Special from '@/components/contents/special/special'
import Rank from '@/components/contents/rank/rank'
import Join from '@/components/contents/join/join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
//    redirect:'/home',
      name: 'root',
      component: Home
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
    }
    
  ]
})
