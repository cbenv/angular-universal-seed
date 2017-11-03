import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
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
    MatDialogModule
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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platform: Object) {
    if (isPlatformBrowser(this.platform)) {
      iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/mdi.svg'));
    }
  }

}
