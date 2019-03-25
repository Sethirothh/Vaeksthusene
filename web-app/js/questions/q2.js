//Næste side
$('#question2').append(
  //Ting der ændres i innerHTML
  "<div class='picwrap'><p>Find den her plante, tryk derefter på billedet</p>" +
  "<img src='img/" + afrika[1].img + ".jpg' alt='" + afrika[1].img + "'></div>"
  + "<div class='question'><h2>" + afrika[1].question + "</h2>"+
  "<button value='one'>"+afrika[1].svar1+"</button><button value='two'>"+afrika[1].svar3+"</button>" +
  "<button value='three'>"+afrika[1].svar2+"</button><button value='four'>"+afrika[1].svar4+"</button>" +
  "</div>"
);
$('#question2 .picwrap img').click(function(){

   var question = prompt("Hvor er den her plante fra?", "Afrika");
   if (question == null || question == "") {
     txt = "Husk at svar.";
     alert(txt);

        console.log("answer");
   } else if (question == "Asien") {
        $('.question').toggleClass("open");
        txt = "Good Job! :D ";
        point = point + 5;
        console.log(point);
        $('.point').html('<p>'+ point +'</p>')
   }else{
     txt = "forkert, prøv igen!";
     alert(txt);
   }

});
$('#question2 button').click(function(){
  //Definer hvilket af de fire svarmuligheder der er rigtige
  if ($(this).val() == "one") {
    console.log("Right");
    $('#question').append(
      //Ting der ændres i innerHTML -Success
      "<div class='success'><h1>YOU DID IT!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"
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
})
