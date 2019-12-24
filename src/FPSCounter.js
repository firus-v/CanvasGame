import Game from './Game'
class FPSCounter{
    x = 0;
    y = 0;
    count = 0;
    text = '';
    isShow = true;

    constructor(x, y, isShow = true) {
        this.x = x;
        this.y = y;
        this.isShow = isShow;
        setInterval(() => {
            this.text = this.count;
            this.count=0;
        }, 100);

    }
    Render() {
        this.count++;
        Game.ctx.globalAlpha = 0.7;
        Game.ctx.fillStyle = "#000000";
        Game.ctx.fillRect(this.x, this.y, 70, 30);
        Game.ctx.fillStyle = "#fff";
        Game.ctx.font = "14px sans-serif";
        Game.ctx.fillText(this.text*10+' fps', this.x+10, this.y+20, 100);

        Game.ctx.globalAlpha = 1;
    }
    SetPosition(x,y){
        this.x=x;
        this.y=y;
    }
}
export default new FPSCounter(10,10);