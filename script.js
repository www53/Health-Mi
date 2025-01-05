function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_8dmo96d","template_sqjucb9",parms).then(alert ("Email Send !!!"))
}