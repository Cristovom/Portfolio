var settings = {
  "url": "https://api.themoviedb.org/3/discover/movie",
  "method": "GET",
  "timeout": 0,
  "headers": {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjZmMTE0NTgyZDZkNWEyYzY1NTJiZGE3YWNiNDBhMyIsInN1YiI6IjY1NmE5MWIwNGE0YmY2MDBjNTAxYWFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qMTcMYfdASHZfcgjxj3MIwMzQFv_EFSY7DDO_-E5NJc"
  },
};

$.ajax(settings).done(function (response) {
  listArray = response.results;
  listArray.forEach(element => {
      var flexContent = document.querySelector('.flex-content');
      var elementFirst = document.createElement('a');
      var img = document.createElement('img');
      var desc = document.createElement('div');
      var title = document.createElement('h1');
      var paragraph = document.createElement('p');

      elementFirst.href = 'javascript:void(0);';
      elementFirst.classList = 'item-filme';

      desc.classList = 'description-film';

      img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${element.backdrop_path}`;
      title.innerText = `${element.original_title}`;
      paragraph.innerText = `${element.overview}`;

      flexContent.appendChild(elementFirst);
      desc.appendChild(title);
      desc.appendChild(paragraph);
      elementFirst.appendChild(img);
      elementFirst.appendChild(desc);
      console.log(element.original_title);
  });
});