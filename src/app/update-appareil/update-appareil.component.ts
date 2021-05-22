import { AppareilModel } from './../models/appareil.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-update-appareil',
  templateUrl: './update-appareil.component.html',
  styleUrls: ['./update-appareil.component.scss']
})
export class UpdateAppareilComponent implements OnInit {

  appareilModel: AppareilModel;

  constructor(private appareilService: AppareilService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.appareilModel = this.appareilService.getAppareilById(+id);
  }

  onSubmit(form: NgForm) {
    this.appareilModel.name = form.value['name'];
    this.appareilModel.status = form.value['status'];

    this.appareilService.updateAppareil(this.appareilModel);
    this.router.navigate(['/appareils']);
  }

  onAnnuler(): void {
    this.router.navigate(['/appareils']);
  }
}
