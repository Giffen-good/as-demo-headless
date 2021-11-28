import axios from 'axios'
import wpConfig from '@/wp-config'

const getPageData = async (
  params = { slug: 'front-page' },
  endpoint = wpConfig.api.getPages
) => {
  try {
    const page = await axios
      .get(`${wpConfig.wpDomain}${endpoint}`, {
        params,
      })
      .then((res) => res.data[0])
    return page
  } catch (err) {
    console.log(err)
  }
}
export default getPageData
