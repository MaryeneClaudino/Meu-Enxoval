import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnxovalPage } from './enxoval.page';

const routes: Routes = [
  {
    path: '',
    component: EnxovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnxovalPageRoutingModule {}
