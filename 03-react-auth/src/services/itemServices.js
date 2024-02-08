import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemService = (data, jwtToken) => axios.post(`${BASE_URL}/users/me`, data, {
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
})

export {
  getAllItemsService,
  getOneItemService,
  createItemService
}
