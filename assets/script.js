var searchEl = document.querySelector('#citySearch');
var userInputEl = document.querySelector('#userSearch');
var listEl = document.querySelector('#search-results');
var citySearchBtnEl = document.querySelector('#searchBtn');
var currentDayWeatherEl = document.querySelector('#card');
var currentDayListEl = document.querySelector('#card-text');
var recentSearches = [];


function getApi() {

    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.7392&lon=-104.9847&appid=a7bb081342ad5ee187c71f2c065ec901';

   
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var cardTitle = document.createElement('h5');
            cardTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');

            currentDayWeatherEl.appendChild(cardTitle);
            cardTitle.setAttribute("style", "font-size: 30px; margin-top: -19px;");

            for (var i = 0; i < data.list.length; i++) {

                var temp = document.createElement('li');
                

                temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp;
                currentDayWeatherEl.appendChild(temp);
                temp.setAttribute("style", "list-style-type: none; margin-left: 5px; "); 
                return; 

            }
        });

};


citySearchBtnEl.addEventListener('click', getApi);





// the function below creates the li's for the search history to be displayed on the page

function renderHistory() {

    userInputEl.innerHTML = "";


    for (var i = 0; i < recentSearches.length; i++)
        var searches = recentSearches[i];

    var li = document.createElement("li");
    li.textContent = searches;
    li.setAttribute("index", i);

    listEl.appendChild(li);
    li.setAttribute("style", " width: 20%; margin-top: 20px; background-color: #76848f; color: #fff; border-radius: 5px; text-align: center;");

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

//getSearches();



