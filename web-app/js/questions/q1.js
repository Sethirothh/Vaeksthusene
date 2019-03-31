
$('.point').html("<p>"+ point +"</p>");

$('#question').append(
  //Ting der ændres i innerHTML
  "<div class='picwrap'><p>Find den her plante, tryk derefter på billedet</p>" +
  "<img src='img/" + afrika[1].img + ".jpg' alt='" + afrika[1].img + "'></div>"
  + "<div class='question'><h2>" + afrika[1].question + "</h2>"+
  "<button value='one'>"+afrika[1].svar1+"</button><button value='two'>"+afrika[1].svar2+"</button>" +
  "<button value='three'>"+afrika[1].svar3+"</button><button value='four'>"+afrika[1].svar4+"</button>" +
  "</div>"
);
$('#question .picwrap img').click(function(){
  var txt;
   var question = prompt("Hvor er den her plante fra?", "Afrika");
   if (question == null || question == "") {
     txt = "Husk at svar.";
        console.log("answer");
        alert(txt);
   } else if (question == "Asien" || question == "asien") {
        $('.question').toggleClass("open");
        $('.point').html('<p>'+point+'</p>')
   }else{
     txt = "forkert, prøv igen!";
     alert(txt);
   }

});
$('#question button').click(function(){
  //Definer hvilket af de fire svarmuligheder der er rigtige
  if ($(this).val() == afrika[1].correct) {
    console.log("Right");
    $('#question').append(
      //Ting der ændres i innerHTML -Success
      "<div class='success'><div><img src='img/flueben.png'></div><h1>KORREKT!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<div class='btn' id='successOne'>Næste Spørgsmål</div></div>"
    );
  } else {
    console.log("Wrong");
    if ($('.error').hasClass("remove") == true) {

      $('.error').removeClass('remove');
    }else {
      $('#question').append(
        //Ting der ændres i innerHTML -Error
        "<div class='error'><div><img src='img/kryds.png'></div><h1>FORKERT!</h2><br>" +
        "<p>Svaret kan uddybes her</p>"+
        "<div id='failOne' class='reload'>Prøv Igen</button></div>"
      );
    }


  }
  $('#failOne').click(function(){
    console.log("clicked");
    point = point-5;
      $('.point').empty();
    $('.point').append("<p>"+ point +"</p>");
    $('.error').addClass('remove');
    $('.question').removeClass("open");
  })
  $('#successOne').click(function(){
    point = point+10;
    $('.point').html("<p>"+ point +"</p>");
    $('#question').addClass("transition");
    $('.success').addClass('remove');
    $('.question').removeClass("open");
    $('#question2').removeClass("remove");
    $('#question').addClass("remove");
    // setTimeout(function(){
    //   $('#question').addClass("remove");
    //   $('#question2').addClass("transition-in");
    // }, 1000)
    console.log(point);
  })
})
