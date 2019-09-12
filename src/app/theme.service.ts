import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  activeTheme: 'theme-green' | 'theme-blue';

  themeChange$ = new Subject<'theme-green' | 'theme-blue'>();


  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme(newTheme: 'theme-green' | 'theme-blue') {
    if (this.activeTheme) {
      this.document.documentElement.classList.remove(this.activeTheme);
    }

    this.document.documentElement.classList.add(newTheme);
    this.activeTheme = newTheme;
    this.themeChange$.next(newTheme);
  }
}
