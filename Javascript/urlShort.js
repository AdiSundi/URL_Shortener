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
    let urlToShorten = document.getElementById('shorten_url');
    event.preventDefault();
    sendData(urlToShorten);
})

function sendData(urlToShorten) {
    console.log(urlToShorten.value);
}