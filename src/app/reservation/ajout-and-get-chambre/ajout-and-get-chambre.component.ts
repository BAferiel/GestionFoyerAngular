import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{ Reservation, Status } from '../../models/reservation';
import { ReseravationService } from '../../Services/reseravation.service';
import { UserService } from 'src/app/user.service';

import { Universite } from 'src/app/models/universite';
import { Foyer } from 'src/app/models/foyer';
import { Bloc } from 'src/app/models/Bloc';
import { User } from 'src/app/models/user.model';
import {ActivatedRoute} from "@angular/router";
import {FoyerService} from "../../Services/foyer.service";
import {ServiceblocService} from "../../Services/servicebloc.service";
import { Chambre,TypeChambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/Services/chambre.service';
import { Observable, catchError, of, tap } from 'rxjs';
@Component({
  selector: 'app-ajout-and-get-chambre',
  templateUrl: './ajout-and-get-chambre.component.html',
  styleUrls: ['./ajout-and-get-chambre.component.css']
})
export class AjoutAndGetChambreComponent {
  reservation: Reservation[]  = [];

  roomTypes: Chambre[] = [];
  selectedRoomType: number | undefined;
  universities: Universite[] = [];
  foyer: Foyer[]=[];
  foyerDetails: Foyer[] | undefined;
  Foyer: Foyer[] | undefined;
  blocs: Bloc[] = [];
  bloc: Bloc[] = [];
  chambres: Chambre[] = [];
  etudiant: User | undefined;
  idFoyer: number | undefined;
  selectedUniversity: string | undefined;
  selectedFoyer: number | undefined;
  selectedBloc: number | undefined;
  selectedChambreType: string | undefined;
  selectedChambre: number | undefined;
  nomUni: string | undefined;
  selectedReservation: Reservation | undefined;
  selectedUniversityName: string | undefined;
  selectEtudiant: number | undefined;
  
 
  typeChambre: TypeChambre | undefined;
  typeChambreValues: string[] = Object.values(TypeChambre).filter(value => typeof value === 'string');

  
  isEdit: boolean = false;
  isReservationAdded: boolean = false;
  constructor(
    private serviceblocService: ServiceblocService,
  
    private reservationService:ReseravationService,
    private foyerservice: FoyerService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router){
}
 ngOnInit(): void {

  this.fetchChambresByType();;
  //this.getEtudiantByID();
   this.fetchUniversities();


  }

  
  fetchChambresByType(): void {
    if (this.typeChambre) {
      this.reservationService.findByTypeCWhereAndCapacityChambreGreaterThanZero(this.typeChambre)
        .subscribe(
          (data: Chambre[]) => {
            console.log('Retrieved Chambres:', data);
            this.chambres = data;
          },
          (error) => {
            console.error('Error fetching chambres:', error);
          }
        );
    } else {
      console.error('No type of chambre selected');
    }
  }


  fetchUniversities(): void {
    this.reservationService.getAllUniversities().subscribe(
      (data: Universite[]) => {
        this.universities = data;
        console.log('data//', data)
      },
      (error) => {
        console.error('Error fetching universities:', error);
      }
    );
  }
  fetchFoyerDetails(selectedUniversity: string | undefined): void {
  console.log("iduniversity", selectedUniversity);    

  if (selectedUniversity) {
    this.foyerservice.getFoyerDetails(selectedUniversity).subscribe(
      (data: Foyer[] | Foyer) => {
        if (Array.isArray(data)) {
          this.foyerDetails = data;
          console.log('marche 1 university') // Update the variable to foyerDetails
        } else {
          this.foyerDetails = [data];
          console.log('marche 2 university') // Wrap single object in an array
        }
      },
      (error) => {
        console.error('Error fetching foyers:', error);
      }
    );
  } else {
    console.error('No university selected');
  }
}


findByFoyer(selectedFoyer: number | undefined): void {
  console.log("idfoyer", selectedFoyer)
  if (this.selectedFoyer) {
   
    this.serviceblocService.findByFoyer(selectedFoyer).subscribe(
      (data: Bloc[]) => {
        this.bloc = data;
        console.log('marche foyer 1')
      },
      (error) => {
        console.error('Error fetching blocs:', error);
      }
    )
      
  }
}
findByBloc_Id(selectedBloc:number | undefined): void {
  console.log("idbloc", selectedBloc)
  if (this.selectedBloc) {
   
    this.reservationService.findByBloc_IdBlocAndTypeC(this.selectedBloc).subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
      },
      (error) => {
        console.error('Error fetching chambres:', error);
      }
    )
  }
}

findByTypeCWhereAndCapacityChambreGreaterThanZero(selectedChambreType: string | undefined): Observable<Chambre[]> {
  console.log('typechambre', selectedChambreType);
  if (selectedChambreType) {
    return this.reservationService.findByTypeCWhereAndCapacityChambreGreaterThanZero(selectedChambreType).pipe(
      tap((data: Chambre[]) => {
        this.chambres = data;
        console.log('find chambre', data);
      }),
      catchError((error) => {
        console.error('Error fetching chambres:', error);
        // Handle error or return a default value as needed
        return of([] as Chambre[]);
      })
    );
  } else {
    // Return an empty observable if no type is selected
    return of([] as Chambre[]);
  }
}
Reservation(selectedChambre: number | undefined, selectedReservation: Reservation | undefined, selectEtudiant: number | undefined) {
  selectedReservation = this.addReservation(); 
  selectEtudiant = this.userService.getUser().id;
  selectedChambre=this.chambres[0].idChambre;
  this.userService.getuserbyid(selectEtudiant).subscribe(
    (data: any) => {
      
      console.log('got user id',selectEtudiant)
    },
    (error) => {
      console.log('erruer get user id')
      console.error('Error fetching user:', error);
    }
  );
    this.reservationService.postReservationWithIdEtudiantAndIdChambre(selectedChambre, selectedReservation, selectEtudiant)
      .subscribe(
        (response: any) => {
          console.log('Reservation response:', response);
          this.redirectToListPage();
        },
        (error: any) => {
          console.log('Reservation error:', error);
          console.error('Error making reservation:', error);
        
        }
      );
  
}
redirectToListPage() {
  this.router.navigate(['/list/listreservation']); // Replace '/list' with your actual list page route
}
  


addReservation(): Reservation {
 const reservation: Reservation = {
    idReservation: this.generateRandomId(),
    anneUniversitaire: new Date(),
    estValide: Status.PENDING,
    Chambres: this.chambres, // Assuming this.chambres is an array of Chambre objects
    Users: [this.userService.getUser()] 
  };
  console.log('reservation', reservation)
  console.log('reservation id', reservation.idReservation);

  this.reservationService.addReservationtoDB(reservation).subscribe(
    (data: Reservation) => {
      if (data ) {
        const { idReservation, anneUniversitaire, estValide } = data;
        console.log('idReservation:', idReservation);
        console.log('anneUniversitaire:', anneUniversitaire);
        console.log('estValide:', estValide);
      }
    },
    (error: any) => {
      console.error('Error adding reservation:', error);
    }
  );
  return reservation;
}
generateRandomId(): string {
  return Math.random().toString(36).substr(2, 9); // Adjust length if needed
}

}


