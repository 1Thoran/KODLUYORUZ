let visitor = prompt("Hoşgeldiniz! Lütfen isminizi giriniz.");
let visitorName = document.querySelector("#myName")
visitorName.innerHTML = visitor


function showTime() {
    let now = new Date
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' })
    let time = now.toLocaleTimeString('tr-TR')
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = time + ' ' + day
}
setInterval(showTime, 1000);



let body = document.querySelector(".bg-dark")
body.style.color = "orange"
body.style.textAlign = "center"
body.style.fontSize = "20px"

visitorName.innerHTML = `${visitor}` // DOM öğesinin değerini prompt'a girilen değere eşitledim.

if (!visitor) {
    body.innerHTML = "Lütfen isim kısmını boş bırakmayın" // isim girilmediği takdirde  Body öğesini bir uyarı yazısıyla değiştirdim
}

