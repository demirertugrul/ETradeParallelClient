import { Injectable } from '@angular/core';

declare var alertify: any;
declare var $: any;

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

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  messagePosition: MessagePosition = MessagePosition.TopCenter;
  delay: number = 3;
  dismissOther: boolean = false;
}

export enum MessagePosition {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  TopCenter = 'top-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
}

export enum MessageType {
  Error = 'error',
  Success = 'success',
  Message = 'message',
  Warning = 'warning',
  Notify = 'notify',
}
