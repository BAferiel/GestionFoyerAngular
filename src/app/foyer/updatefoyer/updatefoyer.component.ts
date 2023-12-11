import { Component, OnInit } from '@angular/core';
import { Foyer } from '../../models/foyer';
import { FoyerService } from '../../Services/foyer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent implements OnInit{
  foyer : Foyer = new Foyer();
  idfFoyer : number=0;

  constructor(private foyerService: FoyerService, private route : ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.idfFoyer = this.route.snapshot.params["idfFoyer"];
    this.foyerService.findFoyerById(this.idfFoyer).subscribe((data) =>{
      this.foyer = data;
    },error=> console.log(error));
  }

  goToFoyerList(){
    this.router.navigate(['/allfoyer']);
  }


  updateBlocS(){
    this.foyerService.updateFoyer(this.foyer,this.idfFoyer).subscribe((data) =>{
      console.log(data);
      this.foyer = new Foyer();
      this.goToFoyerList();
    },error =>console.log(error));

  }


  onSubmit(){
    this.foyerService.updateFoyer(this.foyer,this.idfFoyer).subscribe(data =>{
      this.goToFoyerList();
    }, error => console.log(error));
  }


}

