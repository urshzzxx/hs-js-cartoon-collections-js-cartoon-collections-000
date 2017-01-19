function dwarfRollCall(dwarves) {

  var dwarfNames = '';

  for (let i = 0; i < dwarves.length; i++)
  {
    dwarfNames += (i + 1) + '. ' + dwarves[i] + ' ';
  }
  return dwarfNames;
}


function summonCaptainPlanet(planeteerCalls){
  var loudCalls = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    loudCalls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return loudCalls;
}



 function longPlaneteerCalls(words) {
   var longCalls = false;
   for (var i = 0; i < words.length; i++) {
     if (words[i].length > 4){
       longCalls = true;
     }
   }
   return longCalls
}


function findTheCheese(foods) {
  var yummyCheeses = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++){
    for (var j = 0; j < yummyCheeses.length; j++){
      if (foods[i] === yummyCheeses[j]){
        return foods[i]
      }
    }
  }
  return "no cheese!"
}
