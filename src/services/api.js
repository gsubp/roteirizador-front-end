import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.01:3333/" });

export default api;