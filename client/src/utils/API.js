import axios from "axios";

export default {
  getProjects: function() {
    return axios.get("/api/projects");
  },
  saveProject: function(newProject) {
    return axios.post("/api/projects", newProject);
  },
  submitMsgForm: (data) => {
    return axios.post("/api/contacts/message", data);
  },
  submitRsmForm: (data) => {
    return axios.post("/api/contacts/resume", data);
  },
  getChars: function() {
    return axios.get("/api/game/allChars");
  },
  getEnemies: function() {
    return axios.get("/api/game/enemies");
  },
  getEnv: function(current) {
    return axios.put("/api/game/env", current);
  },
  endGame: function(winOrLose) {
    return axios.put("/api/game/endGame", winOrLose);
  }
};