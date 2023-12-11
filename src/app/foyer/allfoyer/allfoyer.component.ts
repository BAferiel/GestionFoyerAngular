import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../../Services/foyer.service';
import { Foyer } from '../../models/foyer';
import { Router } from '@angular/router';
import { Bloc } from '../../models/Bloc';

@Component({
  selector: 'app-allfoyer',
  templateUrl: './allfoyer.component.html',
  styleUrls: ['./allfoyer.component.css']
})
export class AllfoyerComponent implements OnInit{
  foyers!: Foyer[];
  rechercheFoyer='';

  constructor(private foyerService: FoyerService,
    private router : Router) {}


  ngOnInit(): void{
    this.getFoyersList();
    this.foyerService.blocAffecterToFoyer().subscribe(
      (res: Bloc) => {
        this.foyers.forEach((foyer, index) => {
          foyer.blocs = res[index]?.idBloc || null;
        });
      },
      error => {
        console.error('Erreur lors de la récupération des blocs pour les foyers :', error);
      }
    );
  }
  deleteFoyer(event:any, foy:Foyer){

    if(confirm('est ce que vous voulez vraiment supprimer ce foyer')){
      event.target.innerText="Deleting..."
      this.foyerService.deleteFoyerFromDB(foy.idfFoyer).subscribe(()=>this.getFoyersList());
    }

  }

  private getFoyersList(){
    this.foyerService.getAllFoyerFromDB().subscribe(data => {
      console.log(data);
      this.foyers=data;
    })
  }

  goToAjout(){
    this.router.navigate(['/foyerList/addFoyer']);
  }
}

