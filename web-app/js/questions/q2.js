
$('.point').html("<p>"+ point +"</p>");

$('#question2').append(
  //Ting der ændres i innerHTML
  "<div class='picwrap'><p>Find den her plante, tryk derefter på billedet</p>" +
  "<img src='img/" + afrika[2].img + ".jpg' alt='" + afrika[2].img + "'></div>"
  + "<div class='question'><h2>" + afrika[2].question + "</h2>"+
  "<div class='btnWrap'><button value='one'>"+afrika[2].svar1+"</button><button value='two'>"+afrika[2].svar2+"</button>" +
  "<button value='three'>"+afrika[2].svar3+"</button><button value='four'>"+afrika[2].svar4+"</button>" +
  "</div></div>"
);


$('#question2 .picwrap img').click(function(){
  var txt;
   var question = prompt("Hvad hedder denne plante?", "Svar her");
   if (question == null || question == "") {
     txt = "Husk at svar.";
        console.log("answer");
        alert(txt);
   } else if (question == "Tequila" || question == "tequila") {
        $('.question').toggleClass("open");
        $('.point').html('<p>'+point+'</p>')
   }else{
     txt = "forkert, prøv igen!";
     alert(txt);
   }

});



$('#question2 button').click(function(){
  //Definer hvilket af de fire svarmuligheder der er rigtige
  if ($(this).val() == afrika[2].correct) {
    console.log("Right");
    $('#question2').append(
      //Ting der ændres i innerHTML -Success
      "<div class='success'><div><img src='img/flueben.png'></div><h1>KORREKT!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<div class='btn' id='successTwo'>Næste Spørgsmål</div></div>"
    );
  } else {
    console.log("Wrong");
    if ($('.error').hasClass("remove") == true) {

      $('.error').removeClass('remove');
    }else {
      $('#question2').append(
        //Ting der ændres i innerHTML -Error
        "<div class='error'><div><img src='img/kryds.png'></div><h1>FORKERT!</h2><br>" +
        "<p>Svaret kan uddybes her</p>"+
        "<div id='failTwo' class='reload'>Prøv Igen</button></div>"
      );
    }
  }

  $('#failTwo').click(function(){
    console.log("clicked");
    point = point-5;
    $('.point').html("<p>"+ point +"</p>");
    $('.error').addClass('remove');
    $('.question').removeClass("open");
  })
  $('#successTwo').click(function(){
    point = point+10;
    $('.point').html("<p>"+ point +"</p>");
    $('#question').addClass("transition");
    $('.success').addClass('remove');
    $('.question').removeClass("open");
    $('#question3').removeClass("remove");
    $('#question2').addClass("remove");
    // setTimeout(function(){
    //   $('#question').addClass("remove");
    //   $('#question2').addClass("transition-in");
    // }, 1000)
    console.log(point);
  })
})
