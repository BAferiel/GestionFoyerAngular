import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReseravationService } from 'src/app/Services/reseravation.service';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
  styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {
  reservationId: string = ''; // Variable to store the reservation ID
  reservation: Reservation | undefined;
  reservations!: Reservation[] | undefined

  constructor(
    private ReservationService: ReseravationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['idReservation'];
    this.ReservationService.getReservationById(this.reservationId).subscribe(
      (data) => {
        this.reservation = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToReservationList() {
    this.router.navigate(['/reservation/listreservation']);
  }

  onSubmit() {
    if (this.reservation) {
      this.ReservationService.updateReservationById(
        
        this.reservationId,this.reservation
      ).subscribe(
        (data) => {
          this.goToReservationList();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
