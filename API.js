
let genreKey = null;
function setGenreKey(data){
    console.log(data);
    genreKey = data;
}


function getSearchMovieInfo(movieName){
    let searchingMessage = createSearchingMessage();
    $('.primarySearch').html(searchingMessage);

    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myAPIKey}&language=en-US&query=${movieName}&page=1&include_adult=false`;
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: searchUrl,
        success: function(data){
            //console.log(Object.keys(data.results));
            console.log(data.results);
            displaySearchInfo(data.results, movieName);
        }
    });
}

function getGenreKey(){
    let searchUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${myAPIKey}&language=en-US`;
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: searchUrl,
        success: function(data){
            setGenreKey(data);
        }
    });
}

function searchForGenreSuggestions(genreIds){
    let searchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${myAPIKey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${genreIds}`;
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: searchUrl,
        success: function(data){
            createGenreSuggestions(data);
        }
    })
}