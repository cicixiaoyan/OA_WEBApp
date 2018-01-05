import { ComponentsModule } from './../../../components/components.module';
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
    ComponentsModule
  ],
  providers: [AttendanceAuditInstructionsService]
})
export class AttendanceAuditInstructionsPageModule {}
