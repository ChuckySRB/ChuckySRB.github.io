import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEFAULT_LANG, LANG_TAG } from '../../utils/lang';

@Component({
  selector: 'app-lang',
  imports: [CommonModule],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent implements OnInit {
  supportedLanguages: string[] = [];
  currentLang: string = 'en';

  constructor() {
  }

  ngOnInit(): void {
    this.loadSupportedLanguages();
    this.currentLang = localStorage.getItem(LANG_TAG) || DEFAULT_LANG;
  }

  loadSupportedLanguages(): void {
    this.supportedLanguages = ['en', 'srb'];
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem(LANG_TAG, lang);
    window.location.reload();
  }
}
