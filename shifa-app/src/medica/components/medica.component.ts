import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MedicaService} from '../../shared/services/medica.service';
import {MMRemediesComponent} from './../remedies/remedies.component';
import {HeaderMedicaComponent} from './../header/header.component';


@Component({
  selector: 'sd-medica',
  moduleId: module.id,
  templateUrl: './medica.component.html',
  styleUrls: ['./medica.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES,HeaderMedicaComponent,MMRemediesComponent]
})
export class MedicaComponent {
  medicaData: Object;
  constructor(public medicaService: MedicaService) {
      this.medicaData = medicaService.get();
  }

  
  
}
