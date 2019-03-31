var point = 0;

$('.point').append("<p>"+ point +"</p>");

$('#prequestion').append(
  //Ting der ændres i innerHTML
  "<div class='prequestion'><h2>" + afrika[0].question + "</h2>"+
  "<div class='preWrap'><button value='one'>"+afrika[0].svar1+"</button><button value='two'>"+afrika[0].svar3+"</button>" +
  "<button value='three'>"+afrika[0].svar2+"</button><button value='four'>"+afrika[0].svar4+"</button>" +
  "</div></div>"
);

$('#prequestion button').click(function(){
if ($(this).val() == afrika[0].correct) {
  console.log("Right");
  $('#prequestion').append(
    //Ting der ændres i innerHTML -Success
    "<div class='success'><div><img src='img/flueben.png'></div><h1>YOU DID IT!</h2><br>" +
    "<p>Svaret kan uddybes her</p>"+
    "<div class='btn' id='successPre'>Næste Spørgsmål</div></div>"
  );
} else {
  console.log("Wrong");
  if ($('.error').hasClass("remove") == true) {

    $('.error').removeClass('remove');
  }else {
    $('#prequestion').append(
      //Ting der ændres i innerHTML -Error
      "<div class='error'><div><img src='img/kryds.png'></div><h1>YOU WRONG BOY!</h2><br>" +
      "<p>Svaret kan uddybes her</p>"+
      "<div id='fail' class='reload'>Prøv Igen</button></div>"
    );
  }


}
$('#fail').click(function(){
  console.log("clicked");
  point = point-5;
  $('.point').html("<p>"+ point +"</p>");
  $('.error').addClass('remove');
  $('.question').removeClass("open");
})
$('#successPre').click(function(){
  point = point+10;
  $('.point').html("<p>"+ point +"</p>");
  $('#question').addClass("transition");
  $('.question').removeClass("open");
  $('#question').removeClass("remove");
  $('.success').addClass('remove');

  $('#prequestion').addClass("remove");
  // setTimeout(function(){
  //   $('#question').addClass("remove");
  //   $('#question2').addClass("transition-in");
  // }, 1000)
  console.log(point);
})
})
