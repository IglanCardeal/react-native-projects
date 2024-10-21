import axios from 'axios'

const URL = 'https://sujeitoprogramador.com'

export const api = axios.create({
  baseURL: URL,
})
