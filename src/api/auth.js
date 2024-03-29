import axios from "axios";

const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`${API}/register`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);

export const userByPhone = (user) => axios.post(`${API}/userone`, user);

export const userByPhoneByQuestion = (user) => axios.post(`${API}/useryreply`, user);