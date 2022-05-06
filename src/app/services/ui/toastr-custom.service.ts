import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ToastrOptions } from '../../contracts/serviceOptions/toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastrCustomService {
  constructor(private toastr: ToastrService) {}

  messages(toastrOptions: Partial<ToastrOptions>) {
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
