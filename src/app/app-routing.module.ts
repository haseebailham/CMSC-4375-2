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
import {BlogComponent} from './blog/blog.component';
import {Blog1Component} from './blog/blog1/blog1.component';
import {Blog2Component} from './blog/blog2/blog2.component';
import {Blog3Component} from './blog/blog3/blog3.component';
import {Blog4Component} from './blog/blog4/blog4.component';
import {FaqComponent} from './faq-page/faq.component';
const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'about',      component: AboutPageComponent },
  { path: 'locations',      component: LocationPageComponent },
  { path: 'faq',      component: FaqComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'feedback',      component: FeedbackComponent },
  { path: 'register',      component: RegisterComponent },
  { path: '',      component: LoginComponent },
  { path: 'blogs',      component: BlogComponent },
  { path: 'blog1',      component: Blog1Component },
  { path: 'blog2',      component: Blog2Component },
  { path: 'blog3',      component: Blog3Component },
  { path: 'blog4',      component: Blog4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
