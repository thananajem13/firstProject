function getName() {
    alert(`thana' najem`);
}

function cutEmail(){
    var emailInput = document.getElementById("email");
    var nameInput = document.getElementById("name");
    var domainInput = document.getElementById("domain");

    if(emailInput.value.includes("@")){
        var indexOfAt = emailInput.value.indexOf("@");
        var nameOfEmail = emailInput.value.slice(0, indexOfAt);
        nameInput.value = nameOfEmail;
        domainInput.value = emailInput.value.slice(indexOfAt+1);
    }
    else{
        alert("Please input a corrct email")
    }
}
