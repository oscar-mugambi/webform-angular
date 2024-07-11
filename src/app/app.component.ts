import { Component, OnInit } from '@angular/core';
import { loadFeedbackScript } from './webforms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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
