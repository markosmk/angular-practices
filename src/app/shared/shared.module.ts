import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';

@NgModule({
  declarations: [SidemenuComponent, ErrorMsgDirective],
  imports: [CommonModule, RouterModule],
  exports: [SidemenuComponent, ErrorMsgDirective], // for other module can use it
})
export class SharedModule {}
