var username, password, fullname, username, email, psw, rpsw, phone;
var msgx = document.getElementById('msgx');

$('#btny').click(()=>{
    username = $('#username').val();
    password = $('#password').val();

    sessionStorage.setItem('username', username);
    const _data = {
        username: username,
        password: password
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        // console.log(data)
        // console.log(data[0].UserType)
        if(data == ![]){
            $('.msgbox').slideDown(500);
            $('.msgbox').delay(3000);
            $('.msgbox').slideUp(500);
        }else if(data[0].UserType == 'Admin'){
            $('.loadery').show(500)
            $('.loadery').delay(2000)
            $('.loadery').hide(500, ()=>{
                window.location.assign('admin.html')
            })
        }else if(data[0].UserType == 'user'){
            $('.loadery').show(500)
            $('.loadery').delay(2000)
            $('.loadery').hide(500, ()=>{
                window.location.assign('home.html')
            })
        }
    })
    .catch(err => console.log(err));
    
    
});

$('#btnx').click(()=>{
    fullname = $('#fullname').val();
    username = $('#username').val();
    psw = $('#password').val();
    rpsw = $('#passwordx').val();

    if(psw !== rpsw){
        $('.msgbox').slideDown(200);
        msgx.innerHTML = 'Please make sure the passwords match';
        $('.msgbox').delay(3000);
        $('.msgbox').slideUp(500);
    } else{
        $('.loadery').fadeIn(300);
        $('.loadery').delay(1000);

        const _data = { 
            fullname: fullname, 
            username: username,
            psw: psw
        }
        console.log(_data)
        fetch('http://localhost:3000/reg-user', {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {'Content-type': 'application/json; charset=utf-8'}
        })
        // .then(response => response.json())
        .then(datax => {
            console.log(datax)
            $('.loadery').fadeOut(300);
            // location.reload(true);
            $('.msgbox').slideDown(200);
            msgx.innerHTML = 'You have register successfully';
            $('.msgbox').delay(3000);
            $('.msgbox').slideUp(200, ()=>{
                location.assign('login.html');
            });
            
        })
        .catch(err => console.log(err));

        // setTimeout(()=>{
        //     $('.loadery').show(500)
        //     $('.content').hide(500)
        // }, 1000);
    }
    
});

$('#passwordx').keyup(()=>{
    psw = $('#password').val();
    rpsw = $('#passwordx').val();

    if(psw !== rpsw){
        $('.msgbox').slideDown(500);
    } else{
        $('.msgbox').slideUp(500);
    }
})