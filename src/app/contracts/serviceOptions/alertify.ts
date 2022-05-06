export class AlertifyOptions {
  messageType: AlertifyMessageType = AlertifyMessageType.Message;
  messagePosition: AlertifyMessagePosition = AlertifyMessagePosition.TopCenter;
  delay: number = 3;
  dismissOther: boolean = false;
}

export enum AlertifyMessagePosition {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  TopCenter = 'top-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
}

export enum AlertifyMessageType {
  Error = 'error',
  Success = 'success',
  Message = 'message',
  Warning = 'warning',
  Notify = 'notify',
}
