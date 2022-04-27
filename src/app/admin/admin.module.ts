//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

//Project Modules
import { ComponentsModule } from './components/components.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, ComponentsModule],
  exports: [LayoutModule],
})
export class AdminModule {}
