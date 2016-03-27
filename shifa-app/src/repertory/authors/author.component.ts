import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';



import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'repertory-home',
  moduleId: module.id,
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class AuthorRepertoryComponent {
  authors = [
    {name:'Kent',src:'assets/images/authors/ic_mm_kent_logo.png', link:'Kent-Repertory'},
    {name:'Boenninghausen\'s',src:'assets/images/authors/ic_logo_boenninghausens.png', link:'Repertory'},
    {name:'Cyrus Maxwell Boger',src:'assets/images/authors/ic_mm_allen_logo.png', link:'Repertory'}
  ];
 
}
