let aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=201d090c9cceacfc8931df89310ebfbb&units=metric";
  $(document).ready(function() {
  // get the weather data
  fetch(aarhus).then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data); // show what's in the json
  var icon = "img/vejr/" + data.weather[0].icon + ".svg";
  $('header').css({"background-image": "url(" + icon + ")"})
  .append("<h1>"+data.main.temp.toFixed(2)+"</h1>"
);

  }).catch(err => {
    // Do something for an error here
    console.log(err);
  });
}); // document ready end
