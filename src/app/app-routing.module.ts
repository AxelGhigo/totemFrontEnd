import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelloneComponent } from './tabellone/tabellone.component';
import { TotemorizontaleComponent } from './totemorizontale/totemorizontale.component';

const routes: Routes = [
  {path: '', component: TabelloneComponent},
  {path: 'totem', component: TotemorizontaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
