'use strict';

// $('.thumbnail').on('click', function() {
//   const newHero = $(this).html();
//   console.log(newHero);
//   $('.hero').html(newHero);
// });

$('.thumbnail').on('click', (event) => {
  const newHero = $(event.currentTarget).html();
  console.log(newHero);
  $('.hero').html(newHero);
});