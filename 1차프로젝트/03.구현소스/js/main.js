// 메인화면 js

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const qsEl = (ele, x) => ele.querySelector(x);
const qsaEl = (ele, x) => ele.querySelectorAll(x);

const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

addEvt(window, "load", loadFn);



function loadFn(){

    const f_button = qs(".fnb-family");

    f_button.onclick = (e) =>{
    console.log('Family 버튼클릭');
    }

}


