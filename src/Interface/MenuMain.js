import Menu from "./Menu";
import MenuNewGame from "./MenuNewGame";
import MenuMultiplayer from "./MenuMultiplayer";
import MenuLoadGame from "./MenuLoadGame";
import MenuSettings from "./MenuSettings";

class MenuMain extends Menu{
    constructor() {
        super('main-menu', 'Canvas Game');

        let b_singleGame = document.createElement('button');
        b_singleGame.classList.add('button');
        b_singleGame.innerText = 'Новая игра';
        b_singleGame.addEventListener('click', ()=>{this.MoveTo(MenuNewGame)});

        let b_load = document.createElement('button');
        b_load.classList.add('button');
        b_load.innerText = 'Загрузить';
        b_load.addEventListener('click', ()=>{this.MoveTo(MenuLoadGame)});

        let b_multiplayer = document.createElement('button');
        b_multiplayer.classList.add('button');
        b_multiplayer.innerText = 'Мультиплеер';
        b_multiplayer.addEventListener('click', ()=>{this.MoveTo(MenuMultiplayer)});

        let b_settings = document.createElement('button');
        b_settings.classList.add('button');
        b_settings.innerText = 'Настройки';
        b_settings.addEventListener('click', ()=>{this.MoveTo(MenuSettings)});


        this.content.appendChild(b_singleGame);
        this.content.appendChild(b_load);
        this.content.appendChild(b_multiplayer);
        this.content.appendChild(b_settings);

    }

}
export default new MenuMain();