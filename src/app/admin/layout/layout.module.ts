//Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

//Project Modules
import { ComponentsModule } from './components/components.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ComponentsModule, RouterModule, MatSidenavModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
