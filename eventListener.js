const grandParent=document.querySelector(".grandparent")
const parent=document.querySelector(".grandparent")
const child =document.querySelector(".grandparent")

grandParent.addEventListener("click", e =>{
    console.log(e.target)
})