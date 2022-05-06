import { Injectable } from '@angular/core';
import { AlertifyOptions } from 'src/app/contracts/serviceOptions/alertify';

declare var alertify: any;
// declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  messages(message: string, alertifyOptions: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'position', alertifyOptions.messagePosition);
    alertify.set('notifier', 'delay', alertifyOptions.delay);
    let msg = alertify[alertifyOptions.messageType](message);
    if (alertifyOptions.dismissOther) {
      msg.dismissOthers();
    }
  }

  dismissAll() {
    alertify.dismissAll();
  }
}
