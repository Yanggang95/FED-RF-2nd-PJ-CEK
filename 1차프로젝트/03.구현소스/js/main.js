// 메인화면 js

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const qsEl = (ele, x) => ele.querySelector(x);
const qsaEl = (ele, x) => ele.querySelectorAll(x);

const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

addEvt(window, "load", loadFn);

function loadFn() {
    //왼쪽버튼
    const l_button = qs(".page-pagination .left");
    //오른쪽버튼
    const r_button = qs(".page-navigation .right");
    //슬라이드
    const slide = qs("#slide");

    for (let i = 0; i < 14; i++) {
        slide.innerHTML += `<li data-seq="${i}">
        <img src="./images/thumbnail${i + 1}.jpg" alt="썸네일${i + 1}">
        </li> `;
    }

    l_button.onclick = goSlide;
    r_button.onclick = goSlide;

    let prot = false;

    function goSlide(evt, sts = true) {
        // sts = true: 버튼클릭 / false : 자동호출

        if (sts) {
            clearAuto();
        }

        if (prot) return;
        prot = true;
        setTimeout(() => {
            prot = false;
        }, 600);

        let isRbtn = sts ? this.classList.contains("right") : true;

        if (isRbtn) {
            slide.style.left = "-100%";
            slide.style.transition = ".6s ease-out";

            setTimeout(() => {
                slide.appendChild(slide.querySelectorAll("li")[0]);
                slide.style.left = "0";
                slide.style.transition = "none";
            }, 600);
        } else {
            let list = slide.querySelectorAll("li");
            slide.insertBefore(list[list.length - 1], list[0]);

            slide.style.left = "-100%";
            slide.style.transition = "none";

            setTimeout(() => {
                slide.style.left = "0";
                slide.style.transition = ".6s ease-out";
            }, 0);
        }

        let seq = slide
            .querySelectorAll("li")
            [isRbtn ? 1 : 0].getAttribute("data-seq");

        console.log(seq);

        let ppc = qs('.page-pagination-current');

        for(let i=0; i<14; i++){
            if(i == seq){
                ppc.innerHTML = '0'+(i+1);
            }
        }


    }
    let autoI;

    let autoT;

    autoSlide();

    function autoSlide() {
        autoI = setInterval(() => {
            goSlide(false, false);
        }, 3000);
    }

    function clearAuto() {
        clearInterval(autoI);
        clearTimeout(autoT);
        autoT = setTimeout(() => {
            autoSlide();
        }, 5000);
    }

    //family 버튼
    const list = qs(".list-box");
    const fam = qs(".fam");

    fam.onclick = (e) => {
        list.style.top = "-42%";
        list.style.height = "42%";
    };
}
