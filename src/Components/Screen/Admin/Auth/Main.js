export const getUserToken = () => {
  return localStorage.getItem("TOKEN");
};

export const setUserToken = (userToken) => {
  localStorage.setItem("TOKEN", userToken);
};

export const clearUserToken = () => {
  localStorage.setItem("TOKEN", "");
};
