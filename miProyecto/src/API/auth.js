import axios from "./axios";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/Login`, user);

export const verifyTokenRequet = () => axios.get("/verify");
