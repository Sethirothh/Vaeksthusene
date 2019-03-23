let pic1 = "avocado-tree";
//q1 = Spørgsmål
//s1-4 = svarmulighederne
let q1 = "Spørgsmålet skal stå her";
let s1 = "Svar1";
let s2 = "Svar2";
let s3 = "Svar3";
let s4 = "Svar4";
//Næste side
let next = "second";

$('#question2').append(
  //Ting der ændres i innerHTML
  "<div class='picwrap'>" +
  "<img src='img/" + pic1 + ".jpg' alt='" + pic1 + "'></div>"
  + "<div class='question'><h2>" + q1 + "</h2>"+
  "<button value='one'>"+s1+"</button><button value='two'>"+s2+"</button>" +
  "<button value='three'>"+s3+"</button><button value='four'>"+s4+"</button>" +
  "</div>"
);
$('h2').click(function(){
      $('.question').toggleClass("open");
});
$('button').click(function(){
  //Definer hvilket af de fire svarmuligheder der er rigtige
  if ($(this).val() == "one") {
    console.log("Right");
    $('#question2').append(
      //Ting der ændres i innerHTML -Success
      "<div class='success'><h1>YOU DID IT!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<a href='"+next+".html' class='btnLink'>Næste Spørgsmål</a></div>"
    );
  } else {
    console.log("Wrong");
    $('#question').append(
      //Ting der ændres i innerHTML -Error
      "<div class='error'><h1>YOU WRONG BOY!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<button class='reload'>Prøv Igen</button></div>"
    );

    $('.reload').click(function(){
      location.reload(true);
    });
  }
  console.log($(this).val())
})
