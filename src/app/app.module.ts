import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PLATFORM_ID, NgZone, LOCALE_ID } from '@angular/core';
import { AngularFirestoreProject1, AngularFirestoreProject2 } from './firestore-config.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './layout/banner/banner.component';
import { WindowModule } from './window/window.module';
import { D2HeaderComponent } from './design-2/d2-header/d2-header.component';
import { D1HeaderComponent } from './design-1/d1-header/d1-header.component';
import { D1BannerComponent } from './design-1/d1-banner/d1-banner.component';
import { D2BannerComponent } from './design-2/d2-banner/d2-banner.component';
import { D1FooterComponent } from './design-1/d1-footer/d1-footer.component';
import { D2FooterComponent } from './design-2/d2-footer/d2-footer.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { D3HeaderComponent } from './design-3/d3-header/d3-header.component';
import { MatIconModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { Constants } from 'core/utils/pipe/constant';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    D2HeaderComponent,
    D1HeaderComponent,
    D1BannerComponent,
    D2BannerComponent,
    D1FooterComponent,
    D2FooterComponent,
    D3HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    // WindowModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: 'firebaseProject1',deps: [PLATFORM_ID, NgZone],useFactory: AngularFirestoreProject1
    },
    {
      provide: 'firebaseProject2',deps: [PLATFORM_ID, NgZone],useFactory: AngularFirestoreProject2
    },
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
