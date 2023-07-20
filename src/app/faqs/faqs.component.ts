import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})

export class FaqsComponent implements OnInit{
  
   faqs:any = [];

  //  toggleAccordion(item: any): void {
  //   item.expanded = !item.expanded;
  // }

   
    constructor(private commonService: CommonService, private toastr: ToastrService) {}

  async ngOnInit(){
      (await this.commonService.getFaqs()).subscribe((res: any)=>{
        this.faqs=res.data.faqData.map((faqData:any)=>faqData.faqs).flat()
        console.log(this.faqs)
       
      })
  }


  downloadData() {

    this.toastr.info('Download is in progress', 'Downloading');
  
    var options: any = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: "FAQ's",
    };
  
    var Data: any = [];
    this.faqs.forEach((faq: any) => {
      Data.push(['Question:    ' + faq.question]);
      Data.push(['Answer:       '+ this.stripHtmlTags(faq.answer)]);
      Data.push([]);
      
    });
    new ngxCsv(Data, "FACTS & FAQ's", options);
 
    setTimeout(() => {
      this.toastr.clear()
      this.toastr.info('Download is completed', 'Download Complete');
    }, 1000);
    // this.toastr.success("CSV downloaded successfully");
  }
  
  stripHtmlTags(html: string): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
    
}



