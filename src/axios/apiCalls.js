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

export const customerRegister = user => {
  return axios({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phone,
      password: user.password,
      password2: user.password1
    },
    url: `${BASE_URL}/customer/register`,
    method: "POST"
  });
};

export const staffRegister = user => {
  return axios({
    data: {
      organisationName: user.organisationName,
      code: user.code,
      email: user.email,
      phoneNumber: user.phone,
      password: user.password,
      password2: user.password1,
      userType: user.userType
    },
    url: `${BASE_URL}/staffOthers/register`,
    method: "POST"
  });
};

export const storeRequest = request => {
  return axios({
    data: {
      passportNumber: request.passportNumber,
      ticketNumber: request.ticketNumber,
      travelTime: request.travelTime,
      travelDate: request.travelDate,
      flightNumber: request.flightNumber,
      origin: request.origin,
      destination: request.destination,
      requestedBy: request.requestedBy,
      requesterID: request.requesterID,
      disability: request.disability,
      age: request.age,
      service: request.service,
      requestedFor: request.requestedFor,
      phoneNumber: request.phoneNumber,
      transitDestination: request.transitDestination,
      transitDestinationCode: request.transitDestinationCode,
      transitAirline: request.transitAirline,
      transitAirlineCode: request.transitAirlineCode,
      destinationCode: request.destinationCode,
      originCode: request.originCode,
      airline: request.airline,
      airlineCode: request.airlineCode
    },
    url: `${BASE_URL}/request/storeRequest`,
    method: "POST"
  });
};

export const registeredAirports = () => {
  return axios({
    url: `${BASE_URL}/request/fetchRegisteredAirport`,
    method: "GET"
  });
};

export const registeredAirlines = () => {
  return axios({
    url: `${BASE_URL}/request/fetchRegisteredAirline`,
    method: "GET"
  });
};

export const viewOpenRequest = user => {
  return axios({
    data: {
      requesterID: user.requesterID
    },
    url: `${BASE_URL}/request/viewOpenRequest`,
    method: "POST"
  });
};

export const viewClosedRequest = user => {
  return axios({
    data: {
      requesterID: user.requesterID
    },
    url: `${BASE_URL}/request/viewClosedRequest`,
    method: "POST"
  });
};

export const cancelRequest = request => {
  return axios({
    data: {
      id: request.id
    },
    url: `${BASE_URL}/request/cancelRequest`,
    method: "POST"
  });
};

export const getAccountsForApproval = () => {
  return axios({
    url: `${BASE_URL}/staffIATA/fetchAccountsAwaitingApproval`,
    method: "GET"
  });
};

export const approveAccount = signature => {
  return axios({
    data: {
      name: signature.name,
      staffID: signature.staffID,
      id: signature.id
    },
    url: `${BASE_URL}/staffIATA/approveAccount`,
    method: "POST"
  });
};

export const rejectAccount = signature => {
  return axios({
    data: {
      id: signature.id
    },
    url: `${BASE_URL}/staffIATA/rejectAccount`,
    method: "POST"
  });
};
