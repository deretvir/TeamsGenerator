import {Player} from "../Player/Player";

export type Team = {
    name?: string //opcjonalna nazwa, jeżeli puste można np. wykorzystać index do wyświetlenia który to team
    players: Player[]; //Każdy team musi mieć playersów, może mieć pusty array
}
