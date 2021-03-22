

function DisplayBlankError(){
    let blankStatement = `<div class="blankSearchDiv infoFont">
                            <p class="blankSearchHeader headerFont">Sorry!</p>
                            <p class="blankSearchInfo infoFont">Sorry, looks like you have entered a blank movie title!</p>
                            <p class="blankSearchInfo infoFont">Please, enter a movie name and try your search again!</p>
                        </div>`;
    $('.primarySearch').html(blankStatement);
}

function displaySearchHistory(searchHistoryArr){
    searchHistoryArr = searchHistoryArr.map(item => {
        return `<div class="searchHistoryItem infoFont">${item}</div>`;
    });
    searchHistoryArr = searchHistoryArr.join(' ');

    $('.searchHistory').html(searchHistoryArr);
}


function createPrimaryMessage(record){
    let mapGenres = record.genre_ids.map((item) => {
        let currentGenre = genreKey.genres.find(genre => { 
            if(genre.id == item){
                return genre.name;
            }
        });
        return `<p class="primaryStatedInfo infoFont">${currentGenre.name}</p>`;
    });
    mapGenres = mapGenres.join(' ');
    console.log('map Genres = ' + mapGenres);

    return `<div>
                <p class="primaryMovieTitle headerFont">${record.original_title}</h3>
                <p class="primaryOverviewHeader headerFont">Overview</p>
                <p class="primaryOverviewInfo infoFont">${record.overview}<p>
                <div class="primaryInfoDivContainer">
                <div class="primaryInfoDiv">
                    <p class="primaryInfoheader headerFont">Release Date</p>
                    <p class="primaryStatedInfo infoFont">${record.release_date}</p>
                </div>
                <div class="primaryInfoDiv">
                    <p class="primaryInfoheader headerFont">Vote Average</p>
                    <p class="primaryStatedInfo infoFont">${record.vote_average} Out Of 10</p>
                </div>
                <div class="primaryInfoDiv">
                    <p class="primaryInfoheader headerFont">Vote Count</p>
                    <p class="primaryStatedInfo infoFont">${record.vote_count} Votes</p>
                </div>
                <div class="primaryInfoDiv">
                    <p class="primaryInfoheader headerFont">Genres</p>
                    ${mapGenres}
                </div>
                </div>
            </div>`;
}


function createSecondaryMessage(record){
    return `<div class = "secondaryPicks">
                ${record.original_title}
            </div>`;
}

function createSearchingMessage(){
    return `<div class = "searchingMessage infoFont">
                Please be patient! Searching for your movie now.
            </div>`;
        }

function createOpenningMessage(){
    return `<div class = "welcomeDiv">
                <p class="welcomeHeader headerFont">Welcome</p>
                <p class="welcomeInfo infoFont">Welcome to Movie Search. This website will give you information about movies.</p>
                <p class="welcomeInfo infoFont">To inquire about a specific movie, please type the title of the movie in the search bar and proceed to click the search button.</p>
                <p class="welcomeInfo infoFont">Once the movie if found, information and suggestions will be displayed.</p>
                <p class="welcomeInfo infoFont">Your search history key is located at the top right of the page. Each movie title will be displayed only once.</p>
                <p class="welcomeHeader headerFont">Please Enjoy!</p>
            </div>`;
}


function movieNotFound(data, movieName){
    let movieNotFoundMessage = "";
    if(jQuery.isEmptyObject(data)){
        movieNotFoundMessage = createEmptyNotFound(movieName);
    }else{
        movieNotFoundMessage = createSuggestionNotFound(movieName);
    }
    return movieNotFoundMessage;
}

function createEmptyNotFound(movieName){
    return `<div class="primarySorryDiv">
                <p class="primarySorryHeader headerFont">Sorry!</p>
                <p class="primarySorryInfo infoFont">${movieName} could not be found.</p>
            </div>`;
}
function createSuggestionNotFound(movieName){
    return `<div class="primarySorryDiv">
                <p class="primarySorryHeader headerFont">Sorry!</p>
                <p class="primarySorryInfo infoFont">${movieName} could not be found.</p>
                <p class="primarySorryInfo infoFont">Please check below for possible suggestions.</p>
                <p class="primarySorryHeader headerFont">Suggestions Below</p>
            </div>`;
}

function createSecondaryInfoMessage(){

    let infoMessage = `<div class="SecondaryDiv">
                            <p class="suggestionHeader headerFont">Suggestions</p>
                            <p class="suggestionInfo infoFont">Suggestions Based off of: </p>
                            <div class="suggestionSelect">
                                <select name="suggestionType" id="suggestionType">
                                    <option value="name">Name</option>
                                    <option value="genres">Genres</option>
                                </select>
                            </div>
                        </div> 
                        `;

    return infoMessage;


}