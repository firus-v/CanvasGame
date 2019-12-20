import '../style.css';
import FPSCounter from './FPSCounter';

//region Подготовка приложения
let body = document.querySelector('body');
let app = document.createElement('div');
app.setAttribute('id','app');
let canvas = document.createElement('canvas');
canvas.setAttribute('id','canvas');
app.appendChild(canvas);
body.appendChild(app);

ResizeWindow();
let ctx = canvas.getContext('2d');


//Слушатель изменения размера окна
window.addEventListener('resize',ResizeWindow);
function ResizeWindow() {
    canvas.width = app.offsetWidth;
    canvas.height = app.offsetHeight;
}
//endregion

let fptCounter = new FPSCounter(10,10);

function Main(){
    //Очистка фрейма
    window.requestAnimationFrame(Main);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //Счетчик FPS
    fptCounter.render(ctx);
}
Main();