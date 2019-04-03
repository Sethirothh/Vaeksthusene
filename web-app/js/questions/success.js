var bruger = [{navn:"Julia",point:"140"},{navn:"Camilla",point:"130"},{navn:"Catharina",point:"120"},{navn:"Asger",point:"110"},{navn:"Jesper",point:"100"}];
var point = point;

for (var i = 0; i < bruger.length; i++) {
  $('#brugere').append(  "<div class='successEntry'><p>"+bruger[i].navn+"</p>"+
  "<p>"+bruger[i].point+"</p></div></div>")
};
