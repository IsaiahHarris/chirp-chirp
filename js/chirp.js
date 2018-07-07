function chirp(n){
  if(n===1){
    return'chirp';
  }
  let str = 'chirp ';
  return str + chirp(n-1);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});