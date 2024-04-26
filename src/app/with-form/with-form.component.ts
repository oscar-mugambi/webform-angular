import { Component, OnInit } from '@angular/core';
import { loadFeedbackScript } from '../webforms';
import { TJoinCode, TJoinCodeKey, joinCodes } from '../../../types';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-with-form',
  templateUrl: './with-form.component.html',
})
export class WithFormComponent implements OnInit {
  options: Option[] = [
    { value: joinCodes.ICEA.code, label: joinCodes.ICEA.label },
    { value: joinCodes.RANDOM.code, label: joinCodes.RANDOM.label },
    { value: joinCodes.SYSTEM_TEST.code, label: joinCodes.SYSTEM_TEST.label },
  ];
  selectedOption!: TJoinCode;

  ngOnInit() {
    this.selectedOption = joinCodes.ICEA.code as TJoinCode;
  }

  async loadScript(joinCode: TJoinCode) {
    try {
      await loadFeedbackScript(joinCode);
      (window as any).openModal();
    } catch (error) {
      console.error('Error loading script:', error);
    }
  }
}
