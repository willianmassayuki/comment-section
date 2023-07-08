import axios from "axios";

const Api = axios.create({
  baseURL: "/data.json",
});

export default Api;