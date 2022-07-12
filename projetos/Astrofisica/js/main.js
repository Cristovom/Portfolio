$(".menu-hamburguer").on('click', function() {
  $(".menu-itens").toggleClass("nav-open");
  $("body").toggleClass("menu-active");
});

// PUXANDO DO HTML
// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings',
//   loop: true,
//   typeSpeed: 50
// });

var wordsfooter = new Typed('.words', {
strings: [
  'Aqui são as palavras onde irão no footer',
  'Carinho',
  'Amor'
],
loop: true,
typeSpeed: 150,
stringsElement: null
})

// Carroussel parceiros
const parceiros = new Swiper('.group-parceiros', {
speed: 300,
slidePerView: 2,
spaceBetween: 20,
effect: 'cards',
centerInsufficientSlides: true,
centeredSlides: true,
});

//Instagram na home
// $.ajax({
//     type:"GET",
//     url: "https://graph.instagram.com/me/media?fields=media_type,media_url,id,caption,permalink&limit=10&access_token=ddddd",
//     success: function(data){
//     console.log(data);
//     for( x in data.data ){
//         if(data.data[x].media_type == 'VIDEO'){
//           $('#instagramfeed').append('<a target="_blank" href="'+data.data[x].permalink+'"><video autoplay muted="true" loop="true" src="'+data.data[x].media_url+'"></video></a>');
//         }
//         else{
//           $('#instagramfeed .group-photo').append('<a target="_blank" href="'+data.data[x].permalink+'" class="card-unico" style="background-image:url('+data.data[x].media_url+')"></a>');
//         }
//     }
//   },
//   error: function(jqXHR, textStatus, errorThrown) {
//     console.log(data);
//   },
//   dataType: "jsonp"
// });
