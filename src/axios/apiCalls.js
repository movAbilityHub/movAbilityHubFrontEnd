import axios from "axios";
import BASE_URL from "./baseURL";

export const customerLogin = user => {
  return axios({
    data: {
      email: user.email,
      password: user.password
    },
    url: `${BASE_URL}/customer/login`,
    method: "POST"
  });
};

export const otherStaffLogin = user => {
  return axios({
    data: {
      email: user.email,
      password: user.password,
      userType: user.userType
    },
    url: `${BASE_URL}/staffOthers/login`,
    method: "POST"
  });
};

export const iataStaffLogin = user => {
  return axios({
    data: {
      email: user.email,
      password: user.password
    },
    url: `${BASE_URL}/staffIATA/login`,
    method: "POST"
  });
};

export const travelAgentLogin = user => {
  return axios({
    data: {
      email: user.email,
      password: user.password
    },
    url: `${BASE_URL}/travelAgents/login`,
    method: "POST"
  });
};
