import StackDebugger from "./StackDebugger";
import FPSCounter from "./FPSCounter";
import Game from "./Game";
class Debugger {
    constructor() {
    }
    StartDebugger(){
        Game.stack.Add(this.RenderDebugger.bind(this));
    }
    RenderDebugger(){
        StackDebugger.Render();
        FPSCounter.Render();
    }
}
export default new Debugger();