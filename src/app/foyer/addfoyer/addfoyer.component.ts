import { Component, OnInit } from '@angular/core';
import { Foyer } from '../../models/foyer';
import { FoyerService } from '../../Services/foyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfoyer',
  templateUrl: './addfoyer.component.html',
  styleUrls: ['./addfoyer.component.css']
})
export class AddfoyerComponent implements OnInit {
  foyer: Foyer = new Foyer();

  constructor( private foyerService: FoyerService, private router: Router){
  }


  ngOnInit(): void{

  }

  saveFoyer(){
    this.foyerService.addFoyerFromDB(this.foyer).subscribe(data =>{
      console.log(data);
      this.getFoyersList();
    },
    error => console.log(error)
    );
  }


  getFoyersList(){
    this.router.navigate(['/allfoyer']);
  }



}
