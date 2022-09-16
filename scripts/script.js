



function matchCheck(firstPass, secondPass) {
    
    firstPass = document.querySelector("#pass");
    secondPass = document.querySelector("#confirm-pass");

    if(firstPass != secondPass) {
        firstPass.setCustomValidity("Password do not match");
    }
}