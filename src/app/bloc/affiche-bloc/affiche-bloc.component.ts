import { Component, OnInit } from '@angular/core';
import { Bloc } from '../../models/Bloc';
import { ServiceblocService } from '../../Services/servicebloc.service';
import { Router } from '@angular/router';
import { Chambre, TypeChambre } from '../../models/chambre.model';
@Component({
  selector: 'app-affiche-bloc',
  templateUrl: './affiche-bloc.component.html',
  styleUrls: ['./affiche-bloc.component.css']
})
export class AfficheBlocComponent implements OnInit{
  blocs!: Bloc[];
  chambres:Chambre[]=[];

  constructor(private blocService: ServiceblocService,
    private router : Router) {}


  ngOnInit(): void{
   this.getBlocsList();
   this.blocService.compterChambresParBloc().subscribe(
    (res: number) => {
      this.chambres = [{ idChambre: 0, numChambre: res, typeC: TypeChambre.SINGLE,lastCleaningDate: null, // Replace with default value or null
        nextScheduledCleaningDate: null,
        cleaningScheduled: false }];
    },
    (error) => {
      console.error('Error fetching chambre count:', error);
    }
  );
  }


  private getBlocsList(){
    this.blocService.getBlocsList().subscribe(data => {
      this.blocs=data;
    })
  }


  updateBloc(idBloc:number){
    //this.router.navigate(['updateBloc',idBloc]);
  }


  DeleteBloc(bloc: Bloc): void {
    const isConfirmed = confirm('Are you sure you want to delete this bloc?');
    if (isConfirmed) {
      this.blocService.removeBloc(bloc.idBloc).subscribe(
        () => {
          this.blocs = this.blocs.filter(e => e.idBloc !== bloc.idBloc);
        },
        error => {
          console.error('Error during deletion:', error);
        }
      );
    }
  }
}
