import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userid:0,
    user:{
    		
    }
  },
  mutations: {
    	changeuser (state,n) {
     	 state.userid=n;
    },
    changeName (state,name){
   	 	state.user.name=name
    },
    emit(state){
    		state.userid=0
    		state.user={};
    }
  }
})
export default store;