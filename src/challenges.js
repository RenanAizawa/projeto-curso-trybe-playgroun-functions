// Desafio 1
function compareTrue(t1,t2) {
  if(t1 === true && t2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  var calculo = (base * height) / 2
  return calculo
}

// Desafio 3
function splitSentence(stringN) {
  var arrayR = [];
  arrayR = stringN.split(" ");
  return arrayR
}

// Desafio 4
function concatName(arrayN) {
  var arrayR = " ";
  var ultString = arrayN.length - 1;
  arrayR = arrayN[ultString] + ", " + arrayN[0];
  return arrayR
}

// Desafio 5
function footballPoints(wins,ties) {
  var totalPontos = (wins * 3) + ( ties * 1);
  return totalPontos;
}

// Desafio 6
function highestCount(numN) {
  var maior = numN[0];
  var contL = numN.length;
  var contM = 0;
  for(var i = 0; i < contL; i += 1) {
    if(maior < numN[i]) {
      maior = numN[i];
    }
  }
  for(var i = 0; i < contL; i += 1) {
    if(maior === numN[i]) {
      contM += 1
    }
  }  
  return contM 
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
