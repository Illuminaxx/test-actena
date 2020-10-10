import axios from "axios";

let api = axios.create({
  headers: {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    "Authorization": process.env.REACT_APP_TOKEN
  }
});

export default api;
