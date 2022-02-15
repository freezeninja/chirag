window.addEventListener('load', () => {
    const loadingImgBox = document.getElementById('loadingImgBox');
    setTimeout(function () {
        loadingImgBox.style.opacity = '0';
        loadingImgBox.style.transition = '1.5s ease-in-out';
        setTimeout(function () {
            loadingImgBox.style.display = 'none';
        }, 1500)
    }, 1500)
});

window.addEventListener('scroll', ()=>{
    let scrollTop = document.getElementById('scrollTop');
    let scroll = document.documentElement.scrollTop;
    scrollTop.classList.toggle('active', scroll >= 400);
});

let NavIcon = document.getElementById('NavIcon');
NavIcon.addEventListener('click', ()=>{
    let downHeader = document.getElementById('downHeader');
    let wholeHeader = document.querySelector('#wholeHeader');
    wholeHeader.classList.toggle('active')
    downHeader.classList.toggle('active');
    NavIcon.classList.toggle('active');
    if(NavIcon.classList.contains('active')){
       NavIcon.innerHTML = `<i class="fas fa-times"></i>`
    }else{
        NavIcon.innerHTML = `<i class="fas fa-bars"></i>`
    }
});

// let logSign = document.getElementById('loginJs');
// logSign.addEventListener('click', ()=>{
//     let lgSBox = document.querySelector('.logSign');
//     lgSBox.classList.toggle('active');
// })

// scrolltop 
function toTop(){
    document.documentElement.scrollTop = 0;
}

// serch 
let serachCliked_box = document.querySelector('.serachCliked_box'),
    searchBoxAll = document.querySelectorAll('.searchBoxAll'),
    search_cross = document.getElementById('search_cross');
    // searchBoxAll.addEventListener('click', ()=>{
    //     serachCliked_box.classList.add('active');
    // });
    search_cross.addEventListener('click', ()=>{
        serachCliked_box.classList.remove('active');
    });
    searchBoxAll.forEach((e)=>{
        e.addEventListener('click', ()=>{
            serachCliked_box.classList.add('active');
        })
    })