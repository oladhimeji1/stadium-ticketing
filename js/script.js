const matches = document.getElementById('matches')
const footballContainer = document.getElementById('football')

var seat, vipPrice, regPrice;

$('document').ready(() => { 

    upcomingX()
    footballX()
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
    <div class="card" id="card" onclick='alert(${item})' title="Clic here to make a reservation">
        <img src="../img/aeroplane.jpg" alt="">
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
    <div class="card" id="card" onclick='alert(${item})' title="Clic here to make a reservation">
        <img src="../img/aeroplane.jpg" alt="">
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

    var uname = localStorage.getItem('uname');

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

function submitHandler(){
    // This is where the form to buy a ticket would be sent
    // to the backend
    $('#seat').val();
    $('#id').val()
    $('#oname').val()
    $('#price').val()
    $('#match').val()

}

$('#close').click(() => {
    $('#reserve-container').fadeOut(500)
    // console.log(upcoming)
})