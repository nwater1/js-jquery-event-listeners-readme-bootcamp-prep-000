//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIT() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key){
    if(key.which == 71) {
      alert('press')
    }
  })
}

function sumbitIt() {
  $('form').on('sumbit', function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here


});
