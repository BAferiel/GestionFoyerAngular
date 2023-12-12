import { Chambre } from "./chambre.model";
import { User } from "./user.model";

export interface Reservation {
    idReservation: string;
    anneUniversitaire: Date;
    estValide: Status;
    Chambres: Chambre[]; // Corrected the type to Chambre[]
    Users: User[];
}

export enum Status {
    PENDING = "PENDING",
    VALIDATED = "VALIDATED",
    CANCELED = "CANCELED"
}
