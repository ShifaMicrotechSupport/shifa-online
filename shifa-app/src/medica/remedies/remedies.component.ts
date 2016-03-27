import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'materia-remedies',
  moduleId: module.id,
  templateUrl: './remedies.component.html',
  styleUrls: ['./remedies.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class MMRemediesComponent {
  remediesList:Array<Object>;
  constructor() {
    this.remediesList = [{"rem":"arum-m"},{"rem":"arum-t"},{"rem":"arund"},{"rem":"arund-d"},{"rem":"asaf"},{"rem":"asar"},{"rem":"asc-c"},{"rem":"asc-t"},{"rem":"asim"},{"rem":"aspar"},{"rem":"calc-caust"}];
  
  }

}
