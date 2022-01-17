import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SuppliersComponent} from "./suppliers/suppliers.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'suppliers', component: SuppliersComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
