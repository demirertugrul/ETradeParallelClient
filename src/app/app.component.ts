import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerBaseComponent } from './base/base.component';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends SpinnerBaseComponent {
  title = 'ETradeParallel';
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {}
}
