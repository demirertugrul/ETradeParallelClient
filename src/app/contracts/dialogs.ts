import { ComponentType } from "@angular/cdk/portal";
import { DialogPosition } from "@angular/material/dialog";

export class DialogParameters {
    componentType: ComponentType<any>;
    data: any;
    afterClosed: () => void;
    dialogOptions?: Partial<DialogOptions> = new DialogOptions();
  }
  
  export class DialogOptions {
    width?: string = '250px';
    height?: string;
    position?: DialogPosition;
  }


export enum DeleteState {
    Yes,
    No,
  }
  