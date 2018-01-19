import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  MatIconRegistry,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private overlayContainer: OverlayContainer, @Inject(PLATFORM_ID) private platform: Object) {
    if (isPlatformBrowser(this.platform)) {
      overlayContainer.getContainerElement().classList.add('light-theme', 'mat-typography');
      iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/mdi.svg'));
    }
  }

}
