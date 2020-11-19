$(".navbar-toggler-icon").on("click",function(){
    $(".nav-menu").toggleClass("hidden");
});    

$("#index-s4-owl").owlCarousel({
    loop:true,
    responsive:{
        0:{items:1},
        576:{items:2},
        768:{items:3},
        992:{items:4}
    }
});