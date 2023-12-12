import { Injectable } from '@angular/core';
import {Chambre} from "../models/chambre.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private _http: HttpClient) {}

  getChambres(): Observable<Chambre[]> {
    return this._http.get<Chambre[]>("http://localhost:8080/retrieveAllChambres");
  }

  addChambre(chambre:Chambre):Observable<Chambre>{
    return this._http.post<Chambre>("http://localhost:8080/addChambre",chambre);
  }
  deleteChambre(idChambre:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8080/deleteChambre/"+idChambre)
  }
  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this._http.put<Chambre>("http://localhost:8080/updateChambre", chambre);
  }

  scheduleCleaning(idChambre: number): Observable<any>{
    return this._http.put<any>("http://localhost:8080/cleaning/schedule/${idChambre}", null);
  }
}
