var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit!=null){
    btnSubmit.onclick = function (){
        validateForm();
    }
}

document.getElementById('showPassword').onclick = function() {
    if ( this.checked ) {
        document.getElementById('pass').type = "text";
        document.getElementById('confirm').type = "text";
    } else {
        document.getElementById('pass').type = "password";
        document.getElementById('confirm').type = "password";
    }
};

function validateForm(){
    //name
    var hoInput = document.forms["member"].elements["ho"];
    var ho = hoInput.value;
    if(ho.length === 0){
        hoInput.nextElementSibling.innerHTML ="Vui lòng nhập họ";
    }else if (ho.length > 50){
        hoInput.nextElementSibling.innerHTML ="họ có quá nhiều ký tự";

    }else {
        hoInput.nextElementSibling.innerHTML ="";

    }
    var tenInput = document.forms["member"].elements["ten"];
    var ten = tenInput.value;
    if(ten.length === 0){
        tenInput.nextElementSibling.innerHTML ="Vui lòng nhập tên";
    }else if (ten.length > 50){
        tenInput.nextElementSibling.innerHTML ="Tên có quá nhiều ký tự";

    }else {
        tenInput.nextElementSibling.innerHTML ="";

    }
    //email
    var emailInput = document.forms["member"].elements["gmail"];
    var gmail = emailInput.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(gmail)) {
        emailInput.nextElementSibling.innerHTML ="vui lòng nhập đúng gmail @gmail.com";
        gmail.focus;
    }else if(gmail===0){
        emailInput.nextElementSibling.innerHTML ="vui lòng nhập gmail";
    }else {
        emailInput.nextElementSibling.innerHTML ="";

    }

    var passwordInput = document.forms["member"].elements["pass"];
    var pass = passwordInput.value;
    if(pass.length === 0){
        passwordInput.nextElementSibling.innerHTML="Nhập mật khẩu";
    }else if(pass.length >= 8){
        passwordInput.nextElementSibling.innerHTML="Sử dụng 8 ký tự trở lên cho mật khẩu của bạn";

    }else {
        passwordInput.nextElementSibling.innerHTML="";

    }

    var confirmInput = document.forms["member"].elements["confirm"];
    var confirm = confirmInput.value;
    if(confirm.length === 0){
        confirmInput.nextElementSibling.innerHTML="Xác nhận mật khẩu của bạn";
    }else if(confirm.length != pass.length){
        confirmInput.nextElementSibling.innerHTML="Các mật khẩu đã nhập không khớp .Hãy thử lại";

    }else {
        confirmInput.nextElementSibling.innerHTML="";
    }


    MEMBER_API ="https://music-i-like.herokuapp.com/api/v1/accounts";
    var xhr = new XMLHttpRequest();
    xhr.open("POST",MEMBER_API, true);
    xhr.send(JSON.stringify(object));
    console.log(object);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            var responseObject = JSON.parse(xhr.responseText);
            document.getElementById("total-msg").classList ="success-msg";
            document.getElementById("total-msg").innerHTML ="Đăng ký thành công";
        }else{
            if(xhr.readyState=== XMLHttpRequest.DONE){
                var responseObject = JSON.parse(xhr.responseText);
                document.getElementById("total-msg").classList ="error-msg";
                document.getElementById("total-msg").innerHTML =""
                responseObject.error[0].title + " " + responseObject.error[0].detail;
            }
        }
    }
}