import Game from "./Game";
import Camera from "./Camera";
import ResourceLoader from "./ResourceLoader";

export default class Block{
    size=32;
    sprites = {
        1:{
            id:1,
            name: 'Камень',
            description:'Просто камушек',
            sprite: {
                x:0,y:0, w:32,h:32
            }
        },
        2:{
            id:2,
            name: 'Земля',
            description:'Просто камушек',
            sprite: {
                x:32,y:0, w:32,h:32
            }
        },
        3:{
            id:3,
            name: 'Трава',
            description:'Просто камушек',
            sprite: {
                x:0,y:32, w:32,h:32
            }
        }
    };
    position={x:0,y:0};
    sprite;
    id;

    constructor(id, position) {
        this.position = position;
        this.id = id;
    }
    Render(){
        Game.ctx.drawImage(
            ResourceLoader.Sprites,
            this.sprites[this.id.toString()].sprite.x,
            this.sprites[this.id.toString()].sprite.y,
            this.sprites[this.id.toString()].sprite.w,
            this.sprites[this.id.toString()].sprite.h-1,
            this.position.x*this.size-Camera.position.x*this.size+Game.canvas.width/2-this.size/2,
            Camera.position.y*this.size+Game.canvas.height/2-this.size/2-this.position.y*this.size,
            this.size,
            this.size
            )
    }
}