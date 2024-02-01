import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const registerUserServices = (data) => axios.post(`${BASE_URL}/register`, data)

export { registerUserServices }