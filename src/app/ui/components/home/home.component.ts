import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  ToastPosition,
  ToastrCustomService,
  ToastType,
} from 'src/app/services/ui/toastr-custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private toastr: ToastrCustomService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.toastr.messages({
      message: 'Merhaba',
      title: 'World',
      position: ToastPosition.BottomCenter,
      type: ToastType.Error,
      timeOut: 1000,
    });
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1100);
  }
}
