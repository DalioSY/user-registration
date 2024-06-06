import axios from "axios";

const api = axios.create({
  baseURL: "https://api-user-git-master-daliosys-projects.vercel.app/",
});

export default api;
