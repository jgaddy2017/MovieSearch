
/*
function runAPI2(){
    console.log("hello world");
    let url = baseURL;
    fetch(url)
    .then((data)=>{
        console.log(data.json);
        return data;
    })
    .catch(function(err){
        alert(err);
    });
}
*/
/*
function runAPI(){
    let returnData =  '';
    $.ajax({
        dataType: 'json',
        type: 'GET',
        //crossDomain: true,
        url: baseURL,
        success: function(data){
            //return JSON.parse(data);
            //return data[0];
            //return "hey";
            //console.log(Object.keys(data));
            //console.log(data.original_title)
            //return data;

        },
        async: false
    }).done(function(data){
        returnData = data;
        //return data;
    });
    //console.log(Object.keys(returnData));
    return returnData;  
}
*/
/*
function runAPI(){
    return new Promise((resolve, reject) => {
        $.ajax({
            dataType: 'json',
            type: 'GET',
            crossDomain: true,
            url: baseURL,
            success: function(data){
                console.log(Object.keys(data));
                resolve(data);
            },
            error: function(error){
                reject(error);
            }
        })
    });
}
*/
/*
function findInformation(){
    let apiData = runAPI();
    console.log(Object.keys(apiData));

    //console.log(apiData[responseJSON]);
    //console.log(JSON.parse(apiData.responseJSON));
    console.log('movie title' + apiData.original_title);
    apiData.genres.forEach((item) => { console.log( 'movie Genres' + item.name) });
    //console.log(apiData.genres[0]);
    console.log('movie popularity ' + apiData.popularity);
}

*/

/*
    $('#movieTitle').html("Movie Title = " + data[0].original_title);
    $('#movieOverview').html("Movie Overview = " + data[0].overview);
    $('#moviePopularity').html("Movie Popularity = " + data[0].popularity);
    $('#movieReleaseDate').html("Movie Release Date = " + data[0].release_date);
    $('#movieVoteAvg').html("Movie Vote Average = " + data[0].vote_average);



*/

/*

    <h3 id="movieTitle"></h3>
    <p id="movieOverview"></p>
    <p id="moviePopularity"></p>
    <p id="movieReleaseDate"></p>
    <p id="movieVoteAvg"></p>
*/

/*
function getSearchMovieInfo(movieName){
    let searchingMessage = createSearchingMessage();
    $('.primarySearch').html(searchingMessage);

    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movieName}&page=1&include_adult=false`;
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: searchUrl,
        success: function(data){
            console.log(Object.keys(data.results));
            displaySearchInfo(data.results, movieName);
        }
    });
}
*/

/*
this works------------------------------------
function runAPI(){
    let myCall = null;
    $.ajax({
        dataType: 'json',
        type: 'GET',
        //crossDomain: true,
        url: baseURL,
        success: function(data){
            //console.log(Object.keys(data));
            //return data;
            myCall = data;
        },
        async: false
    });
    return myCall;
}
*/

/*
function onEnterPress(){
    $(document).on('keypress',function(e) {
        event.preventDefault();
        if(e.which == 13) {
            const movieName = $('#movieName').val();
            if(movieName == ""){
                DisplayBlankError();
            }else{
                AddToHistory(movieName);
                getSearchMovieInfo(movieName);
            }
        }
    });
}
*/

    /*
    $('#movieSearch').on('click', function(event){
        event.preventDefault();
        const movieName = $('#movieName').val();
        if(movieName == ""){
            DisplayBlankError();
        }else{
            AddToHistory(movieName);
            getSearchMovieInfo(movieName);
        }
    });
    */

    /*

    console.log("current record" + record);
    let currentSelectGenres = record.genre_ids.map((item) => {
        let currentGenre = genreKey.genres.find(genre => { 
            if(genre.id == item){
                return genre.name;
            }
        });
        return `<option value="${currentGenre.name}">${currentGenre.name}</option>`;
    });


                                <p class="suggestionInfo infoFont hideDiv">. Related genres: </p>
                            <div class="suggestionGenres hideDiv">
                                <select name="suggestionGenres" id="suggestionGenres">
                                    <option value=""></option>
                                    ${currentSelectGenres}
                                </select>
                            </div>

    */


        /*
    $('#suggestionType').change(function(){
        console.log("suggestion Change");
        let optionSelected = $("option:selected", this);
        let valueSelected = this.value;
        if(valueSelected == 'name'){
            reDisplaySecondaryMessage();
        }else{
            displayGenres();
        }
    });
    */