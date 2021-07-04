import axiosClient from "./axiosClient"

const authService = {
  login: (data) => {
    let url = '/login';
    return axiosClient.post(url, data);
  },
  getProfile: () => {
    let url = 'user/profile';
    return axiosClient.get(url);
  }
}

export default authService;
