function validate(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if(username!='anwesha@gmail.com')
    {
        document.getElementById('user').innerHTML="**Invalid username";
        return false;
    }

    if(password!='anwesha123')
    {
        document.getElementById('pass').innerHTML="**Wrong Password";
        return false;
    }
}