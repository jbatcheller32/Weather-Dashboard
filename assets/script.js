var searchEl = document.querySelector('#citySearch');
var userInputEl = document.querySelector('#userSearch');
var listEl = document.querySelector('#search-results');
var citySearchBtnEl = document.querySelector('#searchBtn');
var currentDayWeatherEl = document.querySelector('#main-card');
var currentDayListEl = document.querySelector('#card-text');
var dayTwoCardEl = document.querySelector('#card-1');
var dayTwoListEl = document.querySelector('#card-text-1');
var dayThreeCardEl = document.querySelector('#card-2');
var dayThreeListEl = document.querySelector('#card-text-2');
var dayFourCardEl = document.querySelector('#card-3');
var dayFourListEl = document.querySelector('#card-text-3');
var dayFiveCardEl = document.querySelector('#card-4');
var dayFiveListEl = document.querySelector('#card-text-4');
var daySixCardEl = document.querySelector('#card-5');
var daySixListEl = document.querySelector('#card-text-5');
var recentSearches = [];


function getApi() {

    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?&lat=39.7392&lon=-104.9847&appid=a7bb081342ad5ee187c71f2c065ec901&units=imperial';


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            //the code belwo creates a title and the datr

            var cardTitle = document.createElement('h5');
            cardTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');

            var cardTwoTitle = document.createElement('h5');
            cardTwoTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');

            var cardThreeTitle = document.createElement('h5');
            cardThreeTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');

            var cardFourTitle = document.createElement('h5');
            cardFourTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');

            var cardFiveTitle = document.createElement('h5');
            cardFiveTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');

            var cardSixTitle = document.createElement('h5');
            cardSixTitle.textContent = data.city.name + ' ' + dayjs().format('MM/DD/YYYY');


            currentDayWeatherEl.appendChild(cardTitle);
            cardTitle.setAttribute("style", "font-size: 30px; margin-top: -19px;");

            dayTwoCardEl.appendChild(cardTwoTitle);
            cardTwoTitle.setAttribute("style", "font-size: 16px; margin-top: -19px;");

            dayThreeCardEl.appendChild(cardThreeTitle);
            cardThreeTitle.setAttribute("style", "font-size: 16px; margin-top: -19px;");

            dayFourCardEl.appendChild(cardFourTitle);
            cardFourTitle.setAttribute("style", "font-size: 16px; margin-top: -19px;");

            dayFiveCardEl.appendChild(cardFiveTitle);
            cardFiveTitle.setAttribute("style", "font-size: 16px; margin-top: -19px;");

            daySixCardEl.appendChild(cardSixTitle);
            cardSixTitle.setAttribute("style", "font-size: 16px; margin-top: -19px;");

            //all of these for loops retrieve the temp, wind, and humidity and append them to a list for each card. This seems like wayyyy more code than I would need, but 
            //I am not sure how to consolidate this, so this is what we get

            for (var i = 0; i < data.list.length; i++) {

                var icon = document.createElement('li');
                var temp = document.createElement('li');
                var wind = document.createElement('li');
                var humidity = document.createElement('li');

                icon.textContent = data.list[i].weather.icon;
                currentDayWeatherEl.appendChild(icon);
                icon.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp + " " + 'F';
                currentDayWeatherEl.appendChild(temp);
                temp.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                wind.textContent = 'Wind:' + " " + data.list[i].wind.speed + 'MPH';
                currentDayWeatherEl.appendChild(wind);
                wind.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                humidity.textContent = 'Humidity:' + " " + data.list[i].main.humidity;
                currentDayWeatherEl.appendChild(humidity);
                humidity.setAttribute("style", "list-style-type: none; margin-left: 5px; ");


                for (var i = 0; i < data.list.length; i++) {

                    var icon = document.createElement('li');
                    var temp = document.createElement('li');
                    var wind = document.createElement('li');
                    var humidity = document.createElement('li');

                    icon.textContent = data.list[i].weather.icon;
                    dayTwoCardEl.appendChild(icon);
                    icon.setAttribute("style", "list-style-type: none; margin-left: 5px; ");


                    temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp + " " + 'F';
                    dayTwoCardEl.appendChild(temp);
                    temp.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                    wind.textContent = 'Wind:' + " " + data.list[i].wind.speed + 'MPH';
                    dayTwoCardEl.appendChild(wind);
                    wind.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                    humidity.textContent = 'Humidity:' + " " + data.list[i].main.humidity;
                    dayTwoCardEl.appendChild(humidity);
                    humidity.setAttribute("style", "list-style-type: none; margin-left: 5px; ");


                    for (var i = 0; i < data.list.length; i++) {

                        var temp = document.createElement('li');
                        var wind = document.createElement('li');
                        var humidity = document.createElement('li');

                        temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp + " " + 'F';
                        dayThreeCardEl.appendChild(temp);
                        temp.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                        wind.textContent = 'Wind:' + " " + data.list[i].wind.speed + 'MPH';
                        dayThreeCardEl.appendChild(wind);
                        wind.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                        humidity.textContent = 'Humidity:' + " " + data.list[i].main.humidity;
                        dayThreeCardEl.appendChild(humidity);
                        humidity.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                        for (var i = 0; i < data.list.length; i++) {

                            var temp = document.createElement('li');
                            var wind = document.createElement('li');
                            var humidity = document.createElement('li');

                            temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp + " " + 'F';
                            dayFourCardEl.appendChild(temp);
                            temp.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                            wind.textContent = 'Wind:' + " " + data.list[i].wind.speed + 'MPH';
                            dayFourCardEl.appendChild(wind);
                            wind.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                            humidity.textContent = 'Humidity:' + " " + data.list[i].main.humidity;
                            dayFourCardEl.appendChild(humidity);
                            humidity.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                            for (var i = 0; i < data.list.length; i++) {

                                var temp = document.createElement('li');
                                var wind = document.createElement('li');
                                var humidity = document.createElement('li');

                                temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp + " " + 'F';
                                dayFiveCardEl.appendChild(temp);
                                temp.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                                wind.textContent = 'Wind:' + " " + data.list[i].wind.speed + 'MPH';
                                dayFiveCardEl.appendChild(wind);
                                wind.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                                humidity.textContent = 'Humidity:' + " " + data.list[i].main.humidity;
                                dayFiveCardEl.appendChild(humidity);
                                humidity.setAttribute("style", "list-style-type: none; margin-left: 5px; ");


                                for (var i = 0; i < data.list.length; i++) {

                                    var temp = document.createElement('li');
                                    var wind = document.createElement('li');
                                    var humidity = document.createElement('li');

                                    temp.textContent = 'Tempurature:' + " " + data.list[i].main.temp + " " + 'F';
                                    daySixCardEl.appendChild(temp);
                                    temp.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                                    wind.textContent = 'Wind:' + " " + data.list[i].wind.speed + 'MPH';
                                    daySixCardEl.appendChild(wind);
                                    wind.setAttribute("style", "list-style-type: none; margin-left: 5px; ");

                                    humidity.textContent = 'Humidity:' + " " + data.list[i].main.humidity;
                                    daySixCardEl.appendChild(humidity);
                                    humidity.setAttribute("style", "list-style-type: none; margin-left: 5px; ");
                                    return;

                                }

                            }

                        }

                    }
                }
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

getSearches();



