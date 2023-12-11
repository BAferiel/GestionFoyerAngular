import {Bloc} from "./Bloc";

export class Foyer{
    idfFoyer!:number;
    nomFoyer!:string;
    capaciteFoyer!:number;
    blocs!: Bloc[];
    constructor(){
        this.idfFoyer=0;
        this.nomFoyer='';
        this.capaciteFoyer=0;
    }
}
