import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_auth/auth.guard';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CartlistComponent } from './cartlist/cartlist.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserListComponent } from './user-list/user-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "cartlist", component: CartlistComponent },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: 'userdash/:name', component: UserDashBoardComponent },
  { path: 'search/:keyword', component: UserDashBoardComponent },
  { path: "userdash", component: UserDashBoardComponent, canActivate: [AuthGuard], data: { role: 'ROLE_USER' } },
  { path: "admindash", component: AdminDashBoardComponent, canActivate: [AuthGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'find/:name', component: UserListComponent },
  { path: "products", component: AdminProductsComponent },
  { path: "fProduct/:pname", component: AdminProductsComponent },
  { path: "report", component: ReportComponent },
  { path: "saveproduct", component: AddproductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
