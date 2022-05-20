import axios from 'axios'
import { useSelector } from 'react-redux'

const demoAPI = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
  },
})

window.http = demoAPI

export default demoAPI