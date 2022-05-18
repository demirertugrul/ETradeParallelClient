//Angular Modules
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

//Project's
import {
  FileUploadDialogState,
  FileUploadOptions,
} from 'src/app/contracts/file-upload-options';
import {
  AlertifyMessagePosition,
  AlertifyMessageType,
} from 'src/app/contracts/serviceOptions/alertify';
import {
  ToastrMessagePosition,
  ToastrMessageType,
} from 'src/app/contracts/serviceOptions/toastr';
import { FileUploadDialogComponent } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';
import { AlertifyService } from '../../admin/alertify.service';
import { CustomToastrService } from '../../ui/toastr-custom.service';
import { DialogServiceService } from '../dialog-service.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  constructor(
    private httpClientService: HttpClientService,
    private alertifyService: AlertifyService,
    private customToastrService: CustomToastrService,
    private dialogService: DialogServiceService
  ) {}

  public files: NgxFileDropEntry[];
  isUpload: boolean;
  @Input() options: Partial<FileUploadOptions>;

  public selectedFile(files: NgxFileDropEntry[]) {
    this.files = files;
    const formData: FormData = new FormData();

    for (const droppedFile of files) {
      (droppedFile.fileEntry as FileSystemFileEntry).file((_file: File) => {
        formData.append(_file.name, _file, droppedFile.relativePath);
      });
    }

    this.dialogService.openDialog({
      componentType: FileUploadDialogComponent,
      data: FileUploadDialogState.Yes,
      afterClosed: () => {
        this.httpClientService
          .post(
            {
              controller: this.options.controller,
              action: this.options.action,
              querySTring: this.options.queryString,
              headers: new HttpHeaders({ responseType: 'blob' }),
            },
            formData
          )
          .subscribe(
            (data) => {
              const message: string = 'Dosyalar başarıyla yüklenmiştir...';
              if (this.options.isAdmin) {
                this.alertifyService.message(message, {
                  messagePosition: AlertifyMessagePosition.TopRight,
                  messageType: AlertifyMessageType.Success,
                  dismissOther: true,
                });
              } else {
                this.customToastrService.message(message, 'Başarılı!', {
                  messageType: ToastrMessageType.Success,
                  messagePosition: ToastrMessagePosition.TopRight,
                });
              }
            },
            (errorResponse: HttpErrorResponse) => {
              const message: string = 'Dosyalar yüklenirken bir hata oluşt...';
              if (this.options.isAdmin) {
                this.alertifyService.message(message, {
                  messagePosition: AlertifyMessagePosition.TopRight,
                  messageType: AlertifyMessageType.Success,
                  dismissOther: true,
                });
              } else {
                this.customToastrService.message(message, 'Başarısız!', {
                  messageType: ToastrMessageType.Success,
                  messagePosition: ToastrMessagePosition.TopRight,
                });
              }
            }
          );
      },
    });
  }
}
