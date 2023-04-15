import BaseApp from "./BaseApp.js";
import CommandConstructor, { Command, Subcommand, SubcommandGroup } from "./CommandConstructor.js";
declare class App extends BaseApp {
    private CommandConstructor;
    constructor();
    getCommandConstructor(): CommandConstructor;
    init(): Promise<void>;
    command(obj: Command): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    subcommand(obj: Subcommand): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    subcommandGroup(obj: SubcommandGroup): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}
export default App;
