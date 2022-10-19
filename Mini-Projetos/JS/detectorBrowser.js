let nome = "";
let codeName = "";
let agentUser = "";

nome = `Propriedade appName: ${navigator.appName}`
document.querySelector("#name").innerHTML = nome
codeName = `Propriedade appCodeName: ${navigator.appCodeName}`
document.querySelector("#codename").innerHTML = codeName;
agentUser = `Propriedade userAgent: ${navigator.userAgent}`
document.querySelector("#info").innerHTML = agentUser;

let navegadores = "";

if(navegadores = navigator.userAgent.indexOf("Chrome") > -1){
    document.querySelector("#browser").innerHTML = "Google Chrome";
} else if(navegadores = navigator.userAgent.indexOf('Firefox') > -1){
    document.querySelector("#browser").innerHTML = "Mozilla Firefox";
} else if(navegadores = navigator.userAgent.indexOf("Safari") > -1){
    document.querySelector("#browser").innerHTML = "";
} else if(navegadores = navigator.userAgent.toLowerCase().indexOf("op") > -1){
    document.querySelector("#browser").innerHTML = "Opera";
} 

if ((chrome) && (safari)) safari = false;
if ((chrome) && (opera)) chrome = false;