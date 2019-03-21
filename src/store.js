import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let doMain = 'http://localhost:3000'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // allLink
    manageID: 1
  },
  mutations: {
    changeManageID (state, id) {
      state.manageID = id
    }
  },
  actions: {
    // allLink 获取所有的链接
    getAllLink () {
      return new Promise((resolve, reject) => {
        let res = axios.get(`${doMain}/allLink`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
