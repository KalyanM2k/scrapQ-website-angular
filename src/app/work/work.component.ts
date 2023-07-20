import { Component } from '@angular/core';



@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  images= [
    { url: '../../assets/carousel/icons/Icons-16.png', alt: 'Image 1', caption: ' 01' ,caption2: `Contact Us 
995 98495 48`},
    { url: '../../assets/carousel/icons/Icons-17.png', alt: 'Image 2', caption: '02' ,caption2: `Onsite 
Collection`},
    { url: '../../assets/carousel/icons/Icons-18.png', alt: 'Image 3', caption: '03',caption2: `   Accurate    
Weighting` },
    { url: '../../assets/carousel/icons/Icons-19.png', alt: 'Image 4', caption: '04',caption2: ` Instant
Payment` },
    { url: '../../assets/carousel/icons/Icons-20.png', alt: 'Image 5', caption: '05',caption2: `Responsible
Recycling`}
  ];
  
  
}



