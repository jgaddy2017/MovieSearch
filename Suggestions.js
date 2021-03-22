let displaySecondaryMessage = "";
let keepGenreList = "";

function handleSuggestionType(){

   $(document).on('change', '#suggestionType' , function(){
        console.log("suggestion Change");

        let valueSelected = this.value;
        if(valueSelected == 'name'){
            reDisplaySecondaryMessage();
        }else{
            displayGenres();
        }
    });
   
}

function getGenreListFromRecord(record){
    console.log("my current record" + record);
    keepGenreList = record.genre_ids;
}
function reDisplaySecondaryMessage(){
    $('.secondarySearch').html(displaySecondaryMessage);
}
function displayGenres(){
    console.log(keepGenreList);
    let combinedGenreList = keepGenreList.join('%2C');
    searchForGenreSuggestions(combinedGenreList);
}

function createGenreSuggestions(data){
    let suggestionString = "";
    console.log(data);
    data.results.forEach(record => {
        suggestionString += createSecondaryMessage(record);
    });

    $('.secondarySearch').html(suggestionString);
}