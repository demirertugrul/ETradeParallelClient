import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, RouterModule], // RouterModule --> routerLink'in ve router-outlet'in çalışması için
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class ComponentsModule {}
