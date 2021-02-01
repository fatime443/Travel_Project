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
$('.box').click(function(){
    $('.curren').toggleClass('d-none')
})
$('button').click(function(){
    $('.checkbox').toggleClass('d-none')
})
var slider = document.getElementById('myRange');
var output = document.getElementById('value');
output.innerHTML = slider.value;
slider.oninput = function(){
    output.innerHTML = this.value;
}
$('.accordion h6').click(function(){
    $('.sliderContainer').slideToggle()
})
$('.check-acc').click(function(){
    $('.check form').slideToggle()
})
$('.star-acc').click(function(){
    $('.star form').slideToggle()
})
$('.faculty-acc').click(function(){
    $('.faculty form').slideToggle()
})
$('.theme-acc').click(function(){
    $('.theme form').slideToggle()
})

    