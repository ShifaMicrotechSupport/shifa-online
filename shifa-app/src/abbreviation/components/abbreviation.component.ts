import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AbbreviationService} from '../../shared/services/abbreviation.service';


@Component({
  selector: 'abbr-remedies',
  moduleId: module.id,
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class AbbreviationComponent {
  abbreviationData: Array<Object>;
  abbrList: Array<Object>;
  constructor(public abbreviationService: AbbreviationService) {
  	  this.abbrList = [{"rem":"A"},{"rem":"B"},{"rem":"C"},{"rem":"D"},{"rem":"E"},{"rem":"F"},{"rem":"G"},{"rem":"H"},{"rem":"I"},{"rem":"J"},{"rem":"K"},{"rem":"L"},{"rem":"M"},{"rem":"N"},{"rem":"O"},{"rem":"P"},{"rem":"Q"},{"rem":"R"},{"rem":"S"},{"rem":"T"},{"rem":"U"},{"rem":"V"},{"rem":"W"},{"rem":"X"},{"rem":"Y"},{"rem":"Z"}];
      this.abbreviationData = abbreviationService.get();
  }

  
  
}
