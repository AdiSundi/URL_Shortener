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
    //console.log(urlToShorten);
    let getUrl = 'https://cu8.in/api/?action=short&urls=|' + urlToShorten + '|';
    //console.log(getUrl);
    fetch(getUrl).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        if (data.error.length != 0) {
            console.log(data.status);
            let tempHTML = '';
            for (i = 0; i < data.error.length; i++) {
                console.log(data.error[i]);
                tempHTML += data.error[i];
            }
            document.getElementById('shortenedUrl').innerHTML = tempHTML;
        } else {
            console.log(data.data.shortUrl.secure);
            document.getElementById('shortenedUrl').innerHTML = data.data.shortUrl.secure;
            shorturlforcopy = data.data.shortUrl.secure;
        }
    }).catch(function() {
        console.log("Error");
    });
}

// function httpGetAsync(getUrl, callback) {
//     console.log('ajax call started ');
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         console.log('response awaited');
//         if (xmlHttp.readyState == 4) {
//             callback(xmlHttp.responseText);
//             console.log(xmlHttp.responseText);
//         }
//         xmlHttp.open("GET", getUrl, true); // true for asynchronous 
//         xmlHttp.send(null);
//     }
// }
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
    alert("your link has been copied to clipboard!!");
})


// function copyFunc() {
//     document.getElementById('shortenedUrl').select();
//     //copyText.select();
//     document.getElementById('shortenedUrl').setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied your link!!");
// }