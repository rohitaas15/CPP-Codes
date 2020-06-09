// var a = setInterval(theme, 0);
function Search() {
  let search = document.getElementById('search').value;
  // theme();
  games(search);
}
// function theme() {
//   if (document.body.style.backgroundColor == 'grey') {
//     Array.from(document.getElementsByClassName('text')).forEach((element) => {
//       element.classList.remove('text-dark');
//     });
//     Array.from(document.getElementsByClassName('text')).forEach((element) => {
//       element.classList.add('text-light');
//     });
//     Array.from(document.getElementsByClassName('child')).forEach((element) => {
//       element.style.border = '1px solid white';
//     });
//   }
// }
function games(search) {
  document.getElementById('results').innerHTML = '';
  document.getElementById('desc').innerHTML = '';
  axios
    .get('https://api.rawg.io/api/games?search=' + search)
    .then((res) => {
      console.log(res);
      let games = res.data.results;
      let output = '';
      $.each(games, (index, game) => {
        output += `
          <div class="child">
              <div class="text-center">
                  <img src="${game.background_image}" >
                  <h3 class="text">${game.name}</h3>
                  <a onclick="desc(${game.id})" class="btn btn-primary" href="#">View More</a>
              </div>
          </div>
          `;
      });
      document.getElementById('results').innerHTML += output;
    })
    .catch((err) => {
      console.log(err);
    });
}
function desc(id) {
  document.getElementById('results').innerHTML = '';
  document.getElementById('desc').innerHTML = '';
  axios.get('https://api.rawg.io/api/games/' + id).then((res) => {
    console.log(res);
    let desc = res.data;
    let platforms = '';
    let genres = '';
    for (i = 0; i < desc.platforms.length; i++) {
      if (i != desc.platforms.length - 1)
        platforms += desc.platforms[i].platform.name + ',';
      else platforms += desc.platforms[i].platform.name;
    }
    for (i = 0; i < desc.genres.length; i++) {
      if (i != desc.genres.length - 1) genres += desc.genres[i].name + ',';
      else genres += desc.genres[i].name;
    }
    output = `
              <div class="text-center">
                <h1 class="text display-4">${desc.name}</h1>
                    <h5 class="text">Genres : ${genres}</h5>
                   <p class="text"> ${desc.description_raw}</p>
                   <h5 class="text">Platforms : ${platforms}</h5>
                  <img class="ml-auto descImg" src="${desc.background_image}" >
              </div>
          `;

    document.getElementById('desc').innerHTML = output;
  });
}
