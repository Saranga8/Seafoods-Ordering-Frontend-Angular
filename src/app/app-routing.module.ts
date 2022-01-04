import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { OrdersComponent } from "./orders/orders.component";
import { AdminSideBarComponent } from "./admin-side-bar/admin-side-bar.component";
import { AdminCreateProductComponent } from "./admin-create-product/admin-create-product.component";
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteComponent } from './complete/complete.component';


const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: ProductComponent,
    path: 'product',
    canActivate: [AuthGuard],
  },

  {
    component: ProductDetailsComponent,
    path: 'details/:id',
    canActivate: [AuthGuard],
  },

  {
    component: OrdersComponent,
    path: 'orders',
    canActivate: [AuthGuard],
  },
  {
    component: CartComponent,
    path: 'cart',
    canActivate: [AuthGuard],
  },
  {
    component: ProfileComponent,
    path: 'profile',
    canActivate: [AuthGuard],
  },

  {
    component: AdminSideBarComponent,
    path: 'admin'
  },
  {
    component: AdminCreateProductComponent,
    path: 'create_product'
  },
  {
    component: AllproductsComponent,
    path: 'allproducts'
  },
  {
    component: AdminOrdersComponent,
    path: 'adminorders'
  },
  {
    component: CheckoutComponent,
    path: 'checkout'
  },
  {
    component: CompleteComponent,
    path: 'complete'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
