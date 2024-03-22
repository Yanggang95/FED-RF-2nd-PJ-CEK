// 메인화면 js

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const qsEl = (ele, x) => ele.querySelector(x);
const qsaEl = (ele, x) => ele.querySelectorAll(x);

const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

addEvt(window, "load", loadFn);



function loadFn(){

    //왼쪽버튼
    const l_button = qs(".page-pagination .left");
    //오른쪽버튼
    const r_button = qs(".page-navigation .right");
    //슬라이드
    const slide = qs("#slide");

    l_button.onclick = goSlide;
    r_button.onclick = goSlide;



    function goSlide(){

        console.log("왔냐")
        
        let isRbtn = this.classList.contains('right');

        if(isRbtn){
            slide.style.left = '-100%';
            slide.style.transition = '.6s ease-out';
            
            setTimeout(()=>{
                slide.appendChild(
                    slide.querySelectorAll('li')[0]);
                    slide.style.left = '0';
                    slide.style.transition = 'none';
                },600)
        }

    }



    
    //family 버튼
    const f_button = qs(".fnb-family");

    f_button.onclick = (e) =>{
    console.log('Family 버튼클릭');
    }

}


