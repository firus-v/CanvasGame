class Camera {
    position = {
        x: 0,
        y: 0
    };

    constructor(x = 0, y = 0) {
        this.position = {x: x, y: y};
        document.addEventListener('keydown',(e)=>{
            switch (e.key) {
                case 'w':
                    this.position.y++;
                    break;
                case 'a':
                    this.position.x--;
                    break;
                case 's':
                    this.position.y--;
                    break;
                case 'd':
                    this.position.x++;
                    break;
            }
            console.log(this.position)
        })
    }
}
export default new Camera(50,15);