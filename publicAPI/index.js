#! /usr/bin/env node

var superagent = require("superagent");
var inquirer = require("inquirer");
var chalk = require("chalk");

function BuildKey(source,sortby)
{
	return "https://newsapi.org/v1/articles?source=" + source + "&apiKey=a15864e776014990966b7593cb63d7e0";
}
function Search(callback) {
  var questions = [
    {
      name: 'sources',
      type: 'input',
      message: 'Searching on NewAPI.org Enter your source: ',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please Enter your source: ';
        }
      }
    },
    {
      name: 'sort',
      type: 'input',
      message: 'You can sort by "top", "latest" or "popular" Sort By: ',
      validate: function(value) {
        if (value.length) {
        	if (value === "top" || value === "latest" || value === "popular"){
        		return true;
        	}
        	else{
        		return "Please enter a valid sort order";
        	}
        } else {
          return "Please enter your sort order";
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}
Search(function(){
	superagent.get(BuildKey(arguments[0].sources,arguments["sort"])).end(function(err, res){
		if(err)
		{
			console.log(err);
		}
		else
		{
			for (var i = 0; i < res.body.articles.length; i++)
			{
				console.log(res.body.articles[i].author);
				console.log("\n\t" + res.body.articles[i].title);
				console.log("\n\t" + res.body.articles[i].description);
				console.log("\n\t" + res.body.articles[i].url);
			}
		}
})
});
