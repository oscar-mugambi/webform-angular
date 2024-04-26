import { Component, OnInit } from '@angular/core';
import { loadFeedbackScript } from '../webforms';

@Component({
  selector: 'app-root',
  templateUrl: './user-driven-form.component.html',
})
export class UserDrivenComponent implements OnInit {
  title = 'webform';

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
}
