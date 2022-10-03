import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:3001/",
});

export default axiosApiIntances;
