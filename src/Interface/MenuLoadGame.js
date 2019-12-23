import Menu from "./Menu";
import MenuMain from "./MenuMain";
import saves from '../../saves/save'

class MenuLoadGame extends Menu{
    constructor() {
        super('main-menu', 'Настройки');

        let b_back = document.createElement('button');
        b_back.classList.add('button');
        b_back.innerText = 'Назад';
        b_back.addEventListener('click', ()=>{this.MoveTo(MenuMain)});

        let save_html = document.createElement('ul');
        let save_list = saves;
        save_list.map(elem=>{
            let result = document.createElement('li');
            result.classList.add('load_elem');
            result.innerText = elem.name;
            save_html.appendChild(result);
        });


        this.content.appendChild(save_html);
        this.content.appendChild(b_back);

    }

}
export default new MenuLoadGame();