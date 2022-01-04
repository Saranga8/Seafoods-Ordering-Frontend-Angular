import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AuthGuard } from './auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProductComponent,
    ProductDetailsComponent,
    AdminCreateProductComponent,
    AdminSideBarComponent,
    OrdersComponent,
    CartComponent,
    ProfileComponent,
    AllproductsComponent,
    AdminOrdersComponent,
    CheckoutComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
