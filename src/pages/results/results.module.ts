import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { ProvidersModule } from '../../providers/providers.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    ComponentsModule,
    ProvidersModule
  ],
})
export class ResultsPageModule {}
