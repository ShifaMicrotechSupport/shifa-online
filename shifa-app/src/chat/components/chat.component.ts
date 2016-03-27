import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactComponent} from './../contacts/contact.component';

@Component({
  selector: 'sd-chat',
  moduleId: module.id,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES,ContactComponent]
})
export class ChatComponent {
  constructor() {}

}
