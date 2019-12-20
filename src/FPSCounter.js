export default class FPSCounter {
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

    render(ctx) {
        this.count++;
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y, 70, 30);
        ctx.fillStyle = "#fff";
        ctx.font = "14px sans-serif";
        ctx.fillText(this.text*10+' fps', this.x+10, this.y+20, 100);

        ctx.globalAlpha = 1;
    }
}
