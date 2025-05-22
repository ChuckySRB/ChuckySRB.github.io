import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANG, getTranslations, LANG_TAG } from '../../utils/lang';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
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