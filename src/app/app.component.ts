import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'VTtest_Angular';

// }
export class AppComponent implements OnInit {
  title = 'my-app';
  showForum = false;
  ngOnInit() {
    const carousel: HTMLElement | null = document.querySelector('#carousel');
    if (carousel) {
      const images: NodeListOf<HTMLImageElement> = carousel.querySelectorAll('img');
      let currentImageIndex: number = 0;

      setInterval(() => {
        images[currentImageIndex].style.opacity = '0';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.opacity = '1';
      }, 3000);
    }
  }
}
