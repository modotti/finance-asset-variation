import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetChangeComponent } from './core/pages/asset-change/asset-change.component';

const routes: Routes = [
  {
    path: '',
    component: AssetChangeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
