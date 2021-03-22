

let searchHistoryArr = [];
let historyShowing = false;


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

function AddToHistory(lastSearch){

    let checkHistory = searchHistoryArr.find(item => item.toLowerCase() == lastSearch.toLowerCase());
    if(checkHistory == undefined){
        searchHistoryArr.push(lastSearch);
    }


    //searchHistoryArr.push(lastSearch);
    displaySearchHistory(searchHistoryArr);
}


function displayHistoryDiv(){
    $('#searchInfoDiv').css("width", "75%");
    $('#searchHistoryDiv').removeClass('hideDiv');
    $('#historyButton').text('Hide History');
}
function hideHistoryDiv(){
    $('#searchHistoryDiv').addClass('hideDiv');
    $('#searchInfoDiv').css("width", "100%");
    $('#historyButton').text('Show History');
}