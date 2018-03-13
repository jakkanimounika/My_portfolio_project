

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
    } else if(jobj[i].type == "dropdown") {
      // console.log("coming here 0");
      addInputOptionField(jobj[i]);
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

function addInputField(fldobj) {
  var form_str= `
        <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">${fldobj.name}*</label>
            <div class="col-sm-10">
              <input type="text" class="form2 form-control" id="staticEmail" value="">
            </div>

          </div>
          `;
$("#json-form").append(form_str);

}


// $(".form-submit-button").click(function(){
// if($('input:text').is(":empty"))
// {
//   alert("Feilds should not be empty");
// }else {
//   alert("submit successfully");
// }
// });

/*===============Json Form Validation=================*/
// $(".form-submit-button").click(function(){
//     var isFormValid = true;
//
//     $(".form2 input:text").each(function(){
//        if ($(this).val().length == 0){
//          $(this).css({ "border": '#FF0000 1px solid'});
//                isFormValid = false;
//             }
//         else{
//           $(this).removeClass({"border": '#FF0000 1px solid'});
//         }
//       });
//
// // if(isFormValid)
// // alert("successfully submitted");
// if (!isFormValid) alert("Please fill in all the required fields (indicated by *)");
//
//     // return isFormValid;
// });
// //End


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



$("#todo-sub").click(function(){
var output = $("#todo-data input").val();
$("#todo-out").append(`<ol>
  ${output}</br>
  </ol>`);
$("#todo-data input").val("");
});
