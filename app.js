const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const btn3 = document.querySelector(".btn-3")
const btn4 = document.querySelector(".btn-4")
const btn5 = document.querySelector(".btn-5")
let submit = document.querySelector(".submit")
const number = document.querySelector(".number")
const box2 = document.querySelector(".box2")
const rate = document.querySelector(".rate")
const box = document.querySelector(".box")


 btn1.addEventListener("click", function(){
    console.log("clicked")
    number.innerHTML = 1 
     submit = number
 })
btn2.addEventListener("click", function(){
    console.log("clicked")
    number.innerHTML = 2 
     submit = number
 })
btn3.addEventListener("click", function(){
    console.log("clicked")
    number.innerHTML = 3
     submit = number
 })
btn4.addEventListener("click", function(){
    console.log("clicked")
    number.innerHTML = 4
     submit = number
 })
btn5.addEventListener("click", function(){
    console.log("clicked")
    number.innerHTML = 5
     submit = number
 })

 submit.addEventListener("click", function(){
   
 if (box.classList.contains("show-box2")){
     box.classList.remove("show-box2")
 }  
 else {
     box2.classList.add("show-box2")
 }
 if (box.classList.contains("hide-box")){
    box.classList.remove("hide-box")
}  
else {
    box.classList.add("hide-box")
}
  

 })
