import axios from "axios";

const API_BASE_URL = "https://localhost:5000"; // Replace with your actual backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // If using cookies for auth
});

export default api;