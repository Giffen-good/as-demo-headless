import axios from 'axios'
import wpConfig from './wp-config'

const dynamicRoutes = () => {
  return axios
    .get(`${wpConfig.wpDomain}${wpConfig.api.getCustomPosts}`, null, {
      params: {
        per_page: 100,
        page: 1,
      },
    })
    .then((res) => {
      return res.data.map((post) => `/insights/${post.slug}`)
    })
}
export default dynamicRoutes
