$('.responsePopup').slideUp(0);
const KEY = "1b6628dace55c7a3ca797d2f329b3fc0";
$("#search").click(() => {
    const city = $("#city").val();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let windeg = data.wind.deg - data.wind.deg - data.wind.deg;
            $('.weatherResult').css("right", "105%");
            $('.weatherResult').css("visibility", "hidden");
            $("#winddeg").css("display", "flex");
            $("#winddeg").css("transform", `rotate(${windeg}deg)`);
            setTimeout(function() {
                $('#flag').empty();
                $("#temperature").empty();
                $("#posCity").empty();
                $("#clouds").empty();
                let wethDescp = data.weather[0];
                $('#flag').html(`<img src="https://flagsapi.com/${data.sys.country}/flat/64.png"></img>`);
                $(".weatherResult").css("display", "flex");
                $("#posCity").prepend(`
                    <span><i class="fa-solid fa-city"></i><p>${data.name}</p></span>`);
                $("#clouds").prepend(`
                    <span><i class="fa-solid fa-cloud"></i><p>${wethDescp.description}</p></span>`);
                $("#temperature").prepend(
                    `<span><i class="fa-solid fa-temperature-three-quarters"></i><p>${(data.main.temp_min - 273).toFixed(2)}° — ${(data.main.temp_max - 273).toFixed(2)}°</p></span>`);
                $('.weatherResult').css("visibility", "inherit");
                $('.weatherResult').css("right", "80%");
                if (parseInt((data.main.temp - 273).toFixed(2)) < 10) {
                    $(".wrap").css("backgroundImage", "url(./ries-bosch-nFYPUxElTkc-unsplash.jpg)");
                } else if (parseInt((data.main.temp - 273).toFixed(2)) > 10) {
                    $(".wrap").css("backgroundImage", "url(./dakota-roos-u7ldh_tgH3s-unsplash.jpg)");
                }
                },700);
            setTimeout(function() {
                $("#winddeg").css("transform", `rotate(${data.wind.deg}deg)`);
            },900)
        })
});

let userLocality = JSON.parse(localStorage.getItem(`userLocality`)) || [];
console.log(userLocality);
fetch(`https://get.geojs.io/v1/ip/geo.json`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            if(userLocality != data.city){

                setTimeout(function() {$('.responsePopup').slideDown(250);}, 300)
                $('.breadCrumpContainer').prepend(
                    `<div class="breadCrumpR xy" id="breadCrump">
                        </div>

                    <p class="txt">"${data.city}" Probably this is your locality?</p>
            
                    <div class="breadCrumpR xy2" id="breadCrump">
                        </div>        
                `);
            }else if(userLocality == data.city){
                $('.responsePopup').slideUp(250);
            const city = data.city;
            localStorage.setItem(`userLocality`, JSON.stringify(city))
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then(res => {
            return res.json();
        })
        .then(dat => {
            let windeg = dat.wind.deg - dat.wind.deg - dat.wind.deg;
            $('.weatherResult').css("right", "105%");
            $('.weatherResult').css("visibility", "hidden");
            
            $("#winddeg").css("display", "flex");
            $("#winddeg").css("transform", `rotate(${windeg}deg)`);
            setTimeout(function() {
                $('#flag').empty();
                $("#temperature").empty();
                $("#posCity").empty();
                $("#clouds").empty();
                let wethDescp = dat.weather[0];
                $('#flag').html(`<img src="https://flagsapi.com/${dat.sys.country}/flat/64.png"></img>`);
                $(".weatherResult").css("display", "flex");
                $("#posCity").prepend(`
                    <span><i class="fa-solid fa-city"></i><p>${dat.name}</p></span>`);
                $("#clouds").prepend(`
                    <span><i class="fa-solid fa-cloud"></i><p>${wethDescp.description}</p></span>`);
                $("#temperature").prepend(
                    `<span><i class="fa-solid fa-temperature-three-quarters"></i><p>${(dat.main.temp_min - 273).toFixed(2)}° — ${(dat.main.temp_max - 273).toFixed(2)}°</p></span>`);
                $('.weatherResult').css("visibility", "inherit");
                $('.weatherResult').css("right", "80%");
                if (parseInt((dat.main.temp - 273).toFixed(2)) < 10) {
                    $(".wrap").css("backgroundImage", "url(./ries-bosch-nFYPUxElTkc-unsplash.jpg)");
                } else if (parseInt((dat.main.temp - 273).toFixed(2)) > 10) {
                    $(".wrap").css("backgroundImage", "url(./dakota-roos-u7ldh_tgH3s-unsplash.jpg)");
                }
                },700);
            setTimeout(function() {
                $("#winddeg").css("transform", `rotate(${dat.wind.deg}deg)`);
            },900)
        })
        }
            
        $(`#btnSubm`).click(() => {
            $('.responsePopup').slideUp(250);
            const city = data.city;
            localStorage.setItem(`userLocality`, JSON.stringify(city))
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then(res => {
            return res.json();
        })
        .then(dat => {
            let windeg = dat.wind.deg - dat.wind.deg - dat.wind.deg;
            $('.weatherResult').css("right", "105%");
            $('.weatherResult').css("visibility", "hidden");
            
            $("#winddeg").css("display", "flex");
            $("#winddeg").css("transform", `rotate(${windeg}deg)`);
            setTimeout(function() {
                $('#flag').empty();
                $("#temperature").empty();
                $("#posCity").empty();
                $("#clouds").empty();
                let wethDescp = dat.weather[0];
                $('#flag').html(`<img src="https://flagsapi.com/${dat.sys.country}/flat/64.png"></img>`);
                $(".weatherResult").css("display", "flex");
                $("#posCity").prepend(`
                    <span><i class="fa-solid fa-city"></i><p>${dat.name}</p></span>`);
                $("#clouds").prepend(`
                    <span><i class="fa-solid fa-cloud"></i><p>${wethDescp.description}</p></span>`);
                $("#temperature").prepend(
                    `<span><i class="fa-solid fa-temperature-three-quarters"></i><p>${(dat.main.temp_min - 273).toFixed(2)}° — ${(dat.main.temp_max - 273).toFixed(2)}°</p></span>`);
                $('.weatherResult').css("visibility", "inherit");
                $('.weatherResult').css("right", "80%");
                if (parseInt((dat.main.temp - 273).toFixed(2)) < 10) {
                    $(".wrap").css("backgroundImage", "url(./ries-bosch-nFYPUxElTkc-unsplash.jpg)");
                } else if (parseInt((dat.main.temp - 273).toFixed(2)) > 10) {
                    $(".wrap").css("backgroundImage", "url(./dakota-roos-u7ldh_tgH3s-unsplash.jpg)");
                }
                },700);
            setTimeout(function() {
                $("#winddeg").css("transform", `rotate(${dat.wind.deg}deg)`);
            },900)
        })
        })
});



document.getElementById(`btnClose1`).onclick = function () {
    $('.responsePopup').slideUp(250);
}


