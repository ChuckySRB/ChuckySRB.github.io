import { afterRender, Component, Input, OnInit } from '@angular/core';
import { getTranslations, DEFAULT_LANG, LANG_TAG } from '../../utils/lang';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent implements OnInit {
  translations: any = {};
  lang: string = 'en';
  
  constructor() {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem(LANG_TAG) || DEFAULT_LANG;
    getTranslations(this.lang).then(translations => {
      this.translations = translations;
    });
  }

}
