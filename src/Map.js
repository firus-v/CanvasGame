import Game from './Game'
import Block from './Block'
import ResourceLoader from "./ResourceLoader";
export default class Map{
    map = {
        front:[],
        back: [],
        objects:[]
    };
    constructor() {
    }
    //Создание тестовой карты
    CreateTestMap(){
        let front = [];
        front.push(new Block(3,{x:0,y:0}));
        front.push(new Block(3,{x:1,y:0}));
        front.push(new Block(2,{x:2,y:0}));
        front.push(new Block(1,{x:0,y:1}));
        front.push(new Block(1,{x:1,y:1}));
        this.map.front = front;
        for (let i = 0; i <10; i++) {
            for (let j = 0; j <100; j++) {
                let id=1;
                if(i==9){
                    id=3
                }
                if(i<9 && i>4){
                    id=2
                }
                front.push(new Block(id,{x:j,y:i}));
            }
        }
    }
    //Стартер отрисовки карты
    StartMapRender(){
        Game.stack.Add(this.BackgroundRender.bind(this));
        Game.stack.Add(this.MapRender.bind(this));
    }
    //Отрисовка карты
    MapRender(){
        this.map.front.map(elem=>{
            elem.Render();
        })
    }
    //Отрисовка игрового фона
    BackgroundRender(){
        Game.ctx.drawImage(
            ResourceLoader.Background,
            0,
            0,
            ResourceLoader.Background.width,
            ResourceLoader.Background.height,
            0,
            0,
            Game.canvas.width,
            Game.canvas.height
            )
    }
}