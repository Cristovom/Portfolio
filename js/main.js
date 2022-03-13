//Instagram na home
// token cris === IGQVJYU2o1cWVwdnZAKdEJESjRSQjJ3OWV3Y2VOaGFYdlJTeFN1UC1SXzdERmM5ZAFZAyZAkwzWmNtcHAtTldST2JUYmpzNFZA1NWR3NFFidDVOYUhLb0ZABTU9JaWlNTVZAoX08ySGxPV1l5MXZAONVpfRVJQVAZDZD
// token arthur === IGQVJXdjJxOHJ6MGl6eFZARRWZAuWGJVX3hXeS0zN3FyNkdWQURRNFFRNFRXMnN5dXk2N3h6Sy1faWhISW1ITWw4U0FXcVFXV2dIQ0NMT1NSYkR0QkVEZAm9zbk5CY1RyV3BNYi1ESDZAnbDRuYzJzTUFoUAZDZD
$.ajax({
    type:"GET",
    url: "https://graph.instagram.com/me/media?fields=media_type,media_url,id,caption,permalink&limit=10&access_token=IGQVJWM25wRnktaXFIM3dEeUJUZAlhWNDdINjVyZAUJJSzU5ZAjg3ZADJjc0NieEEzMDFfcHdMRzROS0FvRE5oakpPRHI5V0ZA0eEtpLUJ2cGpHZAXFxRDBoRWw1b1hLVzR4RkhPXzA1RktmUVRxRHhPOHRkNwZDZD",
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
