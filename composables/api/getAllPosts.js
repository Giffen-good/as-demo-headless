import axios from 'axios'
import wpConfig from '@/wp-config'

const getAllPosts = async (per_page = 4, page = 1) => {
  try {
    const posts = await axios
      .get(`${wpConfig.wpDomain}${wpConfig.api.getCustomPosts}`, null, {
        params: {
          per_page,
          page,
        },
      })
      .then((res) => res.data)
    return posts
  } catch (err) {
    console.log(err)
  }
}
export default getAllPosts
