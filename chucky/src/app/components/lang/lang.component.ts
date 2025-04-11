import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lang',
  imports: [CommonModule],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent implements OnInit {
  supportedLanguages: string[] = [];
  currentLang: string = 'en';

  ngOnInit(): void {
    this.loadSupportedLanguages();
    this.currentLang = localStorage.getItem('chucky-lang') || 'en';
  }

  loadSupportedLanguages(): void {
    this.supportedLanguages = ['en', 'srb'];
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem('chucky-lang', lang);
    window.location.reload();
  }
}
