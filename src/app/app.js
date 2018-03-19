var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute,hashHistory} = require('react-router');
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../styles/app.scss';
import $ from "jquery";
import 'popper.js/dist/popper.min.js';
import 'google-fonts';
// import Popper from "popper.js";
// import 'bootstrap';


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
    } else if(jobj[i].type == "dropdown") {
      // console.log("coming here 0");
      addInputOptionField(jobj[i]);
    } else if (jobj[i].type == "radio") {
      addInputRadioButton(jobj[i]);
    }

  }


});

function addInputOptionField(fldobj) {
  //fldobj.options = ["CA","NZ"];
  var form_str = `
  <div class="form-group row">
    <label for="exampleSelect1"class="col-sm-2 col-form-label">${fldobj.name}*</label>
    <div class="col-sm-10">
    <select class="form-control" id="exampleSelect1">
    </div>
  `;
  for(let i=0; i<fldobj.options.length; i++) {
    form_str += `<option>${fldobj.options[i]}</option>`;
  }
  form_str += `
    </select>
  </div>`;
$("#json-form").append(form_str);
}
function addInputRadioButton(fldobj){
  var form_str = `<div class="form-check row">
  <div class="col-md-4 pl-0">
     ${fldobj.name}
  </div>`;
  for(let i=0;i<fldobj.options.length;i++){
    form_str += `
    <div class="col-md-4 ">
    <input class="form-check-input" type="radio">
    <label class="form-check-label" for="inlineRadio1">${fldobj.options[i]}</label>
    </div>`;
  }
  form_str += `</div>`;
  $("#json-form").append(form_str);

}

function addInputField(fldobj) {
  var form_str= `
        <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">${fldobj.name}*</label>
            <div class="col-sm-10" id="form2">
              <input type="text" class="form-control" id="staticEmail" value="">
            </div>
        </div>
          `;
$("#json-form").append(form_str);

}


$("#json-string").hide();
$(".form-submit-button").hide();
$("#todo-list").hide();

$(".project1").click(function(){
   $("#main").hide();
   $("#json-string").show();
   $("#todo-list").hide();

});


$(".nav-link").click(function() {
  if($("#main").is(':hidden')) {
    $("#json-string").hide();
    $("#main").show();
  }

});


$(".project2").click(function(){
  $("#main").hide();
  $("#json-string").hide();
  $("#todo-list").show();
});

$("#generate-form").click(function(){
   $(".form-submit-button").fadeIn();
});



/*===============Json Form Validation=================*/

  $(".form-submit-button").click(function(){
    var formValid = true;
     $("#form2 input").each(function(){
       if($(this).val().length == 0){
         $(this).css({ "border": '#FF0000 1px solid'});

         formValid = false;
       }
       else if ($(this).val().length > 0) {
          $(this).css({ "border": '#228B22 1px solid'});
         formValid = true;
       }
   });
     if(!formValid){
       alert("Please fill all the forms indicated by *");
     }
     else if (formValid) {
       alert("form submitted successfully");
     }

  });

  /*===============React Project=================*/

  var Main = require('../app/containers/Main');

  // ReactDOM.render(<Main />, document.getElementById('sec'))
