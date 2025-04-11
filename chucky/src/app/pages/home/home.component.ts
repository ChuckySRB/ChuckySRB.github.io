import { afterRender, Component } from '@angular/core';

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
    // Get initial language from cookie or use default
    const lang = this.getCookie('chucky-lang') || 'en';
    
    // Load translations immediately (works in both SSR and browser)
    this.loadTranslations(lang);
    
    // Setup browser-only code to run after component is rendered
    afterRender(() => {
      // Update cookie if needed
      this.setCookie('chucky-lang', lang, 365);
    });
  }

  private loadTranslations(lang: string): void {
    const url = `assets/lang/${lang}.json`;
    
    console.log(`Attempting to load translations from: ${url}`);
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.error(`Failed to load translations. Status: ${response.status}`);
          throw new Error(`Failed to load translations. Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        this.translations = data;
        console.log('Translations loaded successfully:', data);
      })
      .catch(error => {
        console.error('Error loading translations:', error);
      });
  }

  // Cookie utilities
  private setCookie(name: string, value: string, days: number): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  private getCookie(name: string): string | null {
    // Works in both browser and server contexts
    const nameEQ = name + '=';
    const cookies = typeof document !== 'undefined' ? document.cookie : '';
    const ca = cookies.split(';');
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}