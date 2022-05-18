import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrOptions } from 'src/app/contracts/serviceOptions/toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastrService: ToastrService) {}

  message(
    message: string,
    title: string,
    toastrOptions: Partial<ToastrOptions>
  ) {
    this.toastrService[toastrOptions.messageType](message, title, {
      positionClass: toastrOptions.messagePosition,
    });
  }
}
