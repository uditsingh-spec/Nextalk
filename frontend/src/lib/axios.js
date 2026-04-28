import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
   ? "http://localhost:3000/api" 
   :  "https://nextalk-backend-xges.onrender.com/api",
  withCredentials: true,
});
