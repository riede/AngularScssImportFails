import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  theme: 'theme-green' | 'theme-blue' = 'theme-green';
  color: 'green' | 'blue';
  private themeChangeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.subscribeToThemeChangeEvents();
  }

  ngOnInit() {
    this.themeService.setTheme('theme-green');
  }

  ngOnDestroy() {
    this.themeChangeSubscription.unsubscribe();
  }

  toggleTheme() {
    switch (this.theme) {
      case 'theme-blue':
        this.themeService.setTheme('theme-green');
        break;
      case 'theme-green': 
        this.themeService.setTheme('theme-blue');
        break;
      default:
    }
  }

  private subscribeToThemeChangeEvents() {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe({
      next: (newTheme: 'theme-green' | 'theme-blue') => {
        this.theme = newTheme;

        switch (newTheme) {
          case 'theme-green':
            this.color = 'green';
            break;
          case 'theme-blue':
            this.color = 'blue';
            break;
          default:
        }
      }
    });
  }
}
