import axios from "axios";

export default {

  getProjects: function() {
    return axios.get("/api/projects");
  },
  saveBook: function(newProject) {
    return axios.post("/api/projects", newProject);
  }
};