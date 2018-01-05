import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendanceAuditInstructionsViewPage } from './attendance-audit-instructions-view';
import { AttendanceAuditInstructionsService } from '../attendance-audit-instructions-service';

@NgModule({
  declarations: [
    AttendanceAuditInstructionsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendanceAuditInstructionsViewPage),
  ],
  providers: [AttendanceAuditInstructionsService]
})
export class AttendanceAuditInstructionsViewPageModule {}
