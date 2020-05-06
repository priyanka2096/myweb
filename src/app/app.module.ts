import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { NorindComponent } from './norind/norind.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { SindianComponent } from './sindian/sindian.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelGuideComponent,
    AboutComponent,
    OrderComponent,
    NorindComponent,
    FeedbackComponent,
    FooterComponent,
    ReviewComponent,
    SindianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
