
let NavIcon = document.getElementById('NavIcon');
NavIcon.addEventListener('click', ()=>{
    let downHeader = document.getElementById('downHeader');
    downHeader.classList.toggle('active');
    NavIcon.classList.toggle('active');
    if(NavIcon.classList.contains('active')){
       NavIcon.innerHTML = `<i class="fas fa-times"></i>`
    }else{
        NavIcon.innerHTML = `<i class="fas fa-bars"></i>`
    }
});

let logSign = document.getElementById('loginJs');
logSign.addEventListener('click', ()=>{
    let lgSBox = document.querySelector('.logSign');
    lgSBox.classList.toggle('active');
})

// scrolltop 
function toTop(){
    document.documentElement.scrollTop = 0;
}