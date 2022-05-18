import { HttpErrorResponse } from '@angular/common/http';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { DeleteState } from 'src/app/contracts/dialogs';
import {
  AlertifyMessagePosition,
  AlertifyMessageType,
} from 'src/app/contracts/serviceOptions/alertify';
import { SpinnerType } from 'src/app/contracts/serviceOptions/spinner';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { DialogServiceService } from 'src/app/services/common/dialog-service.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';

declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private alertifyService: AlertifyService,
    private dialogService: DialogServiceService
  ) {
    const createdElement = _renderer.createElement('i');
    createdElement.setAttribute('class', 'fa fa-trash');
    _renderer.appendChild(element.nativeElement, createdElement);
  }

  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  async onClick() {
    this.dialogService.openDialog({
      componentType: DeleteDialogComponent,
      data: DeleteState.Yes,
      afterClosed: async () => {
        this.spinner.show(SpinnerType.BallScale);
        const sp: HTMLTableCellElement = this.element.nativeElement;
        await this.httpClientService
          .delete(
            {
              controller: this.controller,
            },
            this.id
          )
          .subscribe(
            async (data) => {
              await $(sp.parentElement).animate(
                {
                  opacitiy: 0,
                  left: '+=50',
                  height: 'toggle',
                },
                700,
                () => {
                  this.callback.emit();
                  this.alertifyService.message('Ürün başarıyla silindi!', {
                    messagePosition: AlertifyMessagePosition.TopRight,
                    messageType: AlertifyMessageType.Success,
                    dismissOther: true,
                  });
                }
              );
            },
            (errorMessage: HttpErrorResponse) => {
              this.spinner.hide(SpinnerType.BallScaleRipple);
              this.alertifyService.message('Ürün Silinemedi!!!', {
                messagePosition: AlertifyMessagePosition.TopCenter,
                messageType: AlertifyMessageType.Error,
                dismissOther: true,
              });
            }
          );
      },
    });
  }
}
