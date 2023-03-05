let request = new XMLHttpRequest();



request.open("GET" ,"https://api.themoviedb.org/3/trending/movie/day?api_key=d903bcdae97d41411a8e54f49fb3b5d0");


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
        <img class="img-fluid mt-5" src="https://image.tmdb.org/t/p/w500${photo[i].poster_path}" alt="">
    </div></div>
        `;
        console.log(photo[i]);
    }
    displayData.innerHTML = temp;
   
});

