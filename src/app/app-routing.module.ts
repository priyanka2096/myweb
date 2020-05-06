import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { NorindComponent } from './norind/norind.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SindianComponent } from './sindian/sindian.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'order',
    component: OrderComponent
  },

  {
    path: 'travel',
    component: TravelGuideComponent
  },

  {
    path: 'feedback',
    component: FeedbackComponent
  },

  {
    path: 'norind',
    component: NorindComponent
  },

  {
    path: 'sindian',
    component: SindianComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
