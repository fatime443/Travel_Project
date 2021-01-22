'use strict'
$('#valutaChange').click(function(){
    $('.drip-menu').toggleClass('d-none')
})


const pass_field = document.querySelector('.password');
const show_btn = document.querySelector('.show');
show_btn.addEventListener('click',  function(){
    if(pass_field.type === 'password'){
        pass_field.type = 'text';
        show_btn.style.color = '#3498db'
        show_btn.textContent = 'HIDE'
    }
    else{
        pass_field.type = 'password'
        show_btn.style.color = '#222'
        show_btn.textContent = 'SHOW'
    }
})

let linkItem = document.querySelector('.link-item');
let content = document.querySelector('.content');
linkItem.addEventListener('click', () =>{
    if(content.style.display === 'block'){
        content.style.display = 'none';
    }
    else{
        content.style.display = 'block'
    }
})