$(document).ready(function(){
  var random_quotes,random_number,random_authors;
  function getquote(){
    var quotes=["  Life is about making an impact, not making an income.","Whatever the mind of man can conceive and believe, it can achieve","Strive not to be a success, but rather to be of value."];
   var authors=["-Kevin Kruse","–Napoleon Hill","-Albert Einstein"];
  
  random_number=Math.floor(Math.random()*quotes.length);
  random_quotes=quotes[random_number];
  random_authors=authors[random_number];
  $(".quote").text(random_quotes);
  $(".author").text(random_authors);
  }
  $("#newquote").on("click",function(){
  getquote();
  });
  $("#tweet").on("click",function(){
    window.open("https://www.twitter.com/intent/tweet?=text="+random_quotes +" " +random_authors);
  });
  });
  