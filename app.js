var YouTubeURL = 'https://www.googleapis.com/youtube/v3/search';

// GET, POST, PUT, DELETE, ...
//
// GET - getting information /users, /users/123
// POST - creating objects /users

// PUT - updating objects /users/123
// DELETE - deleting object /users/123

function functionWithCallback(text, callback) {
  setTimeout(function() {
    callback()
  }, 2000)
}

functionWithCallback('test', function() {
  console.log('hello from the callback')
})


function getDataFromApi(searchTerm, callback) {
  var query = {
    // s: searchTerm,
    // r: 'json',
    part: 'snippet',
    key: 'AIzaSyDMCn5kEGgCPd3XIx0nFmyX5jY23qRH-QQ',
    q: searchTerm
  }
  $.getJSON(YouTubeURL, query, callback);
}

function displaySearchData(data) {
  var resultElement = '';
  console.log(data)
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<a href="https://youtu.be/' + item.id.videoId + '"><img src="' + 
     item.snippet.thumbnails.medium.url + '"></a>';
     console.log(resultElement);
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displaySearchData);
  });
}

$(function(){watchSubmit();});
