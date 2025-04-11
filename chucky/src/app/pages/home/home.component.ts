import { afterRender, afterNextRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  translations: any = {};
  lang: string = 'en';
  
  constructor() {
    
    // Setup browser-only code to run after component is rendered
    afterRender(() => {
      // This code only runs in the browser, not during SSR
      let lang = localStorage.getItem('chucky-lang') || 'en';
      localStorage.setItem('chucky-lang', lang);
      
      // Load or reload translations in browser context
      this.loadTranslations(lang);
    });
  }

  private loadTranslations(lang: string): void {
    // In browser, use relative URL. For SSR, this function shouldn't be called
    // during initial construction, only during afterRender which is browser-only
    const url = `assets/lang/${lang}.json`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load translations');
        }
        console.log(response);
        return response.json();
      })
      .then(data => {
        this.translations = data;
        console.log(data);


      })
      .catch(error => {
        console.error('Error loading translations:', error);
      });
  }
}
