$(function() {
  // Lifted from http://jackosborne.co.uk/
  var longest = 0, $wordcounts;

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

$(window).on('hashchange', function(e) {
  var $target = $('.switcher a[href="' + window.location.hash + '"]'),
      $active = $target.siblings('.active');

  if (!$target.length || !$active.length) return;

  var $active_content = $($active[0].hash);

  $active.removeClass('active');
  $target.addClass('active');

  $active_content.removeClass('active');
  $($target[0].hash).addClass('active');
});
$(document).ready(function() {
  $(this).trigger('hashchange');
});
$(document).on('click', '.switcher a', function(e) {
  e.preventDefault();
  window.location.hash = this.hash;
});
