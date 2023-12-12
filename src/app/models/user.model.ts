export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    cin!: string;
    roles!: string;
    prenomEt?: string; 
    ecole?: string;
    dataNaissance?: Date |string;
}
