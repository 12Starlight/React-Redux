export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: "GET",
    url: 'http://api.giphy.com/v1/gifs/search?q=searchTerm&api_key=Dy6hYS1NAJpbifMPwfxXXA3VrXRrOGEd&limit=2'
  })
);





