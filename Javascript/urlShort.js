const defaultTheme = "lightTheme";
let currentTheme = defaultTheme;
document.getElementById('lightTheme').addEventListener('click', function(){themeChanger(this.id)});
document.getElementById('darkTheme').addEventListener('click', function(){themeChanger(this.id)});
function themeChanger(elementID)
{
    console.log('clicked');
    if ((currentTheme==='lightTheme' && elementID==='lightTheme') || (currentTheme==='darkTheme' && elementID==='darkTheme'))
    {
        console.log('Theme changer called; No change needed; current theme: '+currentTheme);
    }
    else
    {
        themeChangeTemps = document.getElementsByClassName(currentTheme);
        console.log('changing from '+currentTheme+" to "+ elementID);
        for (const i of themeChangeTemps) 
        {            
            i.classList.add(elementID);
            i.classList.remove(currentTheme);
            currentTheme=elementID;    
        }
    }
}