'use strict';
$(document).ready(init);

var rings;

function init(){

  $('#start').click(gameStart);
  $('.tower').click(manipulate);
}

function clear(){
  $('.tower').empty();
}

function gameStart() {
  clear();
  rings = $('#difficulty').val()*1;
  towerSetup();
}

function towerSetup(){

    for (var i = 1; i <= rings; i++){
      var $div = $('<div>');
      $div.attr('id', i).addClass('ring');
      $div.text(i);
      console.log($div);
      $('#t1').append($div);
      //debugger;
    }
    $('#t2').addClass('empty');
    $('#t3').addClass('empty');

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
        var selectedTopSize = $('.selected').children().first().text();
        var newTopSize = $(this).children().first().text();
        console.log("selectedTopSize:", selectedTopSize, "newTopSize:", newTopSize);
        if (selectedTopSize < newTopSize || newTopSize === '') {

        var tempId = $('.tower.selected div:first-child').attr('id');
        var tempClass = $('.tower.selected div:first-child').attr('class');
        var $div = $('<div>');
        $('.tower.selected div:first-child').remove();
        $div.addClass(tempClass).attr('id', tempId).text(tempId);
        $(this).prepend($div);
    //    console.log((this).children);
        $('.selected').removeClass('selected');
    } else {
        $('.selected').removeClass('selected');
        }
    }
  }
}
