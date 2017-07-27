import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userid:0,
    user:{
    		
    },
    store:{
    		name:"",
    		detail:"",
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
    },
    changeStore(state,n){
    		state.store.name=n
    },
    changeDetail(state,n){
    		state.store.detail=n
    }
  }
})
export default store;