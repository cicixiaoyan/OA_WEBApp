import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendanceAuditInstructionsPage } from './attendance-audit-instructions';
import { AttendanceAuditInstructionsService } from './attendance-audit-instructions-service';
@NgModule({
  declarations: [
    AttendanceAuditInstructionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendanceAuditInstructionsPage),
    EmptyModule
  ],
  providers: [AttendanceAuditInstructionsService]
})
export class AttendanceAuditInstructionsPageModule {}
