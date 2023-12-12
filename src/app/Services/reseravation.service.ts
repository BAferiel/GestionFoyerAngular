
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Reservation } from '../models/reservation';
import { Universite } from '../models/universite';
import { Foyer } from '../models/foyer';
import { Bloc } from '../models/Bloc';
import { Chambre } from '../models/chambre.model';
import { User } from '../models/user.model';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReseravationService {
private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

   // CREATE
  addReservationtoDB(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/addReservation` , reservation);
  }
  // READ
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/retrieveAllReservation`);
  }
  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/retrieveReservation/${id}`);
  }
  // UPDATE
  updateReservation(reservation: Reservation,id: string): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/updateReservation/${id}`, reservation);
  }
  // DELETE
  deleteReservation(reserId: string): Observable<any> {
    const url = `${this.apiUrl}/deleteReservation/${reserId}`;

    console.log('DELETE Request URL:', url); // Log the request URL

    return this.http.delete(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Delete Reservation Error:', error); // Log any errors
          return throwError('Something went wrong while deleting the reservation.');
        })
      );
  }
  ////
  getAllUniversities(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/retrieveAllUniversities`);
  }
  getFoyerDetails(universiteNom:string):  Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/getFoyersWithCapacity/${universiteNom}`);
}
  findByFoyer(nomF: number): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/findByFoyer/${nomF}`);
  }
  findByBloc_IdBlocAndTypeC(idBloc: number): Observable<Chambre[]> {
  return this.http.get<Chambre[]>(`${this.apiUrl}/findByBloc_IdBlocAndTypeC/${idBloc}`);
}
  getEtudiantById(ideut: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/getEtudiant/${ideut}`);
}
postReservationWithIdEtudiantAndIdChambre(idChambre: number, reservation: Reservation, idEtudiant: number): Observable<Reservation> {
  return this.http.post<Reservation>(
    `${this.apiUrl}/postReservationWithIdEtudiantAndIdChambre/${idEtudiant}/${idChambre}`,
    reservation
  );
}

findByTypeCWhereAndCapacityChambreGreaterThanZero(typeChambre: string): Observable<Chambre[]> {
    const capitalizedTypeChambre = typeChambre.toUpperCase();
    return this.http.get<Chambre[]>(`${this.apiUrl}/findByTypeCWhereAndCapacityChambreGreaterThanZero/${capitalizedTypeChambre}`);
  }
  updateReservationById(id: string, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/updateReservationById/${id}`, reservation);
  }
}
