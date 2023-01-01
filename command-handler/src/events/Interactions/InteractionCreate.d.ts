import { APIInteraction } from "discord-api-types/v10";
declare class InteractionCreateEvent {
    static commandUse(int: APIInteraction): Promise<void>;
    static buttonClick(int: APIInteraction): Promise<void>;
    static selectMenuClick(int: APIInteraction): Promise<void>;
    static modalSubmit(int: APIInteraction): Promise<void>;
}
export default InteractionCreateEvent;
