import axios from "axios";

export default {
  getProjects: function() {
    return axios.get("/api/projects");
  },
  saveProject: function(newProject) {
    return axios.post("/api/projects", newProject);
  },
  submitForm: (data) => {
    return axios.post("http://localhost:3000/api/contacts", data);
  }
};