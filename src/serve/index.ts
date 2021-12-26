import axios, {AxiosRequestConfig,AxiosInstance} from 'axios';
const config:AxiosRequestConfig={
  baseURL:"api"
}
const instance:AxiosInstance =  axios.create(config)
export default instance