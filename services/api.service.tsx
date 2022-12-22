import axios from "axios";
//create axios instance with base url
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

//inject x-access-token header with axios interceptor
api.interceptors.request.use(
  (config: any) => {
    // config.headers["x-access-token"] = token;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

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
