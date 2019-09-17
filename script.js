var Quote = [
    {
 quote :"Being happy never goes out of style.",
      source :"by lilly Pulitzer",
    },
    {
 quote :"if it doesn't challenge you, it won't change you.",
      source :"article by Best joel osteen." 
    },
    {
 quote :"if God brings you to it , he will bring you out through it.",
     source :"by Marco pile."
 },
     {
 quote :"sometime you have to be your own hero.",
      source :"by angelique."
     },
 {
 quote :"just try new things, don't be afraid.Step out of your comfort zones and soars, all right.",
      source :"Michelle Obama."
 },
 ];
 console.log(Quotes);
     // generating a random numbers in array to select quotes//
 function getRandomQuote()
 {
 var randomNumber= math.floor(math.random()*Quotes.length);
 return randonNumber ;
 console.log(getRandomQuotes());
 }
    // printing the randomQuote that stored in the array of objects//
 function printQuotes ()
 {
     var randomNumber = getRandomQuote();
     var HTML ;
    HTML += quote.quote[randomNumber];
     HTML += quote.source[randomNumber];
 document.getElementById('Quote-box').innerHTML= HTML;
     return html ;
     console.log(randomQuote);
 }
 docoment.getElementById('LoadQuote').addEventListener("click",printQuote,false);