import { Component, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PrivacyPolicyComponent {
  privacyPolicy = "";
  errorMessage = "";
  isPageMode: any;

  constructor(private commonService: CommonService,) { }

  ngOnInit() {
    this.getPrivacyPolicy();
  }

  async getPrivacyPolicy() {
    (await this.commonService.getPrivacyPolicy()).subscribe((response: any) => {
      if (response.status === 'SUCCESS') {
        this.privacyPolicy = response.data.privacyPolicy;
        console.log(this.privacyPolicy)
      } else {
        this.errorMessage = "Error retrieving privacy policy. Please try again later.";
      }
    });
  }

  downloadData(){
    var result=[this.privacyPolicy];
    const myJsonString=JSON.stringify(result);
    const blob=new Blob([myJsonString],{
      type:'application/vnd.ms-excel;charset=utf-8',
    });
    saveAs(blob,'privacypolicy');
  }
  


}
