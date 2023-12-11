import { Component, OnInit } from '@angular/core';
import { Bloc } from '../../models/Bloc';
import { ServiceblocService } from '../../Services/servicebloc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-bloc',
  templateUrl: './ajout-bloc.component.html',
  styleUrls: ['./ajout-bloc.component.css']
})
export class AjoutBlocComponent implements OnInit{

  bloc: Bloc = new Bloc();

  constructor( private blocService: ServiceblocService, private router: Router){
  }


  ngOnInit(): void{

  }

  saveBloc(){
    this.blocService.addBloc(this.bloc).subscribe( (data) =>{
      console.log(data);
      this.goToBlocList();
    },
    error => console.log(error)
    );
  }


  goToBlocList(){
    this.router.navigate(['/blocList']);
  }

  onSubmit(){
    console.log(this.bloc);
    this.saveBloc();
  }
}
