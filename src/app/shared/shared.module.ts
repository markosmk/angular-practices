import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [SidemenuComponent, ErrorMsgDirective, CustomIfDirective, MenuComponent],
  imports: [CommonModule, RouterModule, MenubarModule],
  exports: [SidemenuComponent, ErrorMsgDirective, CustomIfDirective, MenuComponent], // for other module can use it
})
export class SharedModule {}
