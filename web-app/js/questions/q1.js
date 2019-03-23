let pic1 = "avocado-tree";
let q1 = "Spørgsmålet skal stå her";
$('#question').append(
  "<div class='picwrap'>" +
  "<img src='img/" + pic1 + ".jpg' alt='" + pic1 + "'></div>"
  + "<div class='question'><h2>" + q1 + "</h2>"+
  "<button value='one'>Svar1</button><button value='two'>Svar2</button>" +
  "<button value='three'>Svar3</button><button value='four'>Svar4</button>" +
  "</div>"
);
$('h2').click(function(){
      $('.question').toggleClass("open");
});
$('button').click(function(){
  if ($(this).val() == "one") {
    console.log("Right");
    $('#question').append(
      "<div class='success'><h1>YOU DID IT!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<a href='second.html' class='btnLink'>Næste Spørgsmål</a></div>"
    );
  } else {
    console.log("Wrong");
    $('#question').append(
      "<div class='error'><h1>YOU WRONG BOY!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<a href='first.html' class='btnLink'>Prøv Igen</a></div>"
    );
  }
  console.log($(this).val())
})
