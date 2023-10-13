var fullname, username, password, phone, email, address, fav, psw, rpsw;
var msgx = document.getElementById('msgx');

$('#btny').click(()=>{
    username = $('#username').val();
    password = $('#password').val();

    sessionStorage.setItem('email', username);
    const _data = {
        username: username,
        password: password
    }

    $('.loadery').fadeIn(300);
    $('.loadery').delay(1000);

    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        console.log(data)
        // console.log(data[0].UserType)
        // if(data == ![]){
        //     $('.msgbox').slideDown(500);
        //     $('.msgbox').delay(3000);
        //     $('.msgbox').slideUp(500);
        // }else if(data[0].UserType == 'Admin'){
        //     $('.loadery').show(500)
        //     $('.loadery').delay(2000)
        //     $('.loadery').hide(500, ()=>{
        //         window.location.assign('admin.html')
        //     })
        // }else if(data[0].UserType == 'user'){
        //     $('.loadery').show(500)
        //     $('.loadery').delay(2000)
        //     $('.loadery').hide(500, ()=>{
        //         window.location.assign('./pages/home.html')
        //     })
        // }
    })
    .catch(err => console.log(err));
    
    
});

$('#btnx').click(()=>{
    fullname = $('#surname').val() + ' ' + $('#oname').val();
    phone = $('#phone').val();
    email = $('#email').val();
    address = $('#address').val();
    fav = $('#fav').val();
    psw = $('#password').val();
    rpsw = $('#passwordx').val();

    if(psw !== rpsw){
        $('.msgbox').slideDown(200);
        msgx.innerHTML = 'Please make sure the passwords match';
        $('.msgbox').delay(3000);
        $('.msgbox').slideUp(500);
    } else{
        $('.sign').fadeOut(300);
        $('.loadery').fadeIn(300);
        $('.loadery').delay(1000);

        sessionStorage.setItem('uname', fullname);
        const _data = { 
            fullname: fullname, 
            phone: phone,
            email: email,
            address: address,
            fav: fav,
            psw: psw
        }
        var xhttp = new XMLHttpRequest();
    
        xhttp.onreadystatechange = function(err) {

            if (this.readyState == 4 && this.status == 200){

                str = xhttp.responseText;
                str = str.replace(/<\/?[^>]+>/gi, '');
                str = $.trim(str.replace('Ajax',''));
                str = $.trim(str.replace('Document',''));
                
                if(str=="student" || str=="lecturer" || str=="admin"){
                    sessionStorage.setItem('str', str);
                    window.location.assign('./pages/home.php')
                } else {
                    alert('Username or password is incorrect, please try again')
                }
            
            } else {
                console.log('Error reaching the server');
            }
        };
        xhttp.open("Get", "request.php?opr=Signup" + "&fullname=" + fullname + "&phone=" +phone + "&email=" +email + "&address=" +address + "&fav=" +fav + "&psw=" +psw, true);
        xhttp.send();

        // fetch('http://localhost:3000/reg-user', {
        //     method: 'POST',
        //     body: JSON.stringify(_data),
        //     headers: {'Content-type': 'application/json; charset=utf-8'}
        // })
        // // .then(response => response.json())
        // .then(datax => {
        //     console.log(datax)
        //     $('.loadery').fadeOut(300);
        //     // location.reload(true);
        //     $('.msgbox').slideDown(200);
        //     msgx.innerHTML = 'You have register successfully';
        //     $('.msgbox').delay(3000);
        //     $('.msgbox').slideUp(200, ()=>{
        //         location.assign('../login.php');
        //     });
            
        // })
        // .catch(err => console.log(err));

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