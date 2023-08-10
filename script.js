// const myElement= document.createElement('div')
// myElement.setAttribute('class','dcode')
// console.log(myElement)
// document.body.appendChild(myElement)

// const h2El= document.getElementById('title')
// //h2El.textContent="Mangoes and me"
// h2El.innerHTML='<em>Mangoes and Bananas</em>'

// const myList = document.getElementById("mylist")
// let newListItem = document.createElement('li');
// newListItem.textContent = 'Man'
// myList.appendChild(newListItem)
// const fruits = ["banana","strawberry","avocado"]
// fruits.forEach((item)=>{
//     newFruitItem= document.createElement('li')
//     newFruitItem.textContent=`${item}`
//     myList.appendChild(newFruitItem)
// })
// fruitList= document.createElement('ul')
// //fruitList.setAttribute('id','fruits')

// fruits.map(item =>
//     `<li>${item}</li>`
// ).forEach((item)=>{
//     console.log(item)
//     fruitList.innerHTML+=item 
// })
// document.body.appendChild(fruitList)

// const myList= document.getElementById('myList')
// const docFrag = document.createDocumentFragment()
// let item1 = document.createElement('li')
// let item2 = document.createElement('li')
// let item3 = document.createElement('li')
// let item4 = document.createElement('li')

// item1.textContent='Apples'
// item2.textContent='Bananas'
// item3.textContent='Avocado'
// item4.textContent='grapes'

// docFrag.appendChild(item1)
// docFrag.appendChild(item2)
// docFrag.appendChild(item3)
// docFrag.appendChild(item4)

// myList.appendChild(docFrag)

// const myPara= document.getElementById('myPara')
// myPara.classList.add('bold','big-font')
// myPara.classList.remove('bold')
// //myPara.classList.replace('big-font','red-bg')
// myPara.classList.toggle('red-bg')

// console.log(myPara.classList.contains('white-text'))


// const myDiv= document.getElementById('myDiv');
// console.log(myDiv.dataset);
// myDiv.dataset.name='bob'
// myDiv.dataset.startedCodingAt=15
// console.log(myDiv.dataset);



// const myList=document.getElementById('myList')
// const pearsItem=document.getElementById('pears')

// console.log(myList)
// console.log(pearsItem)

// const oragesItem= document.createElement('li')
// oragesItem.textContent='Oranges'


// const addToBeginning=(parent, toInsert)=>{
//     const firstChild= parent.firstChild;
//     parent.insertBefore(toInsert,firstChild)
// }

// addToBeginning(myList,oragesItem)
// const listChildren= myList.children;
// const bananasItem = listChildren[2];
// const bananasClone = bananasItem.cloneNode(true);
// myList.appendChild(bananasClone)

// console.log(bananasItem)

// const grandParent= document.querySelector("#grandparent-id")



const grandParent=document.querySelector(".grandparent")
const parent=document.querySelector(".grandparent")
const child =document.querySelector(".grandparent")
console.log(grandParent)
grandParent.addEventListener("click", e =>{
    console.log(e)
})