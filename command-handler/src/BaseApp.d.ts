import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import DiscordClient from "ts-modular-bot-addon-discord_client-types";
declare abstract class BaseApp extends HeadFile {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Client: typeof DiscordClient;
    static Events: typeof Events;
    abstract init(): void;
    getDependencies(): Dependency[];
}
export default BaseApp;
