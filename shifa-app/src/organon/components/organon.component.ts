import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {OrganonService} from '../../shared/services/organon.service';


@Component({
  selector: 'sd-organon',
  moduleId: module.id,
  templateUrl: './organon.component.html',
  styleUrls: ['./organon.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class OrganonComponent {
  organonData: Object;
  organonIndex: string[];
  constructor(public organonService: OrganonService) {
      this.organonIndex = ['1-19','20-39','40-59','60-79','80-99','100-119','120-139','140-159','160-179','180-199','200-219','220-239','240-259','260-279','280-294']
      this.organonData = organonService.get();
  }

  
  
}
