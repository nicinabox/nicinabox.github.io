$(function() {
  // Lifted from http://jackosborne.co.uk/
  var longest = 0, $wordcounts,

  $wordcounts = $('[data-words]').each(function () {
    var count = +$(this).data('words');

    if (count > longest) {
      longest = count;
    }
  });

  longest = 100 / longest;

  $wordcounts.each(function() {
   var $el = $(this),
       $bar = $el.find('.bar'),
       count = +$el.data('words'),
       width = (longest * count) + '%';

   $bar.width(width);
  });
});
