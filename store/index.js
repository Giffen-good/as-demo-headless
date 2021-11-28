import Vuex from 'vuex'
import axios from 'axios'
import wpConfig from '@/wp-config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      meta: {
        description: '',
        name: '',
      },
      openNav: false,
    },
    mutations: {
      SET_META(state, data) {
        state.meta = data
      },
      TOGGLE_NAV(state) {
        state.openNav = !state.openNav
      },
    },
    actions: {
      async nuxtServerInit({ commit }) {
        const meta = await axios.get(`${wpConfig.wpDomain}/wp-json`)
        commit('SET_META', meta.data)
      },
      toggleNav({ commit }) {
        commit('TOGGLE_NAV')
      },
    },
  })
}

export default createStore
