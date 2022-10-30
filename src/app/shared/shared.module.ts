import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [SidemenuComponent, ErrorMsgDirective, CustomIfDirective],
  imports: [CommonModule, RouterModule],
  exports: [SidemenuComponent, ErrorMsgDirective, CustomIfDirective], // for other module can use it
})
export class SharedModule {}
