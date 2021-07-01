import axiosClient from "./axiosClient"

const authService = {
  login: (data) => {
    let url = '/login';
    return axiosClient.post(url, data);
  }
}

export default authService;
