import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lang',
  imports: [CommonModule],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent implements OnInit {
  supportedLanguages: string[] = [];
  currentLang: string = 'en';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.loadSupportedLanguages();
    this.currentLang = this.cookieService.get('chucky-lang') || 'en';
  }

  loadSupportedLanguages(): void {
    this.supportedLanguages = ['en', 'srb'];
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    this.cookieService.set('chucky-lang', lang);
    window.location.reload();
  }
}
