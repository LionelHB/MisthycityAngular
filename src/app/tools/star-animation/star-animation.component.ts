import { Component } from '@angular/core';

@Component({
  selector: 'app-star-animation',
  templateUrl: './star-animation.component.html',
  styleUrls: ['./star-animation.component.scss']
})
export class StarAnimationComponent {
  stars: any[] = [];
  isRainingStars: boolean = false;

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.stars.push({ isSparkling: false });
    }
  }

  moveStars(event: MouseEvent) {
    this.stars.forEach((star) => {

      const x = event.clientX;
      const y = event.clientY;
      const rect = star.element.getBoundingClientRect();
      const starX = rect.left + rect.width / 2;
      const starY = rect.top + rect.height / 2;
      const distance = Math.sqrt((x - starX) ** 2 + (y - starY) ** 2);


      star.isSparkling = distance < 50;
    });
  }
  triggerRain() {
    this.isRainingStars = true;
    setTimeout(() => {
      this.isRainingStars = false;
    }, 2000);
  }

}
