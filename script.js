// small script for dynamic year and simple nav behavior
document.addEventListener('DOMContentLoaded',function(){
  var y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();
});
