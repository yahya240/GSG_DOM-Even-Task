
const colorBtn = document.querySelector('.color-btn')
const box = document.querySelector('.box')
const hexaInput = document.querySelector('.hexa-input')

const hexColors = ['#C0EEE4','#F8F988','#CCD6A6','#453C67','#46C2CB','#FB2576','#DBA39A','#7FE9DE','#2A3990','#735F32']

colorBtn.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random()*hexColors.length);
    box.style.backgroundColor = hexColors[randomNumber]
    hexaInput.value = hexColors[randomNumber];
})

hexaInput.addEventListener('keypress',(e)=>{
    console.log(e.target.value);
    box.style.backgroundColor = e.target.value
})

let myTimer;

box.addEventListener('mouseenter',()=>{
    myTimer = setInterval(changeColor,(1000))
    
})

box.addEventListener('mouseleave',()=>{
    clearInterval(myTimer)
})

const changeColor = ()=>{
    let randomNumber = Math.floor(Math.random()*hexColors.length);
    box.style.backgroundColor = hexColors[randomNumber]
    hexaInput.value = hexColors[randomNumber];
}