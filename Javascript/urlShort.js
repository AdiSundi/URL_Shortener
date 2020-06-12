const defaultTheme = "lightTheme";
let currentTheme = defaultTheme;
document.getElementById('lightTheme').addEventListener('click', function(){themeChanger(this.id)});
document.getElementById('darkTheme').addEventListener('click', function(){themeChanger(this.id)});
function themeChanger(elementID)
{
    console.log('Theme toggle clicked. Theme change to '+ elementID +' requested.');
    if (currentTheme===elementID) 
    {
        console.log('Theme changer called; No change needed; current theme: '+currentTheme);
    }
    else
    {
        themeChangeTemps = document.getElementsByClassName(currentTheme);
        document.getElementById(elementID).classList.add('active');
        document.getElementById(currentTheme).classList.remove('active');
        console.log('changing from '+currentTheme+" to "+ elementID);
        for (const i of themeChangeTemps) 
        {            
            i.classList.add(elementID);
            i.classList.remove(currentTheme);
            currentTheme=elementID;    
        }
        if (elementID==='lightTheme')
        {
            document.getElementById("hamburger-button-for-mobile-navbar").style.color='#3943B7';
        }
        else
        {
            document.getElementById("hamburger-button-for-mobile-navbar").style.color='#6E6A6F';
        }
    }
}