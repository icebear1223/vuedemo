//引入vue和vuex
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
	 state:{
	 	total:0
	 },
	 getters:{
	 	getTotal(state){
	 		return state.total
	 	}
	 },
	 actions:{
	 	updataTotal(context,newTotal){
	 		context.commit('changeTotal',newTotal);
	 	}
	 },
	 mutations:{
	 	changeTotal(state,newTotal){
	 		state.total = newTotal
	 	}
	 }
})