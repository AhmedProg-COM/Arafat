$(document).ready(function() {
  $('.move-on-hover').on('mousemove', function(e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).css('top', (y - 100) + 'px');
    $(this).css('left', (x - 100) + 'px');
  });
  $('.move-on-hover').on('mouseout', function() {
    $(this).animate({ top: 0, left: 0 }, 500);
  });
});