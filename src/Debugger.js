import StackDebugger from "./StackDebugger";
import FPSCounter from "./FPSCounter";

class Debugger {
    constructor() {
    }
    StartDebugger(){
        StackDebugger.StartRender()
        FPSCounter.StartRender()
    }
}
export default new Debugger();