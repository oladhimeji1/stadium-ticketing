const matches = document.getElementById('matches')
const footballContainer = document.getElementById('football')
const history = document.getElementById('history');
const navigate = document.getElementById('nav');

var seat, vipPrice, regPrice;

$('document').ready(() => { 
    $('.user').html(sessionStorage.getItem('email'))

    upcomingX();
    footballX();
    historyX();

   
})


$('#seat').change(() => {
    seat = $('#seat').val()

    if(seat == 'VIP'){
        $('#price').val(vipPrice)
    } else if(seat == 'regular'){
        $('#price').val(regPrice)
    }
})

function upcomingX(){
    upcoming.forEach((item, index) => {
    const element = document.createElement('div');
    element.innerHTML += `
    <div class="card" id="card" onclick='' title="Clic here to make a reservation">
        <img src="../img/stadium.jpg" alt="">
        <h3>${item.title}</h3>
        <div class="details1">
            <p>${item.date}</p>
            <p>${item.time}</p>
        </div>
        <div class="details1">
            <p>${item.seats} seats rem.</p>
            <p>&#8358;${item.price1} | &#8358;${item.price2}</p>
    </div>
    </div>
    `;

    matches.appendChild(element)

    element.addEventListener('click', () => match(item.title, item.date, item.time, item.seats, item.price1, item.price2))
    })
}

function footballX(){
    football.forEach((item, index) => {
    const element = document.createElement('div');
    element.innerHTML += `
    <div class="card" id="card" onclick='' title="Clic here to make a reservation">
        <img style='height: 10rem' src="../img/football.jpg" alt="">
        <h3>${item.title}</h3>
        <div class="details1">
            <p>${item.date}</p>
            <p>${item.time}</p>
        </div>
        <div class="details1">
            <p>${item.seats} seats rem.</p>
            <p>&#8358;${item.price1} | &#8358;${item.price2}</p>
    </div>
    </div>
    `;

    footballContainer.appendChild(element)

    element.addEventListener('click', () => match(item.title, item.date, item.time, item.seats, item.price1, item.price2))
    })
}

function match(title, date, time, seats, price1, price2){
    seat = $('#seat').val()
    vipPrice = price1;
    regPrice = price2;

    var id = Math.floor(Math.random() * 900);
    if(id < 10){
        id = 'STA/00' + id
    }else if(id > 10 && id < 100){
        id = 'STA/0' + id
    }else{
        id = 'STA/' + id
    }

    var uname = sessionStorage.getItem('email');

    $('#id').val(id)
    $('#oname').val(uname);
    
    $('#match').val(title)
    $('#date').html(date)
    $('#time').html(time)
    $('#seats').html(seats)

    if(seat == 'VIP'){
        $('#price').val(price1)
    } else if(seat == 'regular'){
        $('#price').val(price2)
    }
    $('#reserve-container').fadeIn(500)
}

$('.fa').click(() => {
    $('#reserve-container').fadeOut(500)
    $('#booking-details').fadeOut(500)
    // console.log(upcoming)
})

$('#btnx').click(() => {
    // This is where the form to buy a ticket would be sent
    // to the backend
    
    
    $('.reserve-container').fadeOut(300);

    // alert('Ticket booked successfully!! Kindly check "history" for your booking records')

    $.ajax({
        url: 'http://localhost:8080/Stadium/stadium-ticketing/request.php',  // Replace with your server-side script
        method: 'POST',
        data: {
            opr: 'Buy_ticket',
            id : $('#id').val(),
            email: $('#oname').val(), 
            matchx : $('#match').val(),
            seat:$('#seat').val(),
            price:$('#price').val(),
            date: $('#date').html(),
            time: $('#time').html(),
        },
        success: function(response) {
            console.log(response.trim());
            alert(response.trim())
           
        },
        error: function() {
            console.error('Error sending data to server');
        }
    });
})

function historyX(){
    $.ajax({
        url: 'http://localhost:8080/Stadium/stadium-ticketing/request.php',
        method: 'POST',
        data: {
            opr: 'historyX',
            email: sessionStorage.getItem('email'),
        },
        success: function(response) {
            try {
                var jsonData = $.parseJSON(response);
                if (jsonData.status === 'success') {
                    console.log(jsonData.data);
                    historydb =jsonData.data;
                    // alert('Success: ' + JSON.stringify(jsonData.data));
                    // Continue with your code to process the data here
                    historydb.forEach((item, index) => {
                    const element = document.createElement('div');
                    element.innerHTML += `
                            <div class="hist" title="Click here to preview receipt">
                                <div>
                                   <img src="../img/football.jpg" alt="">
                                   <h3>${item.Matchx}</h3> 
                                </div>
                                <p>${item.Time}</p>
                                <p>&#8358;${item.Price}</p>
                                <p>${item.Day}</p>
                            </div>`;

                        history.appendChild(element)

                    element.addEventListener('click', () => details(item.Ticket_ID, item.Matchx, item.Day, item.Time, item.Seat_type, item.Price))
                    })
                } else {
                    alert('Error: ' + jsonData.message);
                }
            } 
            catch (e) {
                console.error('Error parsing JSON:', e);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error sending data to server:', error);
            console.error('Error sending data to server:', xhr);
            console.error('Error sending data to server:', status);
        }
    });

    // football.forEach((item, index) => {
    // const element = document.createElement('div');
    // element.innerHTML += `
    //         <div class="hist" title="Click here to preview receipt">
    //             <div>
    //                <img src="../img/football.jpg" alt="">
    //                <h3>${item.title}</h3> 
    //             </div>
    //             <p>${item.time}</p>
    //             <p>&#8358;${item.price1}</p>
    //             <p>${item.date}</p>
    //         </div>`;

    //     history.appendChild(element)

    // element.addEventListener('click', () => details(item.title, item.date, item.time, item.seats, item.price1, item.price2))
    // })
}

function details(Ticket_ID, title, date, time, seats, price){
    seat = $('#seat').val()
    // vipPrice = price1;
    // regPrice = price2;

    var uname = sessionStorage.getItem('email');

    $('.id').html(Ticket_ID)
    $('.oname').html(uname);
    
    $('.match').html(title)
    $('.date').html(date)
    $('.time').html(time)
    $('.seats').html(seats)
    $('.price').html(price)
    // if(seat == 'VIP'){
    //     $('.price').val(price1)
    // } else if(seat == 'regular'){
    //     $('.price').val(price2)
    // }
    $('#booking-details').fadeIn(500)
}
function printDiv(divId) {
    var content = document.getElementById(divId).innerHTML;
    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Staduim Ticket</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

$('#match-item').click(() => {
    $('.content').show(500)
    $('.history').hide(500)
})

$('#history-item').click(() => {
    $('.content').hide(500)
    $('.history').show(500)
})

