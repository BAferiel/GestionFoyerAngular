import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Bloc } from '../models/Bloc';

@Injectable({
  providedIn: 'root'
})
export class ServiceblocService {

  constructor(private httpClient: HttpClient) { }


    getBlocsList(): Observable<Bloc[]>{
      return this.httpClient.get<Bloc[]>('http://localhost:8080/retrieveBlocs');
    }

    addBloc(bloc:Bloc): Observable<Object>{
      return this.httpClient.post('http://localhost:8080/addBloc',bloc);
    }

    updateBloc(bloc: Bloc, idBloc:number): Observable<Bloc>{
      return this.httpClient.put<Bloc>('http://localhost:8080/updateBloc/'+idBloc,bloc);
    }

    findBlocById(idBloc:number) : Observable<Bloc>{
      return this.httpClient.get<Bloc>('http://localhost:8080/findById/'+idBloc);
    }

    removeBloc(idBloc:number) : Observable<Bloc>{
      return this.httpClient.delete<Bloc>('http://localhost:8080/removeBloc/'+idBloc);
    }

    trouverNombreReservationsParBloc(idBloc: number): Observable<number> {
      return this.httpClient.get<number>('http://localhost:8080/trouverNombreReservationsParBloc/'+idBloc);
    }

    compterChambresParBloc(): Observable<number> {
      return this.httpClient.get<number>('http://localhost:8080/compterChambresParBloc');
    }
}
