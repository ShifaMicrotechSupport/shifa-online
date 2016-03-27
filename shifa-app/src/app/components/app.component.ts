import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from '../../navbar/navbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';

import {RepertoryComponent} from '../../repertory/components/repertory.component';
import {ChapterComponent} from '../../repertory/chapters/chapter.component';

import {MedicaComponent} from '../../medica/components/medica.component';
import {MMRemediesComponent} from '../../medica/remedies/remedies.component';
import {AbbreviationComponent} from '../../abbreviation/components/abbreviation.component';


import {HeaderRepertoryComponent} from '../../repertory/header/header.component';
import {HeaderMedicaComponent} from '../../medica/header/header.component';
import {AuthorRepertoryComponent} from '../../repertory/authors/author.component';
import {OrganonComponent} from '../../organon/components/organon.component';
import {ChatComponent} from '../../chat/components/chat.component';
import {ContactComponent} from '../../chat/contacts/contact.component';


import {NameListService} from '../../shared/services/name-list.service';
import {RepertoryService} from '../../shared/services/repertory.service';
import {MedicaService} from '../../shared/services/medica.service';
import {AbbreviationService} from '../../shared/services/abbreviation.service';
import {OrganonService} from '../../shared/services/organon.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, RepertoryService,MedicaService,AbbreviationService,OrganonService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/repertory', name: 'Repertory', component: AuthorRepertoryComponent },
  { path: '/kent-repertory', name: 'Kent-Repertory', component: ChapterComponent },
  { path: '/boenninghausen-repertory', name: 'Boenninghausen-Repertory', component: ChapterComponent },
  { path: '/cyrus-repertory', name: 'Cyrus-Repertory', component: ChapterComponent },
  { path: '/tmp-repertory', name: 'TMP-Repertory', component: RepertoryComponent },
  { path: '/medica-medica', name: 'Medica-Materia', component: MedicaComponent },
  { path: '/abbreviation', name: 'Abbreviation', component: AbbreviationComponent },
  { path: '/organon', name: 'Organon', component: OrganonComponent },
  { path: '/community', name: 'Community', component: ChatComponent },
  { path: '/chat', name: 'Chat', component: ChatComponent },
  { path: '/account', name: 'Account', component: RepertoryComponent },
  { path: '/settings', name: 'Settings', component: AboutComponent }
])
export class AppComponent {}
