import { Injectable } from '@angular/core';
import { Foyer } from '../models/foyer';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from '../models/Bloc';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor( private _http:HttpClient ) {
    console.log("je suis user service")
  }

  addFoyerFromDB(foyer:Foyer):Observable<Foyer>{
    return this._http.post<Foyer>("http://localhost:8080/addFoyer",foyer)
  }

  getAllFoyerFromDB():Observable<Foyer[]>{
    return this._http.get<Foyer[]>("http://localhost:8080/getfoyernotaffected");
  }

  deleteFoyerFromDB(idfFoyer:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8080/deleteFoyer/"+idfFoyer);
  }

  updateFoyer(foyer:Foyer, idfFoyer:number): Observable<Foyer>{
    return this._http.put<Foyer>('http://localhost:8080/updateFoyer/'+idfFoyer,foyer);
  }

  findFoyerById(idfFoyer:number) : Observable<Foyer>{
    return this._http.get<Foyer>('http://localhost:8080/getFoyer/'+idfFoyer);
  }

  recherchebynom(nomFoyer:string):Observable<Foyer[]>{
    return this._http.get<Foyer[]>('http://localhost:8080/getByNom/'+nomFoyer);
  }
  blocAffecterToFoyer(): Observable<Bloc>{
    return this._http.get<Bloc>('http://localhost:8080/foyers-with-bloc');
  }

}
