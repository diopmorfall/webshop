import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
