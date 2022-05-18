export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdmin?: boolean = false;
}
export enum FileUploadDialogState {
  Yes,
  No,
}
