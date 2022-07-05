
var openMenu = document.getElementById("openMenu")
var closeMenu = document.getElementById("closeMenu")
var nav = document.getElementById("nav")

openMenu.addEventListener("click", function(){
    nav.classList.add("active")
})

closeMenu.addEventListener("click", function(){
    nav.classList.remove("active")
})

var bonusBtn1 = document.getElementById("bonusBtn1")
var bonusBtn2 = document.getElementById("bonusBtn2")
var bonusBtn3 = document.getElementById("bonusBtn3")

bonusBtn1.addEventListener("click", function(){
    nav.classList.remove("active")
})

bonusBtn2.addEventListener("click", function(){
    nav.classList.remove("active")
})

bonusBtn3.addEventListener("click", function(){
    nav.classList.remove("active")
})


var openCard1 = document.getElementById("openCard1")
var openCard2 = document.getElementById("openCard2")
var openCard3 = document.getElementById("openCard3")
var openCard4 = document.getElementById("openCard4")
var openCard5 = document.getElementById("openCard5")
var openCard6 = document.getElementById("openCard6")

var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")
var card4 = document.getElementById("card4")
var card5 = document.getElementById("card5")
var card6 = document.getElementById("card6")

openCard1.addEventListener("click", function(){
    card1.classList.toggle("opened")
    openCard1.classList.toggle("opened")
})

openCard2.addEventListener("click", function(){
    card2.classList.toggle("opened")
    openCard2.classList.toggle("opened")
})

openCard3.addEventListener("click", function(){
    card3.classList.toggle("opened")
    openCard3.classList.toggle("opened")
})

openCard4.addEventListener("click", function(){
    card4.classList.toggle("opened")
    openCard4.classList.toggle("opened")
})

openCard5.addEventListener("click", function(){
    card5.classList.toggle("opened")
    openCard5.classList.toggle("opened")
})

openCard6.addEventListener("click", function(){
    card6.classList.toggle("opened")
    openCard6.classList.toggle("opened")
})