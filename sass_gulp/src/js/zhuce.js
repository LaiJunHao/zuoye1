(function(){

    var tijiao = document.getElementsByClassName('tijiao')[0];

    var biaodan = document.getElementsByClassName('biaoge_b')[0];

    var yanzhengma = document.getElementById('yanzhengma');

    var yanzhengmaNum = document.getElementsByClassName('yanzhengmaNum')[0];

    var username = document.getElementById('username');

    var ssueser = username.parentElement.lastElementChild;

    var a = randomNumber(0,9);

    var b = randomNumber(0,9);

    var c = randomNumber(0,9);

    var d = randomNumber(0,9);

    var abcd =`${a}${b}${c}${d}`;

    yanzhengmaNum.innerHTML = abcd;

    tijiao.onclick = function(){

        var reg = /^[a-z][\da-z\-]{5,19}$/i

        if(!reg.test(username.value)){

            ssueser.innerText = '*用户名格式不正确';

            return false;
        }

        ssueser.innerText = '';

        var email = document.getElementById('email');

        var ssemail = email.parentElement.lastElementChild;

        var reg = /^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/i

        if(!reg.test(email.value)){

            ssemail.innerText = '*邮箱格式不正确';

            return false;
        }

        ssemail.innerText = '';

        var password = document.getElementById('mima');

        var sspassword = password.parentElement.lastElementChild;

        var reg = /^\S{1,20}$/

        if(!reg.test(password.value)){

            sspassword.innerText = '*密码格式不正确';

            return false;
        }

        sspassword.innerText = '';

        var confirm_pwd = document.getElementById('cfmima');

        var ssconfirm_pwd = confirm_pwd.parentElement.lastElementChild

        if(password.value != confirm_pwd.value){

            ssconfirm_pwd.innerText = '*两次密码不正确';

            return false;
        }

        ssconfirm_pwd.innerText = '';

        var ssyanzhengma = yanzhengma.parentElement.lastElementChild

        if((yanzhengma.value)*1 != abcd*1){

            ssyanzhengma.innerText = '*验证码不正确';

            return false;
        }

        ssyanzhengma.innerText = '';
        var agree = document.getElementById('agree');

        if(agree.checked == false){

            alert('请同意')
        }
    }

    biaodan.onclick = function(e){

        if(e.target.className == 'input_bg'){

            e.target.focus();

            e.target.style.backgroundColor = '#BFEFFF';
        }
    }

    username.onblur = function(){

        var _username = username.value;

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = ()=>{

            if(xhr.readyState == 4){

                if(xhr.responseText === 'yes'){

                    ssueser.innerText = '*用户名可用';
                }else{

                    ssueser.innerText = '*用户名已经被人占用';
                }
            }
        }

        xhr.open('get',`http://localhost:1234/sass_gulp/src/api/zhuce.php?username=${_username}`);

        xhr.send();
    }
})()