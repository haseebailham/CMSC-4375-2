import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { NewUserComponent } from './new-user/new-user.component';
import {ServiceComponent} from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LocationPageComponent } from './location-page/location-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './question-form/question-form.component';


const appRoutes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'about',      component: AboutPageComponent },
  { path: 'locations',      component: LocationPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ServiceComponent,
    LocationPageComponent,
    SearchBarComponent,
    AboutPageComponent,
    UserListComponent,
    SurveyComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'lab3'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
