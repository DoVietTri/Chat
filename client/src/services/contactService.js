import axiosClient from "./axiosClient"

const authService = {
  getAllFriends: () => {
    let url = '/contact/get-all-friends';
    return axiosClient.get(url);
  }
}

export default authService;
