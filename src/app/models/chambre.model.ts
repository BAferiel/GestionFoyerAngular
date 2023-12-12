export enum TypeChambre {
  SINGLE = 'SIMPLE',
  DOUBLE = 'DOUBLE',
  SUITE = 'TRIPLE',
}

export class Chambre {
  idChambre!: number;
  numChambre!: number;
  typeC: TypeChambre = TypeChambre.SINGLE;
  lastCleaningDate!: Date;
  nextScheduledCleaningDate!: Date;
  cleaningScheduled!: boolean;
}
