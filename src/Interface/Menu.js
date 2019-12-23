import Game from "../Game";

export default class Menu{
    isShow = false;
    html;
    content;
    constructor(id,title) {
        this.html =  document.createElement('div');
        this.html.classList.add(id);
        let el_title = document.createElement('h2');
        el_title.classList.add('title');
        el_title.innerText = title;
        this.content = document.createElement('div');
        this.content.classList.add('content');


        this.html.appendChild(el_title);
        this.html.appendChild(this.content);
    }
    Show(){
        this.isShow=true;
        Game.app.appendChild(this.html);
    }
    Hide(){
        this.isShow=false;
        Game.app.removeChild(Game.app.querySelector('.main-menu'))
    }
    MoveTo(target){
        this.Hide();
        target.Show();
    }
}