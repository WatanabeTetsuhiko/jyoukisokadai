var a;
var b;
var c;

var frac=function(bunnsi,bunnbo){
  var bunnsuu={
    bunnsi:bunnsi,
    bunnbo:bunnbo
  };
  return bunnsuu;
}


var multiply=function(a,b){
  var bunnsi;
  var bunnbo;

  if(Number.isInteger(a)&&Number.isInteger(b)){
    return a*b;
  }

  if(Number.isInteger(a)){
    a=frac(a,1);
  }

  if(Number.isInteger(b)){
    b=frac(b,1);
  }

  bunnsi=a.bunnsi*b.bunnsi;
  bunnbo=a.bunnbo*b.bunnbo;

  var answer=frac(bunnsi,bunnbo);
  return answer;
}


a=frac(1,3);
b=frac(4,3);
c=multiply(a,b);
console.log(c);
