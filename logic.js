let form = document.querySelector('form');
let InputName = document.querySelector('#name');
let InputEmail = document.querySelector('#email');
let InputGreet = document.querySelector('#greet');
let body = document.querySelector('body');
let theme_selector = document.querySelector('.theme-selector');
let submit_btn = document.querySelector('.submit');


function setLocalStorage()
{
    let name = InputName.value;
    let email = InputEmail.value;
    let greet = InputGreet.value;
    localStorage.setItem("username",name);
    localStorage.setItem("email",email);
    sessionStorage.setItem("greet",greet);
    InputName.value = "";
    InputEmail.value = "";
    InputGreet = "";
}

submit_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    setLocalStorage()
})

document.addEventListener("DOMContentLoaded", function () {
    alert(sessionStorage.getItem("greet")+" "+localStorage.getItem("username"))
});

function setTheme()
{
    if(document.cookie)
    {
        if(document.cookie.split(' ')[0].split('=')[1].toLowerCase() == 'black')
        {
            body.style.backgroundColor = 'black';
        }
        else
        {
            body.style.backgroundColor = 'pink';
        }
    }
}

setTheme()
function createTheme()
{
    let inputele = document.createElement('input');
    inputele.classList.add('theme');
    form.appendChild(inputele);
    let buttonele = document.createElement('button');
    buttonele.innerHTML = "Submit";
    buttonele.classList.add("theme-click");
    form.appendChild(buttonele);
    let theme_btn = document.querySelector('.theme-click');
    return theme_btn;
}

function setCookie()
{
    let InputTheme = document.querySelector('.theme');
    let theme = InputTheme.value;
    const date = new Date();
    date.setDate(date.getDate() + 7);
    let expiry = date.toGMTString();
    document.cookie = `theme = ${theme} expires = ${expiry} path = /`;
}
theme_selector.addEventListener('click',(event)=>{
    event.preventDefault();
   let ele = document.querySelector('.theme');
   if(!ele)
   {
    theme_btn = createTheme();
    if(theme_btn)
    {
        console.log(document.cookie);
        theme_btn.addEventListener('click',(event)=>{
        event.preventDefault();
        setCookie();
        setTheme();
        setTimeout(()=>{
            form.removeChild(theme_btn);
            form.removeChild(InputTheme);
        },500);

        })
    }        
   }
})


console.log(document.cookie);
