var searchEl = document.querySelector('#citySearch');
var citySearchBtnEl = document.querySelector('#searchBtn');



// button event listener to store display the search history on the page

citySearchBtnEl.addEventListener('click', function (event) {
    event.preventDefault();

var userSearchEl = document.querySelector('#userSearch').value;
localStorage.setItem('search', userSearchEl);

document.querySelector('#userSearch').value = '';

const storedSearchValue = localStorage.getItem('search');

var resultEl = document.querySelector('#search-results');
resultEl.textContent = storedSearchValue;


resultEl.setAttribute("style", "background-color: #5982a1; border: solid 1px; maring-top: 20px; width: 20%; list-style: none;");


});
