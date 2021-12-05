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
function encode(code) {
  var text = "";
  for (var i in code) {
    switch (code[i]) {
      case "a":
        var o = code[i].replace ("a", "1");
        text += o;
        break;
      case "e":
        var o = code[i].replace ("e", "2");
        text += o;
        break;
      case "i":
        var o = code[i].replace ("i", "3");
        text += o;
        break;
      case "o":
        var o = code[i].replace ("o", "4");
        text += o;
        break;
      case "u":
        var o = code[i].replace ("u", "5");
        text += o;
        break;
      default:
        text += code[i];  
    }
  }
  return text
}
function decode(code) {
  var text = "";
  for (var i in code) {
    switch (code[i]) {
      case "1":
        var o = code[i].replace ("1", "a");
        text += o;
        break;
      case "2":
        var o = code[i].replace ("2", "e");
        text += o;
        break;
      case "3":
        var o = code[i].replace ("3", "i");
        text += o;
        break;
      case "4":
        var o = code[i].replace ("4", "o");
        text += o;
        break;
      case "5":
        var o = code[i].replace ("5", "u");
        text += o;
        break;
      default:
        text += code[i];  
    }
  }
  return text
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
