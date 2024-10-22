let movieNameRef = document.getElementById("Movie-id");
let searchBtn = document.getElementById("btn_id");
let result = document.getElementById("result");

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=85ec31d5`;
    
    if (movieName.length <= 0) {
        result.innerHTML = '<h3 class="msg">Please Enter a Valid Movie Name</h3>';
    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response === "True") {
                    result.innerHTML = `
                      <div class="info">
                          <img src="${data.Poster}" class="poster">
                          <div>
                              <h2>${data.Title}</h2>
                              <div class="rating">
                                  <img src="./star.svg">
                                  <h4>${data.imdbRating}</h4>
                              </div>
                              <div class="details">
                                  <span>${data.Rated}</span>
                                  <span>${data.Year}</span>
                                  <span>${data.Runtime}</span>
                              </div>
                              <div class="genre">
                                  <div>${data.Genre.split(",").join("</div><div>")}</div>
                              </div>
                          </div>
                      </div>
                      <h3>Plot:</h3>
                      <p>${data.Plot}</p>
                      <h3>Cast:</h3>
                      <p>${data.Actors}</p>`;
                } else {
                    result.innerHTML = '<h3 class="msg">Error: Movie not found</h3>';
                }
            })
            .catch(() => {
                result.innerHTML = '<h3 class="msg">Error Occurred</h3>';
            });
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
window.addEventListener("keypress",getMovie);
