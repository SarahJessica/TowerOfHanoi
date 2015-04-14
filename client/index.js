'use strict';
$(document).ready(init);

var rings;
var moves = 0;

function init(){

  $('#start').click(gameStart);
  $('.tower').click(manipulate);
}

function clear(){
  $('.tower').find('.ringHolder').empty();
  moves = 0;
}

function gameStart() {
  clear();
  rings = $('#difficulty').val()*1;
  towerSetup();
}

function towerSetup(){

    for (var i = 1; i <= rings; i++){
      var $div = $('<div>');
      $div.attr('id', 'r' + i).addClass('ring');
      $div.text(i);
      console.log($div);
      $('#t1').find('.ringHolder').append($div);
      //debugger;
    }
    $('#t2').find('.ringHolder').addClass('empty');
    $('#t3').find('.ringHolder').addClass('empty');

}

// function ringStacking(){
//   $('.ring');
//   console.log("you're in the ring stacking func");
// }
//
function manipulate(){
  //debugger;
  if($('.selected').length === 0){
    $(this).addClass('selected');
    return;
  }
  if ($('.selected').length > 0){
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    }

    if (!$(this).hasClass('selected')){
    //if(($('.selected').text() < $(this).text()) || $(this).hasClass('empty')) {
        var selectedTopSize = $('.selected').find('.ringHolder').children().first().text();
        var newTopSize = $(this).find('.ringHolder').children().first().text();
      //  console.log("selectedTopSize:", selectedTopSize, "newTopSize:", newTopSize);
        if (selectedTopSize < newTopSize || newTopSize === '') {

        var tempId = $('.tower.selected .ring:first-child').attr('id');
        var tempClass = $('.tower.selected .ring:first-child').attr('class');
        var $div = $('<div>');
        $('.tower.selected .ring:first-child').remove();
        $div.addClass(tempClass).attr('id', tempId).text(tempId.split('').pop());
        $(this).find('.ringHolder').prepend($div);
    //    console.log((this).children);
        $('.selected').removeClass('selected');
//        winCheck();
    } else {
        $('.selected').removeClass('selected');
        }
    }
  }
}

// function winCheck(){
//   moves++;
//   if ($('#t3 .ringHolder').find('.ring').length()){
//     alert("you won!" + " \(" + moves + " moves\)");
//   }
// }
