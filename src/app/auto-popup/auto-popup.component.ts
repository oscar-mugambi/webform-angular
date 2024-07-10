import { Component, OnInit } from '@angular/core';
import { loadFeedbackScript } from '../webforms';

@Component({
  selector: 'app-auto-popup',
  templateUrl: './auto-popup.component.html',
})
export class AutoPopupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadScript();
  }

  async loadScript() {
    try {
      await loadFeedbackScript();
      setTimeout(() => {
        (window as any).openModal();
      }, 2000);
    } catch (error) {
      console.error('Error loading script:', error);
    }
  }
}
