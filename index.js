var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var imagefile1= "images/dice"+random1+".png";
var imagefile2= "images/dice"+random2+".png";
var image1= document.querySelectorAll("img")[0];
var image2= document.querySelectorAll("img")[1];
image1.setAttribute("src",imagefile1);
image2.setAttribute("src",imagefile2);
if(random1>random2){
  document.querySelector("h1").innerHTML="🚩Naman Wins";
}
else if(random1<random2){
  document.querySelector("h1").innerHTML="Meet Wins🚩";
}
else{
  document.querySelector("h1").innerHTML="🚩Draw🚩";
}
