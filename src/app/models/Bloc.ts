import { Chambre } from "./chambre.model";

export class Bloc{
    idBloc: number;
    nomBloc: string;
    capaciteBloc : number;
    chambres!: Chambre[];
    constructor() {
        this.idBloc = 0;
        this.nomBloc = '';
        this.capaciteBloc = 0;
      }
}
