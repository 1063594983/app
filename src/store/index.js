import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import article from './article'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    article
  }
})

export default store
