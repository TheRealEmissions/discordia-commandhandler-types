import Base from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import DiscordClient from "ts-modular-bot-addon-discord_client-types";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Client: typeof DiscordClient;
    getClient(): import("ts-modular-bot-addon-discord_client-types/discord-client/src/App").default;
    static Events: typeof Events;
    getEvents(): import("ts-modular-bot-addon-events-types/events/src/App").default;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
}
export default BaseApp;
