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
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  scrapecpp: function()
  {
    return axios.get("api/cpp");
  },
  scrapejava: function()
  {
    return axios.get("api/java");
  },
  scrapejavascript: function()
  {
    return axios.get("api/javascript");
  },
  scrapecsharp: function()
  {
    return axios.get("api/csharp");
  },
  scrapephp: function()
  {
    return axios.get("api/php");
  },
  scrapepython: function()
  {
    return axios.get("api/python");
  },
  scrapec: function()
  {
    return axios.get("api/c");
  },
  scrapesql: function()
  {
    return axios.get("api/sql");
  }
    
};
