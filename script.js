/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

  //Create the array of quote objects 
  var quotes = [
    {
  	quote: "Being happy never goes out of style",
  	source: "by Lilly pulitzer",
  }, 
  {
  	quote: "If it doesn't challenge you, it won't change you",
  	source: "article by Best joel osteen",
  }, 
  {
  	quote: "If God brings you to it , he will bring you out through it",
  	source: "by Marco pile.",
  }, 
  {
  	quote: "She's gonna step outside,uncover her eyes, who knew she could feel so alive",
  	source: "Britney spears",
  	citation: "Brave New Girl",
  	year: 2003
  }, 
  {
  	quote: "Just try new things, don't be afraid.Step out of your comfort zones and soars, all right",
  	source: "Michelle Obama",
  }
];
  console.log(quotes);
  // Creating the getRandomQuote function 
  function getRandomQuote() {
  	//Creating a variable to store a randomquote
  	var randomQuote = Math.floor(Math.random() * quotes.length);
  	return quotes[randomQuote];
  }
  console.log(getRandomQuote());
  // Creating function printQuote, and Call the getRandomQuote function, and assign it to a variable.
  function printQuote() 
  {
  	var randomQuote = getRandomQuote();
  	html = '';
  	html += '<p class = "quote">' + randomQuote.quote + '</p>';
  	html += '<p class = "source">' + randomQuote.source;
  	// optional properties
    if (randomQuote.hasOwnProperty('citation') === true) 
    {
  		html += '<span class = "citation ">' + ' ' + randomQuote.citation + '</span>';
  	}
    if (randomQuote.hasOwnProperty('year') === true) 
    {
  		html += '<span class = "year">' + ' ' + randomQuote.year + '</span>' + '</p>'
  	}
  	document.getElementById('quote-box').innerHTML = html;
  	return html;
  }
  printQuote();
  console.log(printQuote());
  // Button click listener
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
