'use strict'

$('form input[type="submit"]').on('click', (event) => {
  event.preventDefault();
  const input = $('#number-choice').val();

  for (let i = 0; i <= input; i++) {
    if(i === 0){
     $('.js-results').append(`<div class="fizz-buzz-item">
    <span>0</span>
   </div>`)
   
    }
    else if (i % 3 === 0 && i % 5 === 0) {
      $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz">
      <span>fizzbuzz</span>
    </div>`);
    }
    else if (i % 5 === 0) {
      $('.js-results').append(`<div class="fizz-buzz-item buzz">
      <span>buzz</span>
    </div>`);
    }

    else if (i % 3 === 0) {
      $('.js-results').append(`<div class="fizz-buzz-item fizz">
      <span>fizz</span>
    </div>`);
    }
    else{
      $('.js-results').append(`<div class="fizz-buzz-item">
      <span>${i}</span>
    </div>`);
    }

  }
});