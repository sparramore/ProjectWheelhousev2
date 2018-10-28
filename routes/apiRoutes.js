module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const userController = require("../controllers/userController");
	const knowledgeController = require("../controllers/knowledgeController");
	const articleController = require("../controllers/articleController");
	const scraperController = require("../controllers/scraperController");


	//add any API routes here
	//router.get("/user", userController.findAll)
		
	
	router.route("/knowledges")
	.get(knowledgeController.findAll);

	router.route("/articles")
	.get(articleController.findAll);

	router.route("/cpp")
	.get(scraperController.findCPP);

	router.route("/java")
	.get(scraperController.findJava);

	router.route("/javascript")
	.get(scraperController.findJavascript);

	router.route("/csharp")
	.get(scraperController.findCSharp);

	router.route("/php")
	.get(scraperController.findPHP);

	router.route("/python")
	.get(scraperController.findPython);

	router.route("/c")
	.get(scraperController.findC);

	router.route("/sql")
	.get(scraperController.findSQL);

	return router;
};