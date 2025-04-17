import { afterRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangComponent } from './components/lang/lang.component';
import { DEFAULT_LANG, getTranslations, LANG_TAG } from './utils/lang';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LangComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chucky';
  translations: any = {};
  lang: string = 'en';
  
  constructor() {

  }

  ngOnInit(): void {
    this.lang = localStorage.getItem(LANG_TAG) || DEFAULT_LANG;
    if (!localStorage.getItem(LANG_TAG)) {
      localStorage.setItem(LANG_TAG, this.lang);
    }
    getTranslations(this.lang).then(translations => {
      this.translations = translations;
    });
  }
}
