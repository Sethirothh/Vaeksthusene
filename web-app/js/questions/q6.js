$('.point').html("<p>"+ point +"</p>");

$('#question6').append(
  //Ting der ændres i innerHTML
  "<div class='picwrap'><p>Find den her plante, tryk derefter på billedet</p>" +
  "<img src='img/" + afrika[6].img + ".jpg' alt='" + afrika[6].img + "'></div>"
  + "<div class='question'><h2>" + afrika[6].question + "</h2>"+
  "<div class='btnWrap'><button value='one'>"+afrika[6].svar1+"</button><button value='two'>"+afrika[6].svar2+"</button>" +
  "<button value='three'>"+afrika[6].svar3+"</button><button value='four'>"+afrika[6].svar4+"</button>" +
  "</div></div>"
);


$('#question6 .picwrap img').click(function(){
  var txt;
   var question = prompt("Hvad hedder denne plante?", "Svar her");
   if (question == null || question == "") {
     txt = "Husk at svar.";
        console.log("answer");
        alert(txt);
   } else if (question == "Ris" || question == "ris") {
        $('.question').toggleClass("open");
        $('.point').html('<p>'+point+'</p>')
   }else{
     txt = "forkert, prøv igen!";
     alert(txt);
   }

});



$('#question6 button').click(function(){
  //Definer hvilket af de fire svarmuligheder der er rigtige
  if ($(this).val() == afrika[6].correct) {
    console.log("Right");
    $('#question6').append(
      //Ting der ændres i innerHTML -Success
      "<div class='success'><div><img src='img/flueben.png'></div><h1>KORREKT!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<div class='btn' id='successSix'>Næste Spørgsmål</div></div>"
    );
  } else {
    console.log("Wrong");
    if ($('.error').hasClass("remove") == true) {

      $('.error').removeClass('remove');
    }else {
      $('#question6').append(
        //Ting der ændres i innerHTML -Error
        "<div class='error'><div><img src='img/kryds.png'></div><h1>FORKERT!</h2><br>" +
        "<p>Svaret kan uddybes her</p>"+
        "<div id='failSix' class='reload'>Prøv Igen</button></div>"
      );
    }
  }

  $('#failSix').click(function(){
    console.log("clicked");
    point = point-fail;
    $('.point').html("<p>"+ point +"</p>");
    $('.error').addClass('remove');
    $('.question').removeClass("open");
  })
  $('#successSix').click(function(){
    point = point+success;
    $('.point').addClass('remove');
    $('.success').addClass('remove');
    $('.question').removeClass("open");
    $('#success').removeClass("remove");
    $('#question6').addClass("remove");
    $('#success').append(
      //Ting der ændres i innerHTML
      "<div class='pointSuccess'><div class='successLogo'><img src='img/foodlab-logo.png' alt='logo'></div>" +
      "<h2>"+ point +" point</h2><br>"+
      "<div id='brugere'></div>"
    );
    var bruger = [{navn:"Julia",point:"140"},{navn:"Camilla",point:"130"},{navn:"Catharina",point:"120"},{navn:"Asger",point:"110"},{navn:"Jesper",point:"100"}];

    for (var i = 0; i < bruger.length; i++) {
      $('#brugere').append(  "<div class='successEntry'><p>"+bruger[i].navn+"</p>"+
      "<p>"+bruger[i].point+"</p></div></div>")
    };

    // setTimeout(function(){
    //   $('#question').addClass("remove");
    //   $('#question2').addClass("transition-in");
    // }, 1000)
    console.log(point);
  })
})
