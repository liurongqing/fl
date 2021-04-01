var add = function(x){
  return function(y){
    return x + y
  }
}


console.log(add(10)(20))