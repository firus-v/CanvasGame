//Загрузчик игровых ресурсов
class ResourceLoader{
    Sprites;
    Background;
    isLoaded=false;
    constructor() {
    }
    //Главная функция загрузки
    Load(callback){
        this.Sprites = new Image();
        this.Sprites.addEventListener('load',()=>{
            this.Sprites.removeEventListener('load',()=>{});
            if(this.CheckLoad())
                callback();
        });
        this.Sprites.src = '../sprites/sprites.png';
        this.Background = new Image();
        this.Background.addEventListener('load',()=>{
            this.Background.removeEventListener('load',()=>{});
            if(this.CheckLoad())
                callback();
        });
        this.Background.src = '../sprites/background.png';
        if(this.isLoaded)
            return true;
    }
    //Проверка загруженности всех ресурсов
    CheckLoad() {
        return !(!this.Sprites.complete ||
            !this.Background.complete);
    }
}
export default new ResourceLoader()