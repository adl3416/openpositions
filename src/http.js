
import axios from 'axios';
import {config} from './constants'

const $http = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": 'application/json' ///
  },
})

export default $http