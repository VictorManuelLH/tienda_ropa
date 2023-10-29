$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})

$('.owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});

// const logo = document.getElementById("logo")
        // window.addEventListener("scroll", () =>{
        //     const scrollY = window.scrollY;
        //     const newWidth = Math.max(50, 100 - scrollY);
        //     logo.style.width = `${ parseInt(newWidth) }px`;


        //     // -----------
        // })

// document.addEventListener("DOMContentLoaded", function() {
//     const imagen = document.getElementById("logo");
//     const ancho = imagen.width;
//     const minWidth = ancho/2;
    
//     // console.log( "ancho -> ", ancho ) 
//     // console.log( "miWidth -> ",minWidth )
    
//     window.addEventListener("scroll", () =>{
//         const scrollY = window.scrollY;
//         const percentage = Math.max(70, 100 - scrollY);
//         imagen.style.width = `${ parseInt(ancho * ( percentage / 100 ))  }px`;
//     })
// });

// document.getElementById("btn-carrito").click()
// // document.getElementById("btn-product").click()