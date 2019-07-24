import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },

  /* Adding event to the datebase db.json file
     It's connected with store.js action  
  */
  postEvent(event) {
    return apiClient.post("/events", event);
  }
};
