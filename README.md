# dojo_react_imdb
A react dojo using IMDB API

for initial config use reference:

https://www.linkedin.com/pulse/using-gulp-browserify-babel-react-mohamad-aswad-azhar?articleId=8012003510090294562


$.ajax({
    url: 'http://imdb.wemakesites.net/api/search?' + $.param({q: "arnold"}),
    headers: {
        ContentType: 'application/x-www-form-urlencoded'
    },
    crossDomain: true,
    data: {
        api_key: 'e9f5e114-a4cb-48f0-8498-b73ed6be7ccc'
    },
    dataType: 'jsonp',
    success: function(data) {
        console.log(data);
    }
});