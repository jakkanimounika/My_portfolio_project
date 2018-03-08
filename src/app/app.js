

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../styles/app.scss';
import $ from "jquery";
import 'popper.js/dist/popper.min.js';
import 'slick-carousel';
import 'google-fonts';
// import 'wowjs/dist/wow.min.js';
// import Popper from "popper.js";
// import 'bootstrap';
import 'lightgallery/dist/css/lightgallery.css';


$(document).ready(function(){
  randomQuote();
  function randomQuote(){
    $.ajax({
       url: 'https://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json',
       dataType: 'json',
       data: {
        method: "getQuote",
        lang: "en",
        format: "json"
      },
       success: function(response){
        $('#get-quote').html( response.quoteText + '<br>'+ '<div class="author">'+'-' + response.quoteAuthor + "</div>");

       }
    });
  }
  $('#quote-button').click(function() {
    randomQuote();
});

});

// function randomQuote() {
//   $.ajax({
//       url: "https://api.forismatic.com/api/1.0/?",
//       dataType: "jsonp",
//       data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
//       success: function( response ) {
//         $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
//           response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
//         $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
//           ' (' + response.quoteAuthor + ')');
//       }
//   });
// }
//
// $(function() {
//   randomQuote();
// });
//
// $("button").click(function(){
//   randomQuote();
// });

//   $(window).scroll(function() {
//
//     if ($(this).scrollTop()===$('#abut'))
//      {
//         $('#return-to-top').show();
//      }
//
//  });
