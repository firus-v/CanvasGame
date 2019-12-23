import Menu from "./Menu";
import MenuMain from "./MenuMain";

class MenuSettings extends Menu{
    constructor() {
        super('main-menu', 'Настройки');

        let b_back = document.createElement('button');
        b_back.classList.add('button');
        b_back.innerText = 'Назад';
        b_back.addEventListener('click', ()=>{this.MoveTo(MenuMain)});


        this.content.appendChild(b_back);

    }

}
export default new MenuSettings();