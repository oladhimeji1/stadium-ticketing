var fullname, username, password, phone, email, address, fav, psw, rpsw;
var msgx = document.getElementById('msgx');

$('#btny').click(()=>{
    username = $('#username').val();
    password = $('#password').val();

    sessionStorage.setItem('email', username);
    

    $('.loadery').fadeIn(300);
    $('.loadery').delay(1000);

    // $('.loadery').hide(500, ()=>{
    //     window.location.assign('./pages/matches.php')
    // })

    $.ajax({
        url: 'http://localhost:8080/Stadium/stadium-ticketing/request.php',  // Replace with your server-side script
        method: 'POST',
        data: {
            opr: 'Login',
            username: username,
            password: password
        },
        success: function(response) {
            console.log(response.trim());
            if (response.trim() == "Success"){
                $('.loadery').hide(500, ()=>{
                window.location.assign('./pages/matches.php');
            })
            }
            else{
                alert('Username or password is incorrect, please try and Register.');
                $('.loadery').hide(500, ()=>{
                    window.location.assign('./');
                   })
            }

        },
        error: function() {
            console.error('Error sending data to server');
        }
});
    
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
        
        $('.loadery').fadeIn(300);
        $('.loadery').delay(1000);

       
        
        $.ajax({
        url: 'http://localhost:8080/Stadium/stadium-ticketing/request.php',  // Replace with your server-side script
        method: 'POST',
        data: {
            opr: 'Signup',
            fullname: fullname,
            phone: phone,
            email: email,
            address: address,
            fav: fav, // Replace with the appropriate value
            psw: psw  // Replace with the appropriate value
        },
        success: function(response) {
            console.log('Data sent to server:', response);
            // // Assuming the server sends back a 'result' array, you can loop through it and display in recommendations
            // const recommendationItems = response.result.map(option => `<h4>${option}</h4>`).join('');
            // const recommendation = `
            //     <div class="bg-white p-4 rounded shadow mb-2">
            //         ${recommendationItems}
            //     </div>
            // `;
            // $('#recommendations').html(recommendation);
            // nextStep();
            $('.loadery').hide(500, ()=>{
            window.location.assign('../')
           })
        },
        error: function() {
            console.error('Error sending data to server');
        }
});

       
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