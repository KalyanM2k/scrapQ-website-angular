import { Component } from '@angular/core';

@Component({
  selector: 'app-recyclables',
  templateUrl: './recyclables.component.html',
  styleUrls: ['./recyclables.component.css']
})
export class RecyclablesComponent {
  icons = [
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 1', title: 'Icon 1', description: 'Description for Icon 1' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 2', title: 'Icon 2', description: 'Description for Icon 2' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 3', title: 'Icon 3', description: 'Description for Icon 3' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 4', title: 'Icon 4', description: 'Description for Icon 4' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 5', title: 'Icon 5', description: 'Description for Icon 5' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 1', title: 'Icon 1', description: 'Description for Icon 1' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 2', title: 'Icon 2', description: 'Description for Icon 2' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 3', title: 'Icon 3', description: 'Description for Icon 3' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 4', title: 'Icon 4', description: 'Description for Icon 4' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 5', title: 'Icon 5', description: 'Description for Icon 5' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 1', title: 'Icon 1', description: 'Description for Icon 1' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 2', title: 'Icon 2', description: 'Description for Icon 2' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 3', title: 'Icon 3', description: 'Description for Icon 3' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 4', title: 'Icon 4', description: 'Description for Icon 4' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 5', title: 'Icon 5', description: 'Description for Icon 5' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 1', title: 'Icon 1', description: 'Description for Icon 1' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 2', title: 'Icon 2', description: 'Description for Icon 2' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 3', title: 'Icon 3', description: 'Description for Icon 3' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 4', title: 'Icon 4', description: 'Description for Icon 4' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 5', title: 'Icon 5', description: 'Description for Icon 5' },
    { url: '../../assets/carousel/icons/Icons-22.png', alt: 'Icon 1', title: 'Icon 1', description: 'Description for Icon 1' },
  ];
  
  displayedIcons: any[] = [];
  startIndex = 0;
  endIndex = 14;

  ngOnInit() {
    this.displayedIcons = this.icons.slice(this.startIndex, this.endIndex + 1);
  }

  slide(direction: number) {
    const nextStartIndex = this.startIndex + direction;
    const nextEndIndex = this.endIndex + direction;
    if (nextStartIndex >= 0 && nextEndIndex < this.icons.length) {
      this.startIndex = nextStartIndex;
      this.endIndex = nextEndIndex;
      this.displayedIcons = this.icons.slice(this.startIndex, this.endIndex + 1);
    }
  }

  showData(index: number) {
    console.log(this.displayedIcons[index]); // Example: Display data for the clicked icon
  }

}
