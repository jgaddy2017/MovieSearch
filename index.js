

//call back function from Api.js/getSearchMovieInfo 
//takes data from api call and build out html to display data neatly
function displaySearchInfo(data, movieName){

    let titleMatch = false;
    let displayPrimaryMessage = "";
    displaySecondaryMessage = "";

    //goes though each result and find the correct movie that was searched
    //all other movie results get used as suggestions
    data.forEach(record => {
        if(record.original_title.toLowerCase() == movieName.toLowerCase()){
            displayPrimaryMessage = createPrimaryMessage(record);
            titleMatch = true;
            getGenreListFromRecord(record);
        }else{
            displaySecondaryMessage += createSecondaryMessage(record);
        }
    });
    if(titleMatch == false){
        displayPrimaryMessage = movieNotFound(data, movieName);
        $('.secondaryInfoType').html("");
    }else{
        let displaysecondaryInfoMessage = createSecondaryInfoMessage();
        $('.secondaryInfoType').html(displaysecondaryInfoMessage);
    }
    $('.primarySearch').html(displayPrimaryMessage);
    $('.secondarySearch').html(displaySecondaryMessage);
}

//handles when the user clicks the search button or hits enter
//handles if a blank was submitted
function handleSearchClick(){
    $('#searchForm').submit( function(event){
        event.preventDefault();
        const movieName = $('#movieName').val().trim();
        if(movieName == ""){
            DisplayBlankError();
        }else{
            AddToHistory(movieName);
            getSearchMovieInfo(movieName);
        }
    });
}

//handles when someone click one of the suggestions
//updates the history, search bar, and calls the api to search for movie information
function handleSecondaryClick(){
    $('.secondarySearch').on('click', 'div.secondaryPicks', function(event){
        let suggestedMovie = $(this).text().trim();
        AddToHistory(suggestedMovie);
        updateSearchBar(suggestedMovie);
        getSearchMovieInfo(suggestedMovie);
    });
}

//handles when an item in the history div is clicked
//updates the search bar and runs the api to get information on the movie
function handleHistoryClick(){
    $('.searchHistory').on('click', 'div.searchHistoryItem', function(event){
        let historyMovie = $(this).text().trim();
        updateSearchBar(historyMovie);
        getSearchMovieInfo(historyMovie);
    });
}

//this just makes sure that the search bar has the current search movie
function updateSearchBar(movieSearched){
    $('#movieName').val(movieSearched)
}

//this is where my openning remarks are being displayed
function displayOpenningMessage(){
    let openningMessage = createOpenningMessage();
    $('.primarySearch').html(openningMessage);
}




function RunApplication(){
    displayOpenningMessage();
    handleSearchClick();
    handleSecondaryClick();
    handleHistoryClick();
    handleShowHideHistory();
    getGenreKey();
    handleSuggestionType();

}

$(RunApplication());