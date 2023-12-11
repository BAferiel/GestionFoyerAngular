import {Component, OnInit} from '@angular/core';
import { UniversiteService } from 'src/app/Services/universite.service';
import { Universite } from 'src/app/models/universite';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit{
  universite:Universite=new Universite();
  revenu:Foyer=new Foyer();
  foyer:Foyer[]=[];
  constructor(private us:UniversiteService , private ac:ActivatedRoute, private _router:Router){}
  ngOnInit(){
    const idUniversite = this.ac.snapshot.params['iduniveriste'];
    this.us.getUniversiteById(idUniversite).subscribe(
      (universite: Universite) => {
        this.universite = universite;
      },
      (error) => {
        console.log("erreur");
      }
    );
    this.us.getFoyerNotAssigned().subscribe((res:Foyer[])=>this.foyer=res)
  }
  addUniversite(){
    this.universite.foyer = {
      idfFoyer: this.revenu.idfFoyer,
      nomFoyer: '',
      capaciteFoyer: 0,
      blocs:[],
    };
    this.us.addUniversiteFromDb(this.universite).subscribe(()=>this._router.navigateByUrl("universites"));
  }

}
