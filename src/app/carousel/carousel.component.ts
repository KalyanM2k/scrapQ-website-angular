


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css'],
// })
// export class carouselComponent {
//   currentSlideIndex = 0;
//   slides = [
//     '../../assets/carousel/icons/banner-mb-07.jpg',
//     '../../assets/carousel/icons/banner-mb-07.jpg',
//     '../../assets/carousel/icons/banner-mb-07.jpg',
//   ];
//   interval: any;

//   ngOnInit() {
//     this.startCarousel();
//   }

//   ngOnDestroy() {
//     this.stopCarousel();
//   }

//   startCarousel() {
//     this.interval = setInterval(() => {
//       this.nextSlide();
//     }, 3000);
//   }

//   stopCarousel() {
//     clearInterval(this.interval);
//   }

//   nextSlide() {
//     this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
//   }

//   prevSlide() {
//     this.currentSlideIndex =
//       (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
//   }

//   goToSlide(index: number) {
//     this.currentSlideIndex = index;
//   }
// }



// import { Component } from '@angular/core';



// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css']
// })
// export class carouselComponent {
//   images: string[] = [
//     '../../assets/carousel/icons/banner-mb-07.jpg',
//     '../../assets/carousel/icons/banner-mb-08.jpg',
//     '../../assets/carousel/icons/banner-mb10.jpg'
//   ];
// }
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
  })

  export class carouselComponent {
    // captions: string[] = [
    //   'Slide 1',
    //   'Slide 2',
    //   'Slide 3',
    //   'Slide 4',
    //   'Slide 5'
    // ];
    slides: any[] = [
      { image: '../../assets/carousel/icons/feedback-01.jpg', caption: 'Slide 1' },
      { image: '../../assets/carousel/icons/banner2.jpg', caption: 'Slide 2' },
      { image: '../../assets/carousel/icons/banner3.jpg', caption: 'Slide 3' },
      { image: '../../assets/carousel/icons/banner4.jpg', caption: 'Slide 4' },
      { image: '../../assets/carousel/icons/banner1.jpg', caption: 'Slide 5' },
      
    ];
    

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: false,
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Set the autoplay interval in milliseconds
      autoplayHoverPause: true // Pause autoplay on hover
    }

    
  }
