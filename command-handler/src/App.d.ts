import BaseApp from "./BaseApp.js";
import CommandConstructor from "./CommandConstructor.js";
declare class App extends BaseApp {
    CommandConstructor: CommandConstructor;
    Builders: typeof CommandConstructor;
    constructor();
    init(): Promise<void>;
    command(): typeof CommandConstructor.command;
    subcommand(): typeof CommandConstructor.subcommand;
    subcommandGroup(): typeof CommandConstructor.subcommandGroup;
}
export default App;
