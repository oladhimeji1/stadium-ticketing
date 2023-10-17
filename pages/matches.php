<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/match.css">
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
    <title>Document</title>
    <script src="../js/jquery.js"></script>
</head>
<body>

    <!-- Navbar -->
    <nav>
    <div class="container">
        <div class="inner">
            <h2>Stadium Tickes</h2>

            <div id="nav" class="nav">
                <li id="match-item">Matches</li>
                <li id="history-item">History</li>
            </div>

            <div class="welcome">
                <p>Welcome, <span class="user">Abdulrazaq Oladimeji</span></p>
                <img src="../img/aeroplane.jpg" alt="">
            </div>
        </div>
    </div>
    </nav>

    <section class="container">
        <div class="content content-head">
            <h1>Select a match</h1>
            <p>Book a ticket now to reserve a seat and enjoy your favourite match</p>
        </div>
        <div class="content content-body">
            <div class="upcoming">
                <h3>Upcoming matches</h3>
                <div id="matches" class="matches">
                     
                </div>
            </div>
            <div class="football">
                <h3>Football matches</h3>
                <div id="football" class="matches">
                    
                </div>
            </div>
        </div>
    </section>

    <section class="history">
    <div class="container">
        <div class="history content-head">
            <h1>Your History</h1>
            <p>History of tickets you buy</p>
        </div>
        <div id="history" class="history-body">
            
        </div>
    </div>
    </section>

    <div class="booking-details" id="booking-details">
        <div class="reserve">
            <div class="head" >
                <h2>Booking Details</h2>
                <i id="close" class="fa fa-close"></i>
            </div>

            <div class="label">
                <label for="id">Ticket ID: </label><span class="id">dhsajdh</span>
            </div>
            
            <div class="label">
                <label for="match">Match: </label> <span class="match">DVD vs CSV</span>
            </div>

            <div class="label">
                <label for="oname">Name: </label><span class="oname">Name</span>
            </div>

            <div class="label">
                <label for="price">Amount: &#8358;</label><span class="price">5000</span>
            </div>

            <div class="label">
                <label for="date">Date: </label><span class="date">12/12/2023</span>
            </div>

            <div class="label">
                <label for="time">Time: </label><span class="time">4:00 pm</span>
            </div>
            <button onclick="printDiv('booking-details')">Print Reciept</button>
        </div>
    </div>

    <!-- Reservation card -->
    <div id="reserve-container" class="reserve-container">
        <div class="reserve">
            <div class="head">
                <h2>Book a seat</h2>

                <i id="close" class="fa fa-close"></i>
            </div>
            

            <label for="id">Ticket ID</label><br>
            <input name="id" type="text" disabled class="user-input disabled" id="id"><br>
            
            <label for="oname">Name</label><br>
            <input name="oname" type="text" disabled class="disabled user-input" id="oname"><br>
            
            <label for="seat">Seat type</label><br>
            <select name="seat" id="seat" class="user-input">
                <option value="regular">Regular</option>
                <option value="VIP">VIP</option>
            </select><br>

            <label for="price">Price &#8358;</label><br>
            <input name="price" type="text" disabled class="disabled user-input" id="price"><br>
            
            <label for="match">Match</label><br>
            <input name="match" type="match" disabled class="disabled user-input" id="match"><br>
        
            <button id="btnx" class="btn">By Ticket</button>

            <p style="color: red;">This match is scheduled to hold on <span id="date"></span> by <span id="time"></span> and has <span id="seats"></span> tickets left</p>
        </div>
    </div>
    
    <script src="../js/script.js"></script>
    <script src="../js/data.js"></script>
</body>
</html>