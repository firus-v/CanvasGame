import Game from './Game'
class StackDebugger{
    x = 0;
    y = 0;
    isShow = true;

    constructor(x, y, isShow = true) {
        this.x = x;
        this.y = y;
        this.isShow = isShow;
    }
    StartRender(){
        Game.stack.Add(this.renderStackDebugger.bind(this));
    }

    renderStackDebugger() {
        let stack = Game.stackUpdate;
        Game.ctx.fillStyle = "#666";
        Game.ctx.font = "14px sans-serif";
        stack.map((elem,index)=>{
            Game.ctx.fillText(elem.name, this.x+10, this.y+20+index*20);
        })

        Game.ctx.globalAlpha = 1;
    }
    SetPosition(x,y){
        this.x=x;
        this.y=y;
    }
}
export default new StackDebugger(10,50);