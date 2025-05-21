import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getTranslations, LANG_TAG, DEFAULT_LANG } from '../../utils/lang';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
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