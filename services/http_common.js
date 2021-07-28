import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:7373/api",
    headers: {
        "Content-type": "application/json"
    }
});