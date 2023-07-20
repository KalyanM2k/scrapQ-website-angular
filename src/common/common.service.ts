import { Injectable } from '@angular/core';
import { REST_APIS } from 'src/RestApis/RestApis';
import { environment } from 'src/environments/environment';

import { HttpService } from 'src/http/http.service';



@Injectable({
  providedIn: 'root'
})

export class CommonService {
  
  constructor(private httpService: HttpService) {
    
    };

    async getFaqs() {
      const url = environment.API_URL + REST_APIS.faqs;
      return this.httpService.get(url);
    }
    getPrivacyPolicy() {
      const url = environment.API_URL + REST_APIS.privacyPolicy;
      return this.httpService.get(url);
    }
  

  }

