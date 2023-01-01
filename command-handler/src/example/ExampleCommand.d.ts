import { APIApplicationCommandInteraction } from "discord-api-types/v10";
declare class PingCommand {
    constructor();
    ping(): void;
    bot(interaction: APIApplicationCommandInteraction): void;
    user(interaction: APIApplicationCommandInteraction): void;
}
export default PingCommand;
