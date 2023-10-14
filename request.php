<?php
// connection to database

// $servername = "localhost:3302";
// $username = "root";
// $password = ""; 
// $dbname = "examhall_db";

// mike connection
$servername = "localhost:3306";
$username = "root";
$password = ""; 
$dbname = "Stadiumdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$state = $_REQUEST['opr'];

// switching request case
    switch($state){
        case 'Signup':
            Signup();
            break;
        case 'Login':
            login();
            break;
        case 'Buy_ticket':
            Buy_ticket();
            break;
        case 'historyX':
            historyX();
            break;
    }

// signup function 
function Signup(){
    // echo "not";
    
    $fullname = $_REQUEST['fullname'];
    $phone = $_REQUEST['phone'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];
    $fav = $_REQUEST['fav'];
    $psw = $_REQUEST['psw'];
    
    global $conn;
    
    // Creating a prepared statement to insert data into the 'registration' table.
    $stmt = $conn->prepare("INSERT INTO registration (fullname, email, phone, address, fav, password) VALUES (?, ?, ?, ?, ?, ?)");
    
    // Binding parameters to the prepared statement.
    $stmt->bind_param("ssssss", $fullname, $email, $phone, $address, $fav, $psw); 

    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Closing the prepared statement to free up resources.
    $stmt->close();
    
    // Closing the database connection.
    $conn->close();
}

// login in function
function login(){
    $username =  $_REQUEST['username'];
    $password = $_REQUEST['password'];
    global $conn;
    $sql = "SELECT  * FROM registration WHERE email='" .$username . "' and password = '". $password."'";
    $result = mysqli_query($conn,$sql);
    $row  = mysqli_fetch_array($result);
    
    $_SESSION["username"] = $row['email'];
    $_SESSION["password"] = $row['password'];
    
    $count=mysqli_num_rows($result);
    if( $_SESSION["username"] == $username  && $_SESSION["password"] == $password) {
        echo "Success";
    }

    else{
        echo  "Username or password is not valid";
    }
    $conn->close();
}

function Buy_ticket(){
    // echo "not";
    
    $id = $_REQUEST['id'];
    $email = $_REQUEST['email'];
    $matchx = $_REQUEST['matchx'];
    $seat = $_REQUEST['seat'];
    $price = $_REQUEST['price'];
    $date = $_REQUEST['date'];
    $time = $_REQUEST['time'];
    
    global $conn;
    
    // Creating a prepared statement to insert data into the 'registration' table.
    $stmt = $conn->prepare("INSERT INTO buy_ticket (Ticket_ID, Name, Seat_type, Price, Matchx,Day,Time) VALUES (?, ?, ?, ?, ?,?,?)");
    
    // Binding parameters to the prepared statement.
    $stmt->bind_param("sssssss", $id, $email, $seat, $price, $matchx,$date,$time); 

    if ($stmt->execute()) {
        echo 'Ticket booked successfully!! Kindly check "history" for your booking records';
    } else {
        echo "Error: " . $stmt->error;
    }

    // Closing the prepared statement to free up resources.
    $stmt->close();
    
    // Closing the database connection.
    $conn->close();
}

function historyX(){
    $email = $_REQUEST['email'];
    global $conn;
    $sql = "SELECT * FROM buy_ticket WHERE Name='" .$email . "'  ORDER BY Day ASC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $response = array(); // Create an empty array to hold the data

        while($row = $result->fetch_assoc()) {
            $item = array(
                'Ticket_ID' => $row['Ticket_ID'],
                'Name' => $row['Name'],
                'Seat_type' => $row['Seat_type'],
                'Price' => $row['Price'],
                'Matchx' => $row['Matchx'],
                'Day' => $row['Day'],
                'Time' => $row['Time'],
            );

            $response[] = $item; // Add the item to the response array
        }

        // Send the response as JSON
        echo json_encode(array('status' => 'success', 'data' => $response));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'You do not have any exam today, check timetable below for more details.'));
    }

    $conn->close();
}

    
?> 