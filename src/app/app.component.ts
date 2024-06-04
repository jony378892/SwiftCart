import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    SigninComponent,
    CartComponent,
    ProductPageComponent,
    CheckoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
