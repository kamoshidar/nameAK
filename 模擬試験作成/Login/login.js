
document.getElementById("login").onclick = function() {
    const id = document.getElementById("id").value;
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;

    var flag = 0;
    if(id.length == 0) {
        flag = 1;
    }
    
    if(pass.length == 0) { 
        flag = 1; 
    }
    if(repass.length == 0) { 
        flag = 1; 
    }
    if(flag == 1) { 
        alert('必須項目が未記入の箇所があります');
    }else{
        var regexp = /^([a-zA-Z0-9]{8,})$/;
        if(regexp.test(pass) != true) { 
            alert('パスワードが半角英数8文字以上になっていません'); 
        }
        if(pass != repass) { 
            alert('パスワードが再入力時と違っています'); 
        }
    }
};