module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const userController = require("../controllers/userController");
	const knowledgeController = require("../controllers/knowledgeController");
	const articleController = require("../controllers/articleController");


	//add any API routes here
	//router.get("/user", userController.findAll)
		
	
	router.route("/knowledges")
	.get(knowledgeController.findAll);

	router.route("/articles")
	.get(articleController.findAll);

	return router;
};