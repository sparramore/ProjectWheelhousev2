const db = require("../models/article");
var cheerio = require("cheerio");
var request = require("request");

module.exports = {
    findCPP: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/cpp/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {
                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "cpp";


                db.article.create(result);
            });
        });
    },
    findJava: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/java/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {


                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "java";


                db.article.create(result);
            });
        });
    },
    findJavascript: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/javascript/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {


                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "javascript";


                db.article.create(result);
            });
        });
    },
    findCSharp: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/c/#/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {


                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "c#";


                db.article.create(result);
            });
        });
    },
    findPHP: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/php/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {


                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "php";


                db.article.create(result);
            });
        });
    },
    findPython: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/python/", function (error, response, html) {
            var $ = cheerio.load(html);
            console.log("findPython");
            $("article header h2 a").each(function (i, element) {

                console.log("python article scraped");
                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "python";

                db.article.create(result);
            });
        });
    },
    findC: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/c/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {


                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "c";


                db.article.create(result);
            });
        });
    },
    findSQL: function (req, res) {
        request("https://www.geeksforgeeks.org/category/programming-language/sql/", function (error, response, html) {
            var $ = cheerio.load(html);
            $("article header h2 a").each(function (i, element) {


                var result = {};

                result.LinkName = $(element).text();

                result.LinkUrl = $(element).attr("href");

                result.HeuristicScore = 0;

                result.Language = "sql";


                db.article.create(result);
            });
        });
    }
}