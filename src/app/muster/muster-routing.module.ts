import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusterPage } from './muster.page';

const routes: Routes = [
  {
    path: '',
    component: MusterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusterPageRoutingModule {}
