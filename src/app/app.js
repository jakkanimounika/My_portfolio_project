

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

// $('body').scrollspy({ target: '#services' });
$('#myScrollspy').on('activate.bs.scrollspy', function () {
  if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }
});


function randomQuote() {
  $.get( "/getQuote", function( data ) {
    //console.log(data);
    $('#get-quote').html('"'+data+'"');
  });
}
randomQuote();

$("#quote-button").click(function(){
  randomQuote();
});



$("#generate-form").click(function(){
  var jstr =$("#json-string textarea").val();
  var jobj =JSON.parse(jstr);
  $("#json-form").empty("");

  for(let i=0; i<jobj.length; i++) {
    if(jobj[i].type == "input") {
      addInputField(jobj[i]);
    }
  }


});

function addInputField(fldobj) {
  var form_str= `
        <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">${fldobj.name}</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="staticEmail" value="">
            </div>
          </div>
          `;

  $("#json-form").append(form_str);
}

$("#json-string").hide();

$(".project").click(function(){
   $("#main").hide();
   $("#json-string").show();
});


$(".nav-link").click(function() {
  if($("#main").is(':hidden')) {
    $("#json-string").hide();
    $("#main").show();
  }

});


$(".project").click(function(){
  $(".form-submit-button").hide();
});

$("#generate-form").click(function(){
   $(".form-submit-button").fadeIn();
});
