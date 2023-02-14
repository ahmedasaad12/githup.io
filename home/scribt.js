let userData = JSON.parse(localStorage.getItem('data'))
let userlogin
userData.forEach(users => {
    userlog =users.userName
})

document.getElementById('log').innerHTML =`Hi ${userlog}`


window.addEventListener('scroll',function(){
    let windowSlide = window.scrollY
    if(windowSlide > 100){
        
        $('.roller').css('display', 'flex')
        
    }
    else if (windowSlide < 100)
    {
        
        $('.roller').css('display', 'none')
    }
    $('.roller').click(()=>window.scrollTo(0,0))
})
let review = document.querySelectorAll("#review")

function reviewRandom(){
    for (let i = 0; i < review.length; i++) {
        review[i].innerHTML =  Math.round(Math.random()*3000)+"k"
        
    }
}
setInterval( reviewRandom ,1000);


$('#logOut').click(function(){
    localStorage.clear(userData);
    location.href = '../login/LOGIN.html';
});

