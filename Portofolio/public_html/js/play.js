// play with the ball
$a = $('.point.a');
$('.container').on('click', function(e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;
  var aw = $a.width();
  var ah = $a.height();
  $('.point.a').stop().animate({top:y-ah/2, left:x-aw/2}, 500, 'linear');
});


