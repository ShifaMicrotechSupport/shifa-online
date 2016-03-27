import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RepertoryService} from '../../shared/services/repertory.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-chapter',
  moduleId: module.id, 
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class ChapterComponent {
  repertoryList: Object;
  constructor(public repertoryService: RepertoryService) {
      this.repertoryList = repertoryService.getChapter();
  }

  
}
