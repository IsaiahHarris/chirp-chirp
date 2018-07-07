function chirp(n){
  let str = 'chirp ';
  if(n===1){
    return str;
  }
  
  return str + chirp(n-1);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});