import map from './Map'
import ResourceLoader from './ResourceLoader'
import FPSCounter from "./FPSCounter";
import StackDebugger from "./StackDebugger";
import Debugger from "./Debugger";
class Game {
    body;
    app;
    canvas;
    ctx;
    stackUpdate = [];
    ImgSprites;
    map;
    camera;

    //Управление сетком
    stack = {
        Add: (elem) => {
            let add = true;
            this.stackUpdate.map((item, index) => {
                if (elem.name === item.name) {
                    console.error('Stack call: namespace already uses');
                    add = false;
                }
            });
            if (add)
                this.stackUpdate.push(elem);
        },
        Del: (elem) => {

            this.stackUpdate.map((item, index) => {
                if (elem.name === item.name) {
                    this.stackUpdate.splice(index, 1);
                }
            })
        }
    };

    constructor() {
        //region Подготовка приложения
        this.body = document.querySelector('body');
        this.app = document.createElement('div');
        this.app.setAttribute('id', 'app');
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'canvas');
        this.app.appendChild(this.canvas);
        this.body.appendChild(this.app);
        this.ctx = this.canvas.getContext('2d');
        this.ResizeWindow();
        window.addEventListener('resize', this.ResizeWindow);
        this.Main();
    }
    ResizeWindow() {
        this.canvas.width = this.app.offsetWidth;
        this.canvas.height = this.app.offsetHeight;
    }
    //Отрисовка кадра
    Main = () => {
        window.requestAnimationFrame(() => {
            this.Main()
        });
        //Очистка холста
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //Вызов стека рендера
        this.stackUpdate.map(elem => elem())
    };
    //Создание мира
    CreateNewWorld(worldName) {
        //Запускаем загрузку
        this.stack.Add(this.RenderLoader.bind(this));
        //Создаем карту
        this.map = new map();
        //ЗАполняем карту
        this.map.CreateTestMap();
        //Начинаем загрузку ресурсов
        ResourceLoader.Load(()=>{
            //Отключаем загрузку
            this.stack.Del(this.RenderLoader.bind(this));
            //ЗАпускаем игру
            this.StartGame();
        })
    }
    //Рендер
    RenderLoader() {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('Loading...', this.canvas.width / 2, this.canvas.height / 2);
    }
    //Запуаск игра
    StartGame() {
        //Рендер карты
        this.map.StartMapRender();
        //Рендер отладочной информации
        Debugger.StartDebugger();
    }
}

export default new Game();

