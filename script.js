function validate(){
    var name1 = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var interest = document.getElementById("interest").value;
    var about = document.getElementById("about").value;


var params = new URLSearchParams({
    name: name1,
    email: email,
    dob: dob,
    interest: interest,
    about: about
});

window.open("summary.html?" + params.toString());

try{    
    if(email == "") throw "Kindly enter your email";
    if(dob == "") throw "Kindly enter your date of birth";
    if(this.interest == "") throw "Kindly enter your interest";
    if(this.about == "") throw "About is empty";
}
catch(err){
    alert(err);
}

}