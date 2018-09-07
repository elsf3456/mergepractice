$(document).ready(function(){
    $("input").click(function()
   {
        // $("H1").text($("li:first").text());
        
        var numberoflistitem = $("li").length;
        var randomChildNumber =      
        Math.floor(Math.random()*numberoflistitem)
        console.log(randomChildNumber);
      $("H1").text($("li").eq(randomChildNumber).text());
       
    });
 });