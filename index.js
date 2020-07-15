 var n = Math.random();
 n=n*6;
 n=n+1;
 n=Math.floor(n);
 var randomImage = "images/dice"+ n+".png";
document.querySelector(".img1").setAttribute("src",randomImage);

 var m = Math.random();
 m=m*6;
 m=m+1;
 m=Math.floor(m);
var randomImage2 = "images/dice"+ m+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);
 if(n>m){
 document.querySelector("h1").innerHTML = "⛳Player1 wins";
 }
 else if(m>n){
 document.querySelector("h1").innerHTML ="player2 wins⛳";    
 }
 else{
  document.querySelector("h1").innerHTML ="Draw";   
 }