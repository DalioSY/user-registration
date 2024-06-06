import axios from "axios";

const api = axios.create({
  baseURL: "https://api-user-topaz.vercel.app/",
});

export default api;
