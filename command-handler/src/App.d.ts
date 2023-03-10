import BaseApp from "./BaseApp.js";
import CommandConstructor from "./CommandConstructor.js";
declare class App extends BaseApp {
    CommandConstructor: CommandConstructor;
    constructor();
    init(): Promise<void>;
}
export default App;
