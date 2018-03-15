var quote=[
    ["Don t cry because its over, smile because it happened.","Dr. Seuss"],
    ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Monroe"],
    ["Be yourself; everyone else is already taken.","Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
    ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
    ["You've gotta dance like there's nobody watching","William W. Purkey"]
    ["A room without books is like a body without a soul.","Marcus Tullius Cicero7"],
    ["No one can make you feel inferior without your consent.","Eleanor Roosevelt"]
     ];
var quote_text = document.getElementById("quote_text");
var author = document.getElementById("author");

 function getQuote(){
    var randomQuote=quote[Math.ceil(Math.random()*(quote.length))];  
    quote_text.innerHTML=randomQuote[0];
    author.innerHTML=randomQuote[1];
     }
window.onload = function(){
    getQuote();    
}
var new_quote = document.getElementById("new_quote");
 new_quote.onclick = function(){
        getQuote();
    }