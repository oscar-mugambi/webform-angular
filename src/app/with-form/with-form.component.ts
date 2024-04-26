import { Component, OnInit } from '@angular/core';
import { loadFeedbackScript } from '../webforms';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-with-form',
  templateUrl: './with-form.component.html',
  styleUrls: ['./with-form.component.css'],
})
export class WithFormComponent implements OnInit {
  options: Option[] = [
    { value: 'IVA3BXOP', label: 'NPS Survey' },
    { value: 'I2SSQB', label: 'Random Survey' },
    { value: 'MWAMBATEST', label: 'System Test' },
  ];
  selectedOption!: string;

  ngOnInit() {
    this.selectedOption = 'IVA3BXOP';
  }

  async loadScript(joinCode: string) {
    try {
      await loadFeedbackScript(joinCode);
      (window as any).openModal();
    } catch (error) {
      console.error('Error loading script:', error);
    }
  }
}
