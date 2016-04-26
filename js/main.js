var $candies = $('.candies');
var $notcandies = $('.notcandies');
var $candyghost = $('.candyghost');
var $candyguide = $('.candyguide');

// $candyguide.on('click', function (e) {
//   $(this).toggleClass('is-clicked');
// });
$candyguide.waypoint(function (direction) {
  if (direction == 'down') {
    $candyguide.addClass('candyguideappears');

  } else {
    $candyguide.removeClass('candyguideappears');
  }
}, {offset: '90%'});

$candies.waypoint(function (direction) {
  if (direction == 'down') {
    $candies.addClass('opacity');
  } else {
    $candies.removeClass('opacity');
  }
}, {offset: '30%'});

$notcandies.waypoint(function (direction) {
  if (direction == 'down') {
    $notcandies.addClass('opacity');

  } else {
    $notcandies.removeClass('opacity');
  }
}, {offset: '30%'});

$candyghost.waypoint(function (direction) {
  if (direction == 'down') {
    $candyghost.addClass('candyghostappears');

  } else {
    $candyghost.removeClass('candyghostappears');
  }
}, {offset: '90%'});
