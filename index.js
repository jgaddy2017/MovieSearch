

let baseURL = 'https://api.themoviedb.org/3/movie/550?api_key=31f2f00c94350506de63cd3ad7d7e388';
//let displaySecondaryMessage = "";


function displaySearchInfo(data, movieName){

    let titleMatch = false;
    let displayPrimaryMessage = "";
    displaySecondaryMessage = "";

    
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
        //displayPrimaryMessage = "Sorry could not find the movie you where looking for. Below may have a suggestion";
        displayPrimaryMessage = movieNotFound(data, movieName);
        $('.secondaryInfoType').html("");
    }else{
        let displaysecondaryInfoMessage = createSecondaryInfoMessage();
        $('.secondaryInfoType').html(displaysecondaryInfoMessage);
    }
    $('.primarySearch').html(displayPrimaryMessage);
    $('.secondarySearch').html(displaySecondaryMessage);
}

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

function handleSecondaryClick(){
    $('.secondarySearch').on('click', 'div.secondaryPicks', function(event){
        let suggestedMovie = $(this).text().trim();
        AddToHistory(suggestedMovie);
        updateSearchBar(suggestedMovie);
        getSearchMovieInfo(suggestedMovie);
    });
}

function handleHistoryClick(){
    $('.searchHistory').on('click', 'div.searchHistoryItem', function(event){
        let historyMovie = $(this).text().trim();
        updateSearchBar(historyMovie);
        getSearchMovieInfo(historyMovie);
    });
}

function updateSearchBar(movieSearched){
    $('#movieName').val(movieSearched)
}

function displayOpenningMessage(){
    let openningMessage = createOpenningMessage();
    $('.primarySearch').html(openningMessage);
}
/*
function handleShowHideHistory(){
    $('#historyButton').on('click', function(event){
        event.preventDefault();
        if(historyShowing == false){
            displayHistoryDiv();
            historyShowing = true;
        }else{
            hideHistoryDiv();
            historyShowing = false;
        }
    });
}
*/


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