import { afterRender, Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { getTranslations, DEFAULT_LANG } from '../../utils/lang';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  translations: any = {};
  lang: string = 'en';
  

  
  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.lang = this.cookieService.get('chucky-lang');
    if (!this.lang) {
      this.lang = DEFAULT_LANG;
      this.cookieService.set('chucky-lang', this.lang);
    }
    this.translations = getTranslations(this.lang);
  }


}