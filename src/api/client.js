import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:5200',
  headers: {
    'Content-Type': 'application/json'
  }
})

const get = async (endpoint, params) => {
  const response = await axiosClient.get(endpoint, params)

  return response
}

export default {
  get
}
