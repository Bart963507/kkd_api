function validateInput(input){
    const element = document.getElementById(input)
    element.setCustomValidity("")
    const valid = element.validity.valid
    
    if (!valid){
        element.setCustomValidity("Vul een geldige waarde in")
        element.reportValidity();
    }
    else{} 
    return valid
}