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
function catAndMouse(mouse,cat1,cat2) {
   var resp = " ";
   var distCat1 = Math.abs(cat1 - mouse);
   var distCat2 = Math.abs(cat2 - mouse);
   if (distCat1 < distCat2) {
    resp = "cat1" 
    return resp;
   } else if (distCat1 > distCat2) {
    resp = "cat2" 
    return resp
   } else if (distCat2 === distCat1) {
     resp = "os gatos trombam e o rato foge"
     return resp;
   }
}

// Desafio 8
function fizzBuzz(arrayA) {
  var arrayB = [];
  var n = arrayA.length;
  for (var i = 0; i < n; i += 1) {
    if ((arrayA[i] % 3 == 0) && (arrayA[i] % 5 == 0)) {
      arrayB.push('fizzBuzz')
    } else if (arrayA[i] % 3 === 0) {
      arrayB.push('fizz');
    } else if (arrayA[i] % 5 === 0) {
      arrayB.push('buzz');
    } else {
      arrayB.push('bug!');
    }
  }
  return arrayB
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
