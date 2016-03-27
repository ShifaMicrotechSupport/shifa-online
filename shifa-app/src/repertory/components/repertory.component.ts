import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RepertoryService} from '../../shared/services/repertory.service';
import {HeaderRepertoryComponent} from '../../repertory/header/header.component';

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-repertory',
  moduleId: module.id,
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES,HeaderRepertoryComponent]
})
export class RepertoryComponent {
  repertoryList: Object;
  constructor(public repertoryService: RepertoryService) {
      this.repertoryList = repertoryService.get();
  }

  
  remediesColor(str: string): string {
          var remedyCount = parseInt(str.split(",")[1]);
          if (remedyCount == 1)
          {
              return 'text-info'
          }
          else if (remedyCount == 2)
          {
              return 'text-success';
          }
          else {
              
              return 'text-danger';
          }
  }
  
}
