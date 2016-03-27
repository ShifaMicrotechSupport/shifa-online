import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RepertoryService} from '../../shared/services/repertory.service';

@Component({
  selector: 'repertory-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderRepertoryComponent {

  repertoryList: Object;
  constructor(public repertoryService: RepertoryService) {
      this.repertoryList = repertoryService.get();
  }
}
