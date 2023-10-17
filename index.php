<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stadium booking system | Login page</title>
    <link rel="stylesheet" href="./css/signup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="./js/jquery.js"></script>
</head>
<body>
    <div class="container">
        <marquee style="color: white;" behavior="" direction="">Stadium Ticket Booking System</marquee>
        
        <div class="loadery">
            <div class="loaderx">
                <div class="loader"></div>
            <p>Loading, pleass wait...</p>
            </div>
        </div>
        
        <div class="msgbox">
            <p class="msgx" id="msgx">Username or password is incorrect, please try again.</p>
        </div>
        <div class="ccc">
            <div class="content">
                <h2>Login</h2>
                <label for="username">Email</label><br>
                <input name="username" type="text" placeholder="Enter email" class="user-input" id="username"><br>
                <label for="password">Password</label><br>
                <input name="password" type="password" placeholder="Enter Password" class="user-input" id="password">
                <br>
                <button id="btny" class="btn">Login</button>
                <p class="msg">Don't have an account? <a href="./pages/signup.php">Register</a></p>
            </div>
        </div>
    </div>

    <script src="./js/login.js"></script>
</body>
</html>