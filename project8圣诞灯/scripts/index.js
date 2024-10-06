const lights = document.querySelectorAll('.light')
let time;
let flag = true;
function changeligth(){
    lights.forEach(light => {
        light.style.opacity = flag ? 1 : 0.3; 
        flag = !flag;
    });
}
function timestart(){
    if(flag){
        timestop();
    }
    flag = true;
    changeligth();
    let space = document.getElementById('space').value;
    time = setInterval(changeligth,space*1000);
}
function timestop(){
    clearInterval(time);
    time = null;
    lights.forEach(light => {
        light.style.opacity = 0.3;
    })
    flag = false;
}
function changespace(){
    let space = document.getElementById('space').value;
    time = setInterval(changeligth,space*1000);
}
window.onload = timestart;