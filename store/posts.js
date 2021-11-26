import axios from 'axios'
import wpConfig from '@/wp-config'

export const state = () => ({
  posts: [],
  post: [],
})

export const mutations = {
  UPDATE_POSTS: (state, posts) => {
    state.posts = posts
  },
  UPDATE_POST: (state, post) => {
    state.post = post
  },
}

export const actions = {
  getAllPosts: async ({ state, commit }) => {
    if (state.posts.length) return
    try {
      const posts = await axios
        .get(`${wpConfig.wpDomain}${wpConfig.api.getCustomPosts}`, null, {
          params: {
            per_page: 4,
            page: 1,
          },
        })
        .then((res) => res.data)
      commit('UPDATE_POSTS', posts)
    } catch (err) {
      console.log(err)
    }
  },
  getPost: async ({ state, commit }, slug) => {
    if (state.post.length) return
    try {
      const post = await axios
        .get(`${wpConfig.wpDomain}${wpConfig.api.getCustomPosts}`, {
          params: {
            slug,
          },
        })
        .then((res) => res.data[0])
      commit('UPDATE_POST', post)
    } catch (err) {
      console.log(err)
    }
  },
}
