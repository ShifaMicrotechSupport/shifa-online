import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MedicaService} from '../../shared/services/medica.service';


@Component({
  selector: 'header-medica',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class HeaderMedicaComponent {
  medicaData: Object;
  constructor(public medicaService: MedicaService) {
      this.medicaData = medicaService.get();
  }

  
  
}
