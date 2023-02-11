
function search(){
    let apiKey = "1591dab3"
    let Movie = document.getElementById("search-bar").value;
    let url =` http://www.omdbapi.com/?apikey=${apiKey}`
    fetch(`${url}+&t=${Movie}`).then((res)=>res.json()).then((data)=>{
    console.log(data)
    document.getElementById("result").innerHTML = `<div id=poster-idv><img src=${data.Poster}></div>
    <div id="movie-detail">
    <h1>${data.Title}</h1>
    <h3>${data.Year}</h3>
    <h3>${data.imdbRating}</h3>
    <h3>${data.Actors}</h3>
    <h3>${data.Director}</h3>
    </div>
    `

    }).catch((err)=>console.log(err));
}