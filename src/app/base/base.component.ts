import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../contracts/serviceOptions/spinner';

export class SpinnerBaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  spinnerShow(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);
  }

  spinnerHide(spinnerType: SpinnerType) {
    setTimeout(() => {
      this.spinner.hide(spinnerType);
    }, 1000);
  }
}
