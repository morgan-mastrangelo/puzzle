import axios from "axios";
import Swal from "sweetalert2";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const userData = ref({
    name: '',
    email: ''
  });

  function registerUser(user: any) {
    return axios.post('http://127.0.0.1:8000/api/register/', user)
      .then(res => res.data)
      .catch(({response:{data}}) => data);
  }

  function loginUser(user: any) {
    return axios.post('http://127.0.0.1:8000/api/login/', user)
      .then(res => res.data)
      .catch(({response:{data}}) => data);
  }

  function accessToken() {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return axios.get('http://127.0.0.1:8000/api/token/')
      .then(res => {
        if(res.data.success === true) {
          window.location.href = "/option";
        } else {
          window.location.href = "/auth";
        }
      })
      .catch(({response:{data}}) => {
        Swal.fire({
          title: data.message,
          icon: "error"
        }).then(() => window.location.href = "/auth")
      });
  }

  return { userData, registerUser, loginUser, accessToken }
});