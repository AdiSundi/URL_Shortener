const defaultTheme = "lightTheme";
let currentTheme = defaultTheme;
document.getElementById('lightTheme').addEventListener('click', function() { themeChanger(this.id) });
document.getElementById('darkTheme').addEventListener('click', function() { themeChanger(this.id) });

function themeChanger(elementID) {
    console.log('Theme toggle clicked. Theme change to ' + elementID + ' requested.');
    if (currentTheme === elementID) {
        console.log('Theme changer called; No change needed; current theme: ' + currentTheme);
    } else {
        themeChangeTemps = document.getElementsByClassName(currentTheme);
        NoOfThemeClassesToChange = themeChangeTemps.length;
        // for (var i = 0; i < NoOfThemeClassesToChange; i++) {
        //     console.log(themeChangeTemps[i]);
        // }
        document.getElementById(elementID).classList.add('active');
        document.getElementById(currentTheme).classList.remove('active');
        console.log('changing from ' + currentTheme + " to " + elementID);
        //console.log(themeChangeTemps.length);
        for (var i = 0; i < NoOfThemeClassesToChange; i++) {
            //console.log('changing ' + themeChangeTemps[0].classList + ' to ' + elementID);
            themeChangeTemps[0].classList.add(elementID);
            themeChangeTemps[0].classList.remove(currentTheme);
            //console.log(themeChangeTemps.length);
        }
        if (elementID === 'lightTheme') {
            document.getElementById("hamburger-button-for-mobile-navbar").style.color = '#3943B7';
        } else {
            document.getElementById("hamburger-button-for-mobile-navbar").style.color = '#6E6A6F';
        }
        currentTheme = elementID;
    }
}
let form = document.getElementById("ShortenForm");
form.addEventListener("submit", function(event) {
    let urls = document.getElementById('shorten_url');
    event.preventDefault();
    let urlToShorten;
    let urls1 = urls.value;
    let checkhttp = urls1.slice(0, 4);
    let checkhttps = urls1.slice(0, 5);
    if (checkhttp == 'http' && checkhttps == 'https') {
        urlToShorten = urls1;
    } else if (checkhttp == 'http' && checkhttps != 'https') {
        let urltemp = urls1.slice(4, urls1.length);
        console.log(urltemp);
        urlToShorten = 'https' + urltemp;
    } else {
        urlToShorten = 'https://' + urls1;
    }
    sendData(urlToShorten);
    form.reset();
})
let shorturlforcopy = '';

function sendData(urlToShorten) {
    console.log('url to shorten is');
    console.log(urlToShorten);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://url-shortener-service.p.rapidapi.com/shorten",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
            "x-rapidapi-key": "e39d010a65msh98a014752b0de3ep12eb64jsn01026054101f",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "url": urlToShorten
        }
    }

    $.ajax(settings).done(function(response) {
        console.log(response);
        shorturlforcopy = response.result_url;
        document.getElementById('shortenedUrl').innerHTML = shorturlforcopy;
        document.getElementById('message1').innerHTML = 'This is your shortened link! Click on it to copy to clipboard!\n Thanks for using this service!';
    });
}
document.getElementById('shortenedUrl').addEventListener('click', function() {
            const el = document.createElement('textarea');
            el.value = shorturlforcopy;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert("your link has been copied to clipboard!!\n Thanks for using this service!"
            })