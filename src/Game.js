class Game {
    body;
    app;
    canvas;
    ctx;
    stackUpdate = [];
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

    Main = () => {
        window.requestAnimationFrame(() => {
            this.Main()
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.stackUpdate.map(elem => {
            elem();
        })
    };

    CreateNewWorld(worldName) {
        this.stack.Add(this.Loader.bind(this));
        setTimeout(() => {
            this.stack.Del(this.Loader.bind(this));
            this.StartGame();
        }, 1000);
    }

    Loader() {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('Loading...', this.canvas.width / 2, this.canvas.height / 2);
    }

    StartGame() {
        
    }
}

export default new Game();

