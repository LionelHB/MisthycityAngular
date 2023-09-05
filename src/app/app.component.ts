import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Mysthicity';
  showHeaderAndFooter: boolean = true;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event) => {
        if (this.router.url == '/not-found' && this.showHeaderAndFooter || this.router.url == '/home' && this.showHeaderAndFooter) {
          this.showHeaderAndFooter = false;
        } else if (
          this.router.url != '/not-found' &&
          !this.showHeaderAndFooter || this.router.url != '/not-found' &&
          !this.showHeaderAndFooter 
        ) {
          this.showHeaderAndFooter = true;
        }
      });
  }
  
}
