import { Component, OnInit } from '@angular/core';
import { Bloc } from '../../models/Bloc';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceblocService } from '../../Services/servicebloc.service';

@Component({
  selector: 'app-modif-bloc',
  templateUrl: './modif-bloc.component.html',
  styleUrls: ['./modif-bloc.component.css']
})
export class ModifBlocComponent implements OnInit{
  //id: number;
  bloc: Bloc = new Bloc();

  idBloc : number=0;

  constructor(private blocService: ServiceblocService, private route : ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.idBloc = this.route.snapshot.params["idBloc"];
    this.blocService.findBlocById(this.idBloc).subscribe(data =>{
      this.bloc = data;
    },error => console.log(error));
  }

  goToBlocList(){
    this.router.navigate(['/blocList']);
  }
  onSubmit(){
    this.blocService.updateBloc(this.bloc,this.idBloc).subscribe(data =>{
      this.bloc = new Bloc();
      this.goToBlocList();
    }, error => console.log(error));
  }


}
