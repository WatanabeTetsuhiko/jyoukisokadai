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


var add=function(a,b){
  var bunnsi;
  var bunnbo;

  if(Number.isInteger(a)&&Number.isInteger(b)){
    return a+b;
  }

  if(Number.isInteger(a)){
    a=frac(a,1);
  }

  if(Number.isInteger(b)){
    b=frac(b,1);
  }

  if(a.bunnbo!=b.bunnbo){
    bunnsi=a.bunnsi*b.bunnbo+b.bunnsi*a.bunnbo;
    bunnbo=a.bunnbo*b.bunnbo;
}  else{
  bunnsi=a.bunnsi+b.bunnsi;
  bunnbo=a.bunnbo;
}
  var answer=frac(bunnsi,bunnbo);
  return answer;
}


a=frac(1,3);
b=frac(4,3);
c=add(a,b);
console.log(c);
