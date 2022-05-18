//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Project Modules
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, ComponentsModule],
  exports: [LayoutModule],
})
export class AdminModule {}
