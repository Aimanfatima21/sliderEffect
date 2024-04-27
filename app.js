let nextDom=document.getElementById('next');
let prevDom=document.getElementById('prev');
let courserDom=document.querySelector('.courser');
let listItemDom =document.querySelector('.courser .list');
let thumnailDom=document.querySelector('.courser .thumnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
} 
let timeRunning=3000;
let timeAutoNext=7000;
let runTimeout;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
    },timeAutoNext);
function showSlider(type){
    let itemSlider=document.querySelectorAll('.courser .list .items');
    let itemThumnail=document.querySelectorAll('.courser .thumnail .items');
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumnailDom.appendChild(itemThumnail[0]);
        courserDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumnailDom.prepend(itemThumnail[positionLastItem]);
        courserDom.classList.add('prev');
    }

clearTimeout(runTimeout);
runTimeout = setTimeout(()=>{
courserDom.classList.remove('next');
courserDom.classList.remove('prev');
},timeRunning);
clearTimeout(runAutoRun);

}