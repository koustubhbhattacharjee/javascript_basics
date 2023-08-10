
const mainItem = document.querySelector('.flexbox-item-1')

let width=mainItem.style.width
mainItem.addEventListener('mouseenter',(e)=>{
    e.target.textContent='file'
    e.target.style.width='70%'
})
mainItem.addEventListener('mouseleave',(e)=>{
    e.target.textContent=''
    e.target.style.width=width
})
const mainItem2= document.querySelector('.flexbox-item-2')
mainItem2.addEventListener('mouseenter',(e)=>{
    e.target.textContent='file'
    e.target.style.width='70%'
})
mainItem2.addEventListener('mouseleave',(e)=>{
    e.target.textContent=''
    e.target.style.width=width
})