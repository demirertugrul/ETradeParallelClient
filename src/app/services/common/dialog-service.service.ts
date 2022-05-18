import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogParameters } from 'src/app/contracts/dialogs';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  constructor(private dialog: MatDialog) {}

  openDialog(dialogParameters: Partial<DialogParameters>): void {
    const dialogRef = this.dialog.open(dialogParameters.componentType, {
      width: dialogParameters.dialogOptions?.width,
      height: dialogParameters.dialogOptions?.height,
      position: dialogParameters.dialogOptions?.position,
      data: dialogParameters.data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == dialogParameters.data) {
        dialogParameters.afterClosed();
      }
    });
  }
}
