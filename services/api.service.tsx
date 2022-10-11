import axios from "axios";

//create axios instance with base url
const api = axios.create({
  baseURL: "http://localhost:3000",
});

//inject x-access-token header with axios interceptor
api.interceptors.request.use((config) => {
  // config.headers["x-access-token"] =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyODE3MGQwMWIxMzVkNDdiMDM4Njc1MiIsImVtYWlsIjoiYmFiYUBnbWFpbC5jb20ifSwiaWF0IjoxNjU3NzkzMjY3LCJleHAiOjE2NTc3OTY4Njd9.EskWNa3FEf9rEtaq7iMDjD9cTMQr9HKtQDjOcEDSUzM";
  return config;
});

//manage token refresh with axios interceptor
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       //refresh token
//       api
//         .post("/applications", {
//           client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
//           client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
//           grant_type: "refresh_token",
//           refresh_token: process.env.REACT_APP_GITHUB_REFRESH_TOKEN,
//         })
//         .then((response) => {
//           //update token in axios instance
//           api.defaults.headers.common["x-access-token"] =
//             response.data.access_token;
//           //retry request
//           return api(error.config);
//         })
//         .catch((error) => {
//           //logout
//           window.location.href = "/logout";
//         });
//     }
//     return Promise.reject(error);
//   }
// );

export { api };
