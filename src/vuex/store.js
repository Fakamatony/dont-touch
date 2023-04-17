import { createStore } from 'vuex'

import commonActions from '@/vuex/actions/actions';
import apiRequests from '@/vuex/actions/api-requests';
import mutations from '@/vuex/mutations/mutations';
import getters from '@/vuex/getters/getters';

const actions = {...commonActions, ...apiRequests}

const store = createStore({
  state:{
    products:[],
    cart:[]
  },
  mutations,
  actions,
  getters,
})
export default store;



