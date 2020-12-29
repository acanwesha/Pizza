function validate()                                    
{ 
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
    var t=/^[6-9]{1}[0-9]{9}$/.test(contact)
    var e=/[a-z](@gmail.com)$/.test(email)
     //name
    if(firstName =="")
    {
        document.getElementById("fuser").innerHTML="** Please fill the firstname";
        return false;
    } 
    if((firstName.length<=2)||(firstName.length>15))
    {
        document.getElementById("fuser").innerHTML="** Please enter a valid firstname";
        return false;
    }
    if(!isNaN(firstName)){
        document.getElementById("fuser").innerHTML="** Please enter only alphabets";
        return false;
    }
    if(lastName =="")
    {
        document.getElementById("luser").innerHTML="** Please fill the lastname";
        return false;
    } 
    if((lastName.length<=2)||(lastName.length>15))
    {
        document.getElementById("luser").innerHTML="** Please enter a valid firstname";
        return false;
    }
    if(!isNaN(lastName)){
        document.getElementById("luser").innerHTML="** Please enter only alphabets";
        return false;
    }
    //contact
    if(contact =="")
    {
        document.getElementById("phone").innerHTML="** Please fill the contact field";
        return false;
    } 
    if(t==false)
    {
        document.getElementById("phone").innerHTML="** Please enter a valid phone number";
        return false;
    }
    //email
    if(email=="")
    {
        document.getElementById("mail").innerHTML="** Please enter your email address";
        return false;
    } 
    if(e==false)
    {
        document.getElementById("mail").innerHTML="** Please enter a valid email id";
        return false;
    }
    //password
    if(password=="")
    {
        document.getElementById("pass").innerHTML="** Please enter a password";
        return false;
    } 
    if((password.length<=6)||(password.length>10))
    {
        document.getElementById("pass").innerHTML="** Retry";
        return false;
    }
    if(password!=confirmPassword)
    {
        document.getElementById("cpass").innerHTML="** Password does not match";
        return false;
    }

    if(confirmPassword=="")
    {
        document.getElementById("cpass").innerHTML="** Please confirm your password";
        return false;
    } 








}