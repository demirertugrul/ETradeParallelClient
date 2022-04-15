import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastrCustomService {
  constructor(private toastr: ToastrService) {}

  messages(toastrOptions: Partial<ToastrCustomOptions>) {
    this.toastr[toastrOptions.type](
      toastrOptions.message,
      toastrOptions.title,
      {
        positionClass: toastrOptions.position,
        closeButton: true,
        timeOut: toastrOptions.timeOut,
      }
    );
  }
}

export class ToastrCustomOptions {
  message: string = 'Toastr-Message';
  title: string = 'Toastr-Title';
  position: ToastPosition = ToastPosition.BottomLeft;
  type: ToastType = ToastType.Info;
  timeOut: number = 1000;
}

export enum ToastPosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}

export enum ToastType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
