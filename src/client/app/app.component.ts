import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular Universal Seed';
  theme = 'light-theme';
  menu = [];

  constructor(private overlayContainer: OverlayContainer, @Inject(PLATFORM_ID) private platform: Object) {
    
  }

  toggleTheme() {
    (this.theme === 'light-theme') ? this.toggleDarkTheme() : this.toggleLightTheme();
  }

  toggleLightTheme() {
    if (isPlatformBrowser(this.platform)) {
      this.theme = 'light-theme';
      const classList = this.overlayContainer.getContainerElement().classList;
      classList.remove('dark-theme');
      classList.add('light-theme');
    }
  }

  toggleDarkTheme() {
    if (isPlatformBrowser(this.platform)) {
      this.theme = 'dark-theme';
      const classList = this.overlayContainer.getContainerElement().classList;
      classList.remove('light-theme');
      classList.add('dark-theme');
    }
  }
}
