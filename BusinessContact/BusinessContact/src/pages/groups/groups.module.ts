import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Groups } from '../pages/groups/groups';;
@NgModule({
  declarations: [
     
      Groups
  ],
  imports: [
      IonicModule.forRoot(Groups),
  ],
  exports: [
    Groups
  ]
})
export class groupsModule {}
