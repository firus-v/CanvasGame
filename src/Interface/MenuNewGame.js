import Game from '../Game'
import Menu from "./Menu"
import MenuMain from "./MenuMain"

class MenuNewGame extends Menu{
    constructor() {
        super('main-menu', 'Новая игра');

        let name_world = document.createElement("input");
        name_world.id = 'name_world';
        name_world.placeholder = 'Название мира';

        let b_start = document.createElement('button');
        b_start.classList.add('button');
        b_start.innerText = 'Начать';
        b_start.addEventListener('click', ()=>{
            this.Hide();
            Game.CreateNewWorld(name_world.value)}
            );

        let b_back = document.createElement('button');
        b_back.classList.add('button');
        b_back.innerText = 'Назад';
        b_back.addEventListener('click', ()=>{this.MoveTo(MenuMain)});



        this.content.appendChild(name_world);
        this.content.appendChild(b_start);
        this.content.appendChild(b_back);

    }
}
export default new MenuNewGame();