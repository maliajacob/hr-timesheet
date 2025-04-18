import { importProvidersFrom, NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent,
    AnalyticsTableComponent,
    TopNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    provideHttpClient(),
    // provideFirebaseApp(() =>
    //   initializeApp({
    //     projectId: 'hr-timesheet-e7d60',
    //     appId: '1:943073823180:web:c17c0a41102ab43301f569',
    //     storageBucket: 'hr-timesheet-e7d60.firebasestorage.app',
    //     apiKey: 'AIzaSyCW__fp6lEbn0HQE4ZUTvGvthzjHd8KLsQ',
    //     authDomain: 'hr-timesheet-e7d60.firebaseapp.com',
    //     messagingSenderId: '943073823180',
    //     measurementId: 'G-S12PDTPB4M',
    //   })
    // ),
    // provideAuth(() => getAuth()),
    // provideZoneChangeDetection({eventCoalescing: true}),
    // provideRouter([
    //   { path: '', component: TimesheetComponent },
    //   { path: 'departments', component: DepartmentsComponent },
    //   { path: 'analytics', component: AnalyticsComponent },
    // ]),
    // provideFirestore(() => getFirestore()),
    // provideFirestore(() => getFirestore()),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
