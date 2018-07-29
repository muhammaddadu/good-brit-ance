import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionPage } from './introduction';
import { ComponentsModule } from '../../components/components.module';
import { ProvidersModule } from '../../providers/providers.module';

@NgModule({
  declarations: [
    IntroductionPage
  ],
  imports: [
    IonicPageModule.forChild(IntroductionPage),
    ComponentsModule,
    ProvidersModule
  ],
})
export class IntroductionPageModule {}
