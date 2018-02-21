//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIT() {
  $('.tasty').on('load', function(){
    
  })
}

function pressIt() {
  $('input').on('keydown', function(key){
    if(key.which == 71) {
      alert('press')
    }
  })
}



$(document).ready(function(){

// call functions here


});
