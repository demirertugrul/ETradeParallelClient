export class ToastrOptions {
  message: string = 'Toastr-Message';
  title: string = 'Toastr-Title';
  position: ToastMessagePosition = ToastMessagePosition.BottomLeft;
  type: ToastMessageType = ToastMessageType.Info;
  timeOut: number = 1000;
}

export enum ToastMessagePosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}

export enum ToastMessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
