import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Universite } from 'src/app/models/universite';
import { HttpClient } from '@angular/common/http';
import { Foyer } from '../models/foyer';
@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private _http:HttpClient) {
    console.log("je suis user service ")
  }
  addUniversiteFromDb(universite:Universite):Observable<Universite>{
    return this._http.post<Universite>("http://localhost:8080/addUniversite",universite)
  }
  getUniversiterFromDB():Observable<Universite[]>{
    return this._http.get<Universite[]>("http://localhost:8080/retrieveAllUniversities");
  }
  UpdateUniversite(universite:Universite):Observable<Universite>{
    return this._http.put<Universite>("http://localhost:8080/updateUniversite",universite);
  }
  deleteUniversiteFromDb(iduniveriste:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8080/deleteuniversite/"+iduniveriste);
  }
  getUniversiteById(idUniversite:number):Observable<Universite>{
    return this._http.get<Universite>("http://localhost:8080/getuniversitebyid/"+idUniversite);
  }
  getFoyerNotAssigned():Observable<Foyer[]>{
    return this._http.get<Foyer[]>("http://localhost:8080/getfoyernotaffected");
  }

}
