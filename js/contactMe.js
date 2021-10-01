function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email);
}

function phoneIsValid (phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
}

function usrForm(){
    let usrLName = document.getElementByld("lastname").value;
    let usrFName = document.getElementByld("fastname").value;
    let usrEmail = document.getElementById("email").value;
    let usrPhone = document.getElementById("phone").value;
    let usrMsg = document.getElementById("msg").value;
    var parameters = {usrLName, usrLName, usrEmail, usrPhone, usrMsg};
    console.log(usrLName);
    console.log(usrFName);
    console.log(usrEmail);
    console.log(usrPhone);
    console.log(usrMsg);

    var ready = false;

    if(usrLName == ""){
        ready = false;
        document.getElementById("lastNamePrompt").style.display = "";
    }else{
        ready = true;
        document.getElementById("lastNamePrompt").style.display = "none";
    }
    if(usrFName == ""){
        ready = false;
        document.getElementById("firstNamePrompt").style.display = "";
    }else{
        ready = true;
        document.getElementById("fastNamePrompt").style.display = "none";
    }
    if(!emailIsValid(usrEmail)){
        ready = false;
        document.getElementById("emailPrompt").style.display = "";
    }else{
        ready = true;
        document.getElementById("emailPrompt").style.display = "none";
    }
    if(!phoneIsValid(usrPhone)){
        ready = false;
        document.getElementById("phonePrompt").style.display = "";
    }else{
        ready = true;
        document.getElementById("phonePrompt").style.display = "none";
    }
    if(usrMsg == ""){
        ready = false;
        document.getElementById("messagePrompt").style.display = "";
    }else{
        ready = true;
        document.getElementById("messagePrompt").style.display = "none";
    }

    if(ready){
        emailjs.send("service_g0acgqq","template_agodqhj",parameters)
            .then(function(res){
                console.log("success",res.status);
            });
    }
}