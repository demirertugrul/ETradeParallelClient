import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './base/base.component';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent {
  title = 'ETradeParallel';
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.spinnerShow(SpinnerType.BallClipRotate);
    this.spinnerHide(SpinnerType.BallClipRotate);
  }
}
$.get("https://localhost:7172/api/products",function(data){
  console.log(data);
})