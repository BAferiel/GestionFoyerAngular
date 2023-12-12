import { Component , OnInit} from '@angular/core';
import { ReseravationService } from 'src/app/Services/reseravation.service';
import { Reservation } from 'src/app/models/reservation'; 
import { Chambre } from 'src/app/models/chambre.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affichreservasation',
  templateUrl: './affichreservasation.component.html',
  styleUrls: ['./affichreservasation.component.css']
})
export class AffichreservasationComponent {
  reservations!: Reservation[] | undefined;
  reservation: Reservation | undefined;
  chambre: Chambre | undefined;
  user: User | undefined;
  reser:string | undefined
  constructor(private reservationService: ReseravationService, private router: Router) { }


  ngOnInit(): void {
   this.getReservation();
  }
  getReservation(){
    this.reservationService.getAllReservations().subscribe(data => {
      console.log(data);
      this.reservations=data;
    })
  }
  deleteReservation(event: any, reser: string): void {
  if (confirm('Est-ce que vous voulez vraiment supprimer cette réservation ?')) {
    event.target.innerText = "Deleting...";
    this.reservationService.deleteReservation(reser).subscribe(() => this.getReservation());
  }
}
goToReservation(){
  this.router.navigate(['/reservationList/addReservation']);
}
}
