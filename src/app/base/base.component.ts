import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  spinnerShow(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);
  }

  spinnerHide(spinnerType: SpinnerType) {
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(spinnerType);
    }, 1100);
  }
}

export enum SpinnerType {
  BallScale = 'ballscale',
  BallClipRotate = 'ballcliprotate',
  BallScaleRipple = 'ballscaleripple',
  Timer = 'timer',
}
