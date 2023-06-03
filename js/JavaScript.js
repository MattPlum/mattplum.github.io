
var array = 
[
"'Lee' means plum in Chinese", 
"I have a shih tzu named Bao",
"My sister is a nurse",
"I was born in NY Long Island",
"My mom is an engineer",
"My dad is a network engineer",
"Follow my dogs insta, @BaoInBrooklyn",

]


$(document).ready(function(){
    $('.fortune_cookie').on("click", function(e){
      $('.active').removeClass('active');
      $(this).addClass('active');
      alert(array[Math.floor(Math.random() * array.length)]);
      console.log(Math.floor(Math.random() * array.length))
    });
  });

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function changeVisibility(id) {
    var x = document.getElementById(id);
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}  
