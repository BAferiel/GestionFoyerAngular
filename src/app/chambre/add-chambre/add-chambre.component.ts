import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../models/chambre.model";
import {ChambreService} from "../../Services/chambre.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit{
  newChambre: Chambre = new Chambre();
  isEdit: boolean = false;
  isChambreAdded: boolean = false;

  constructor(private cs: ChambreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.isEdit = params['edit'] === 'true';

      if (this.isEdit) {
        const chambreDetails = JSON.parse(params['chambre']);
        this.newChambre = { ...this.newChambre, ...chambreDetails };
      }
    });
  }

  addChambre() {
    if (this.isEdit) {
      this.cs.updateChambre(this.newChambre).subscribe(() => {
        this.showSuccessMessageAndNavigate('Updated');
      });
    } else {
      this.cs.addChambre(this.newChambre).subscribe(() => {
        this.showSuccessMessageAndNavigate('Added');
      });
    }
  }

  showSuccessMessageAndNavigate(action: string) {
    this.isChambreAdded = true;

    setTimeout(() => {
      this.isChambreAdded = false;
      this.router.navigate(['/chambrelist']);
    }, 2000);
  }

  getButtonLabel(): string {
    return this.isEdit ? 'Updating room' : 'Adding room';
  }
}
