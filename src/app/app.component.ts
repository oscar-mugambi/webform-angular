import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { loadFeedbackScript } from './webforms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'webform';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadScript();
  }

  async loadScript() {
    try {
      await loadFeedbackScript();
    } catch (error) {
      console.error('Error loading script:', error);
    }
  }

  goToUserProfile() {
    this.router.navigate(['/user-profile']);
  }
}
