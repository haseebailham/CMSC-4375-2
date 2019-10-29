import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {SurveyComponent} from './survey/survey.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {LocationPageComponent} from './location-page/location-page.component';
import {QuestionFormComponent} from './question-form/question-form.component';
import {HomeComponent} from './home/home.component';
import {FeedbackComponent} from './feedback/feedback.component';
const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'about',      component: AboutPageComponent },
  { path: 'locations',      component: LocationPageComponent },
  { path: 'faq',      component: QuestionFormComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'feedback',      component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
