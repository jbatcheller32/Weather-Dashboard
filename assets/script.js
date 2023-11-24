var searchEl = document.querySelector('#citySearch');
var userInputEl = document.querySelector('#userSearch');
var listEl = document.querySelector('#search-results');
var citySearchBtnEl = document.querySelector('#searchBtn');
var recentSearches = [];


// the function below creates the li's for the search history to be displayed on the page

function renderHistory() {

    userInputEl.innerHTML = "";


    for (var i = 0; i < recentSearches.length; i++)
        var searches = recentSearches[i];

    var li = document.createElement("li");
    li.textContent = searches;
    li.setAttribute("index", i);

    listEl.appendChild(li);

}

// this function retrieves the stored search history from local storage

function getSearches() {

    var storedSearches = JSON.parse(localStorage.getItem("searches"));

    if (storedSearches !== null) {
        recentSearches = storedSearches;
    }

    renderHistory();
}


// this function is setting the searches to local storage and setting them to the array of recent searches


function storeSearches() {

    localStorage.setItem("searches", JSON.stringify(recentSearches));
}

// button event listener to store display the search history on the page

citySearchBtnEl.addEventListener('click', function (event) {
    event.preventDefault();

    var searchText = userInputEl.value.trim();

    if (searchText === "") {
        return;
    }

    recentSearches.push(searchText);
    userInputEl.value = "";

    storeSearches();
    renderHistory();



});

getSearches();



