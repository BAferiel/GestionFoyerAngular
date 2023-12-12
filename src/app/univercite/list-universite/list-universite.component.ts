import {Component, OnInit, ViewChild} from '@angular/core';
import { Universite } from 'src/app/models/universite';
import { UniversiteService} from 'src/app/Services/universite.service';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit{
  @ViewChild('exampleModal') exampleModal: any;
  liste:Universite[]=[];
  universite:Universite=new Universite();
  revenu:Foyer=new Foyer();
  foyer:Foyer[]=[];
  rechercheUniversite='';

  universitrtoupdate:Universite={
    idUniversite:0,
    nomUniversity:"",
    adress:"",
    foyer: {
      idfFoyer:0,
      nomFoyer:"",
      capaciteFoyer:0,
      blocs:[]
    }
  };

  constructor(private router:Router, private us1:UniversiteService){}
  ngOnInit(){
    this.fetchuniversite()
    this.us1.getFoyerNotAssigned().subscribe((res:Foyer[])=>this.foyer=res);
   }

    fetchuniversite(){
      this.us1.getUniversiterFromDB().subscribe(
        (res: Universite[]) => {
          console.log('Received universities:', res);
          this.liste = res;
        },
        (error) => {
          console.error('Error fetching universities:', error);
        }
      );

    }

  deleteUniversite(event:any , universite:Universite){
    if(confirm('est ce que vous voulez vraiment supprimer')){
      event.target.innerText="Deleting..."

      this.us1.deleteUniversiteFromDb(universite.idUniversite).subscribe(()=> this.fetchuniversite());
    }

  }
  information(universite:Universite){
    this.universitrtoupdate=universite;
  }

  updateUniversite(){
    this.us1.UpdateUniversite(this.universitrtoupdate).subscribe();
    this.exampleModal.dismiss();
  }

}
