import axios from "axios";

export default {
  getKnowledges: function() {
    return axios.get("/api/knowledges");
  },
  getKnowledge: function(id) {
    return axios.get("/api/knowledges/" + id);
  },
  deleteKnowledge: function(id) {
    return axios.delete("/api/knowledges/" + id);
  },
  saveKnowledge: function(knowledgeData) {
    return axios.post("/api/knowledges", knowledgeData);
  },
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
