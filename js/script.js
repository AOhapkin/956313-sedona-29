let searchForm = document.querySelector('.search-form');
let searchFormOpenButton = document.querySelector('.search-form-open-button');
let searchFormDateIn = searchForm.querySelector('[name="date-in"]');
let searchFormDateOut = searchForm.querySelector('[name="date-out"]');
let searchFormNumberAdults = searchForm.querySelector('[name="number-adults"]');
let searchFormNumberKids = searchForm.querySelector('[name="number-kids"]');


// форма убрана по умолчанию
searchForm.classList.add('search-form--hide');


searchFormOpenButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-form--hide');

  // searchFormDateIn.focus();
});
