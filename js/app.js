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
$('.shop-btn').click(function(){
    $('.shop').toggleClass('d-none')
})
$('#tabMenu button').click(function(){
    const index = $(this).index();
    $('.tab-content .tabs').stop().slideUp();
    $('.tab-content .tabs').eq(index).stop().slideDown();
})
var btn = document.getElementsByClassName('btn');
for(var i=0; i<btn.length; i++){
    btn[i].onclick=function(){
    for(var j=0; j<btn.length; j++){
        btn[j].style.backgroundColor = '#1A2B48'
    }
   
        this.style.backgroundColor = '#5191FA';
    }
}
$('.link i').click(function(e){
    e.preventDefault();
  
    $('.sub').addClass().slideToggle('active-class')
})

$('#open').click(function(e){
    e.preventDefault();
    $('.side-menu').addClass('active-acc')
})
$('#close').click(function(e){
    e.preventDefault();
    $('.side-menu').removeClass('active-acc')
})
$('.tour').click(function(){
    $('.tour-drop').toggleClass('d-none')
})
$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
});