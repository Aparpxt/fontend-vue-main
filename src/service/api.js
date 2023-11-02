import axios from 'axios';
import store from '@/store/store'
const instance = axios.create();

instance.defaults.baseURL = 'http://127.0.0.1:80';
// instance.defaults.timeout = 5000;

instance.defaults.headers = {
  "Content-Type": "application/json",
  // "api-key": "12345678900987654321",
  // "api-version": "1.0",
  "X-Access-Token": "a577afd64a16b8ffb62572da8d322e45f7f5b049a81da0c318ed80d3c2a3180e",
  "X-Zid":"646ed78a0e42d7572c2302c5"
}


export default {
  // CONFIG

  onSetToken(){
    instance.defaults.headers = {
      "Content-Type": "application/json",
      "api-key": "12345678900987654321",
      "api-version": "1.0",
      "Authorization": `Bearer ${store.state.token}`,
      "X-Access-Token": "1a83bfa25e0273d2e1fc6e17114602a469ae3862ad889a4b4fcb2a92c96cdc75",
      "X-Sid":"644e8641c79355e42490b369"
      // "studentcode" : `${store.state.username}`,
      // "userid" : `${store.state.username}`,
      // "officerid":`${store.state.username}`
    }

  },
  onLogin(body) {
    return instance.post("/authen/APILogin",body)
  },

  onGetPrfile(body) {
    return instance.post("/api/v1/profile/student",body)
  }

}
