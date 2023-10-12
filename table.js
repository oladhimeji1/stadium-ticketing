
var username;
var ola

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    // loadRecord()   
})

const api_url = 'http://localhost:3000/loadrec';

async function getapi(url){
    username = sessionStorage.getItem('username');

    const _data = { username: username }
    console.log(_data)
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    });
    var data = await response.json();
    console.log(data);
    if(response){
        $('#tab').fadeOut();
        $('.loadery').fadeIn(100)
        $('.loadery').delay(2000)
        $('.loadery').fadeOut(200)
        $('#tab').fadeIn(300);
    }
    show(data);
}
getapi(api_url);

function show(data){
    let tab = `<tr><th>Username</th>
    <th>From</th><th>To</th>
    <th>Take off</th><th>Arrival</th>
    <th>Seat Number</th><th>Flight Type</th>
    <th>Flight Time</th><th>Status</th><th>No of Travellers</th></tr>`;

    for(let ol of data){
        document.getElementById('tab').innerHTML = 
        tab += `<tr><td>${ol.Username}</td><td>${ol.xFrom}</td>
        <td>${ol.xTo}</td><td>${ol.Depdate}</td>
        <td>${ol.Retdate}</td><td>${ol.Flight_no}</td>
        <td>${ol.FlightType}</td><td>${ol.FlightTime}</td>
        <td>${ol.Status}</td><td>${ol.NoOfFlight}</td></tr>`
    }
}