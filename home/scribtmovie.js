let request = new XMLHttpRequest();



request.open("GET" ,"https://api.themoviedb.org/3/trending/movie/week?api_key=3f3bdbaa5120d13e9d99e747c1448b0c");


request.send();



request.addEventListener("load" , function(){
    let displayData = document.getElementById("movie");
    let temp = "";  
    
    let photo = JSON.parse(this.responseText);

    for(let i=0; i<photo.length; i++){
        temp += `
        <div class="col-lg-3 col-md-3 col-sm-12 ">
        <div>
        <h6 class="text-white">${photo[i].vote_average}</h6>
        <img class="img-fluid mt-5" src="https://image.tmdb.org/t/p/w500${photo[i].backdrop_path}" alt="">
    </div></div>
        `;
        console.log(photo[i]);
    }
    displayData.innerHTML = temp;
   
});

