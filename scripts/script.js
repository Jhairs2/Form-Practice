



function matchCheck(firstPass, secondPass) {
    
    firstPass = document.querySelector("#pass");
    secondPass = document.querySelector("#confirm-pass");

    if(firstPass != secondPass) {
        firstPass.setCustomValidity("Passwords do not match");
        secondPass.setCustomValidity("Passwords do not match");
    }
}