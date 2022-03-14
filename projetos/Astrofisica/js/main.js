$(".menu-hamburguer").on('click', function() {
    $(".menu-itens").toggleClass("nav-open");
});

// PUXANDO DO HTML
// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings',
//   loop: true,
//   typeSpeed: 50
// });

// COLOCANDO AS PALAVRAS AQUI
// var typedr = new Typed('.element', {
//   strings: [
//     'Essas são as palavras que irão aparecer',
//     'First sentence.',
//     'Second sentence.',
//     'Have a great day!',
//     'dsdsfgfd',
//   ],
//   stringsElement: null,
//   typeSpeed: 50,
//   loop: true
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
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // }
});

//Instagram na home
// token cris === IGQVJYU2o1cWVwdnZAKdEJESjRSQjJ3OWV3Y2VOaGFYdlJTeFN1UC1SXzdERmM5ZAFZAyZAkwzWmNtcHAtTldST2JUYmpzNFZA1NWR3NFFidDVOYUhLb0ZABTU9JaWlNTVZAoX08ySGxPV1l5MXZAONVpfRVJQVAZDZD
// token arthur === IGQVJXdjJxOHJ6MGl6eFZARRWZAuWGJVX3hXeS0zN3FyNkdWQURRNFFRNFRXMnN5dXk2N3h6Sy1faWhISW1ITWw4U0FXcVFXV2dIQ0NMT1NSYkR0QkVEZAm9zbk5CY1RyV3BNYi1ESDZAnbDRuYzJzTUFoUAZDZD
$.ajax({
    type:"GET",
    url: "https://graph.instagram.com/me/media?fields=media_type,media_url,id,caption,permalink&limit=10&access_token=IGQVJYU2o1cWVwdnZAKdEJESjRSQjJ3OWV3Y2VOaGFYdlJTeFN1UC1SXzdERmM5ZAFZAyZAkwzWmNtcHAtTldST2JUYmpzNFZA1NWR3NFFidDVOYUhLb0ZABTU9JaWlNTVZAoX08ySGxPV1l5MXZAONVpfRVJQVAZDZD",
    success: function(data){
    console.log(data);
    for( x in data.data ){
        if(data.data[x].media_type == 'VIDEO'){
          $('#instagramfeed').append('<a target="_blank" href="'+data.data[x].permalink+'"><video autoplay muted="true" loop="true" src="'+data.data[x].media_url+'"></video></a>'); // data.data[x].images.low_resolution.url - URL of image, 306Ñ…306
        }
        else{
          $('#instagramfeed').append('<a target="_blank" href="'+data.data[x].permalink+'" style="background-image:url('+data.data[x].media_url+')"></a>'); // data.data[x].images.low_resolution.url - URL of image, 306Ñ…306
        }
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(data);
  },
  dataType: "jsonp"
});
