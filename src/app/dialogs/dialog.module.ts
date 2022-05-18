//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Project's
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

//Materail Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeleteDialogComponent, FileUploadDialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class DialogModule {}
