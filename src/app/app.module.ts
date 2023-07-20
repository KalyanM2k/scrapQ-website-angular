import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HttpClientModule } from '@angular/common/http';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {  MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SafeHtmlPipe } from 'src/pipes/safe-html/safe-html.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { carouselComponent } from './carousel/carousel.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WorkComponent } from './work/work.component';
import { RecyclablesComponent } from './recyclables/recyclables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqsComponent,
    AboutUsComponent,
    BookAppointmentComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent,
    HomeComponent,
    SafeHtmlPipe,
    carouselComponent,
    WorkComponent,
    RecyclablesComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CdkAccordionModule,
    MatIconModule,
    MatDialogModule,
    
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // CarouselComponent,
    // CarouselModule.forRoot()
    CarouselModule
    
  ],
  exports:[
    CdkAccordionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
