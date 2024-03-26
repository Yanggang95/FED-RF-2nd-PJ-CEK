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

    for(let i=0;i<14;i++){
        slide.innerHTML +=`<li>
        <img src="./images/thumbnail${i+1}.jpg" alt="썸네일${i+1}">
        </li> `
    }


    l_button.onclick = goSlide;
    r_button.onclick = goSlide;

    let prot = false;


    function goSlide(){

        if(prot) return;
        prot = true;
        setTimeout(() => {
            prot = false;
        }, 600);
        
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
        }else{
            let list = slide.querySelectorAll('li');
            slide.insertBefore(list[list.length - 1], list[0]);

            slide.style.left = '-100%';
            slide.style.transition = 'none';

            setTimeout(() => {
                slide.style.left = '0';
                slide.style.transition = '.6s ease-out';
            }, 0);
        }

    }

    //family 버튼
    const fnb_family = qs(".fnb-family");
    const p = qs(".fnb-family p")

    p.onclick = (e) =>{
        fnb_family.style.top = "-38%";
        fnb_family.style.height = "42%";
    }

}


