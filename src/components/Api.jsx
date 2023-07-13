import axios from "axios";

const Api = axios.create({
  baseURL: "/data.json",

  // https://my-json-server.typicode.com/willianmassayuki/mydb
});

export default Api;