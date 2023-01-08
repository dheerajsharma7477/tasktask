import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './window/offers/offers.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: OffersComponent,
  // },
  {
    path: 'tasktask',
    loadChildren: () => import('./window/window.module').then(m => m.WindowModule),
    // data: { preload: true, delay: false },
    // canActivate: [AbstractGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
