import axios from 'axios'
import wpConfig from '@/wp-config'

export const state = () => ({
  page: {},
})
export const mutations = {
  UPDATE_PAGE: (state, page) => {
    state.page = page
  },
}
export const actions = {
  getSinglePageData: async ({ state, commit }, slug) => {
    if (state.page.length) return
    try {
      const page = await axios
        .get(`${wpConfig.wpDomain}${wpConfig.api.getPages}`, {
          params: {
            slug,
          },
        })
        .then((res) => res.data[0])
      commit('UPDATE_PAGE', page)
    } catch (err) {
      console.log(err)
    }
  },
}
