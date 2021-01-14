
export const getUserToken = () => {
  if (!localStorage.getItem(ACCESS_TOKEN)){
    // return Promise.reject("No access token set.");
    console.log("No access token set.");
  }
  // return request({
  //   url: API_BASE_URL + "/user/me",
  //   method: "GET"
  // })
  localStorage.getItem("TOKEN");
};

export const setUserToken = (userToken) => {
  localStorage.setItem("TOKEN", userToken);
};

export const clearUserToken = () => {
  localStorage.setItem("TOKEN", "");
};

export const API_BASE_URL = "http://localhost:3000/visitor/api";
export const ACCESS_TOKEN = "accessToken";