let searchForm = document.querySelector('.search-form');
let searchFormOpenButton = document.querySelector('.search-form-open-button');
let searchFormDateIn = searchForm.querySelector('[name="date-in"]');
let searchFormNumberAdults = searchForm.querySelector('[name="number-adults"]');
let searchFormNumberKids = searchForm.querySelector('[name="number-kids"]');

searchForm.classList.add('search-form--hide');

searchFormOpenButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-form--hide');
  searchFormDateIn.focus();
});

try {
  storage = localStorage.getItem('number-adults');
} catch (err) {
  isStorageSupport = false;
}

searchForm.addEventListener('submit', function() {
  if (searchFormNumberAdults.value || searchFormNumberKids.value) {
    if (isStorageSupport) {
      localStorage.setItem('number-adults', searchFormNumberAdults.value);
      localStorage.setItem('number-kids', searchFormNumberKids.value);
    }
  }
});
