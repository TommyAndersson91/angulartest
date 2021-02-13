import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '../app/services/can-deactivate-guard.service';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  { 
    path: 'product',
    component: ProductComponent,
    canDeactivate: [CanDeactivateGuard]
},
{ path: 'order', component: OrderComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
    CanDeactivateGuard
  ]
})
export class AppRoutingModule { }
