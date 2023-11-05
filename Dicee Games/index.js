
// alert("work>??");
// random number function
var playerOneNum = Math.floor(Math.random()*6)+1;
var playertwoNum = Math.floor(Math.random()*6)+1;
// alert("There is a bug!!");
// change dice img for player1 player2
var img1path = "./images/dice"+playerOneNum+".png";
var img2path = "./images/dice"+playertwoNum+".png";
document.querySelector(".img1").setAttribute("src", img1path);
document.querySelector(".img2").setAttribute("src", img2path);
// alert("There is a bug22222!!");
// compare result
// toggle container-sub1/container-sub2
// document.querySelector(".sub1").classList.remove("hid");
// document.querySelector(".sub2").classList.remove("hid");
if (playerOneNum > playertwoNum){
    document.querySelector(".sub1").classList.remove("hid");
    document.querySelector(".sub2").classList.add("hid");
    document.querySelector(".sub3").classList.add("hid");
}
else if(playerOneNum < playertwoNum){
document.querySelector(".sub1").classList.add("hid");
document.querySelector(".sub2").classList.remove("hid");
document.querySelector(".sub3").classList.add("hid");
}
else if(playerOneNum === playertwoNum){
    document.querySelector(".sub1").classList.add("hid");
    document.querySelector(".sub2").classList.add("hid");
    document.querySelector(".sub3").classList.remove("hid");
}
else{
    alert("There is a bug!!");
}


