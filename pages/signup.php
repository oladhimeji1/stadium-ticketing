<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airline booking system | Regster page</title>
    <link rel="stylesheet" href="../css/signup.css">
    <script src="../js/jquery.js"></script>
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
            <p class="msgx" id="msgx">Passwords must match</p>
        </div>
        <div class="content sign">
            <h2>Signup</h2>
            <label for="surname">Surname</label><br>
            <input name="surname" type="text" placeholder="Enter surname" class="user-input" id="surname"><br>
            
            <label for="oname">Other name</label><br>
            <input name="oname" type="text" placeholder="Enter other name" class="user-input" id="oname"><br>
            
            <label for="phone">Phone</label><br>
            <input name="phone" type="password" placeholder="Enter phone number" class="user-input" id="phone"><br>
            
            <label for="email">Email</label><br>
            <input name="email" type="email" placeholder="Enter email" class="user-input" id="email"><br>
            
            
            <label for="address">Address</label><br>
            <input name="address" type="text" placeholder="Enter address" class="user-input" id="address"><br>

            <label for="fav">Favourite sport</label><br>
            <select name="fav" id="fav" class="user-input">
                <option value="football">Football</option>
                <option value="basketball">Backetball</option>
            </select><br>

            <label for="password">Password</label><br>
            <input name="password" type="password" placeholder="Enter Password" class="user-input" id="password">
            <br>
            

            <label for="passwordx">Repeat Password</label><br>
            <input name="passwordx" type="password" placeholder="Enter Password" class="user-input" id="passwordx">
            <br>
            
            <button id="btnx" class="btn">Signup</button>

            <p class="msg">Already have an account? <a href="../index.php">Login</a></p>
        </div>
    </div>

    <script src="../js/login.js"></script>
</body>
</html>