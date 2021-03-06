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
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,//992
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 768,//768
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 540,//540
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.box').click(function(){
    $('.curren').toggleClass('d-none')
})