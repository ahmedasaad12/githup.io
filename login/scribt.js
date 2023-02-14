let userName= document.getElementById('userName')
let userEmail= document.getElementById('userEmail')
let userPass= document.getElementById('userPass')
let btnLogin =document.getElementById('registerBtn')
let users =[]

btnLogin.addEventListener('click',function(){
    if(validationName()==true && validationEmail()==true && validationPassword() ==true){
        let userData = {
            userName:userName.value,
            userEmail:userEmail.value,
            userPass:userPass.value,
        }
        users.push({userName , userEmail , userPass}=userData)
        localStorage.setItem('data',JSON.stringify(users))
        location.href = '../home/index.html';
        document.getElementById('error').innerHTML = ``
    }
})

function validationName(){
    let regist = /^\w{3,8}$/
    if(regist.test(userName.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Name Invalid...!</div>`
    }
}
function validationEmail(){
    let regist = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regist.test(userEmail.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Email Invalid...!</div>`
    }
}
function validationPassword(){
    let regist = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regist.test(userPass.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Password Invalid...!</div>`
    }
}


$(".forget").click(function
    (){
        $(".alertMassage").show()
    })

    $(".close").click(function
        (){
            $(".alertMassage").hide()
        })
 