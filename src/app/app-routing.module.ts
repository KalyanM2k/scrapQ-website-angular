import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


  const routes:Routes=[
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'about-us',
      component: AboutUsComponent,
    },
    {
      path: 'book-appointment',
      component: BookAppointmentComponent,
    },
    {
      path: 'our-services',
      component: OurServicesComponent,
    },
    {
      path: 'faqs',
      component: FaqsComponent,
    },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    },
    {
      path: 'privacy-policy',
      component: PrivacyPolicyComponent,
    },
    {
      path: '**',
      component: PageNotFoundComponent,
    }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
