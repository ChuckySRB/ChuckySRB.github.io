import { afterRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangComponent } from './components/lang/lang.component';
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
}
