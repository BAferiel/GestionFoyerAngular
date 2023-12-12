import {ChangeDetectorRef, Component} from '@angular/core';
import {Chambre} from "../../models/chambre.model";
import {ChambreService} from "../../Services/chambre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent {
  chambres!: Chambre[];


  constructor(private router:Router, private cs:ChambreService){}

  ngOnInit(){
    this.fetchChambres();
  }
  fetchChambres() {
    this.cs.getChambres().subscribe((chambres: Chambre[]) => {
      this.chambres = chambres;
      console.log(this.chambres);
    });
  }

  deleteChambre(chambre: Chambre){
    this.cs.deleteChambre(chambre.idChambre).subscribe(() => {
      this.fetchChambres();
    })
  }

  stringifyChambre(chambre: Chambre): string {
    return JSON.stringify(chambre);
  }

  scheduleCleaning(idChambre: number): void {
    console.log('idChambre:', idChambre);
    this.cs.scheduleCleaning(idChambre).subscribe(
      (chambre) => {
        // Handle success, if needed
        console.log('Cleaning scheduled successfully', chambre);
        this.fetchChambres();
      },
      (error) => {
        // Handle error, if needed
        console.error('Error scheduling cleaning', error);
      }
    );
  }
}
