import axios from "axios";

let api = axios.create({
  headers: {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    "Authorization": "Bearer 18cug86hcuzxvgrf022hem88iumoig"
  }
});

export default api;
