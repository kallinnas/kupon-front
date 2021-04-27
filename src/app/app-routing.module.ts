import {AdminCustomerDetailsComponent} from './components/admin/admin-customer-details/admin-customer-details.component';
import {AdminCustomerComponent} from './components/admin/admin-customer/admin-customer.component';
import {AdminUpdateCouponComponent} from './components/admin/admin-update-coupon/admin-update-coupon.component';
import {AdminCouponComponent} from './components/admin/admin-coupon/admin-coupon.component';
import {AdminUpdateCustomerComponent} from './components/admin/admin-update-customer/admin-update-customer.component';
import {AdminCompanyDetailsComponent} from './components/admin/admin-company-details/admin-company-details.component';
import {AdminUpdateCompanyComponent} from './components/admin/admin-update-company/admin-update-company.component';
import {AboutComponent} from './components/pages/about/about.component';
import {CompaniesComponent} from './components/company/companies/companies.component';
import {CompanyCouponComponent} from './components/company/company-coupon/company-coupon.component';
import {CouponByPriceComponent} from './components/customer/coupon-by-price/coupon-by-price.component';
import {CouponByTitleComponent} from './components/customer/coupon-by-title/coupon-by-title.component';
import {CouponDetailsComponent} from './components/customer/coupon-details/coupon-details.component';
import {CouponCategoryComponent} from './components/company/coupon-category/coupon-category.component';
import {CustomerCouponComponent} from './components/customer/customer-coupon/customer-coupon.component';
import {CustomerCompanyDetailsComponent} from './components/customer/customer-company-details/customer-company-details.component';
import {CustomerAccountComponent} from './components/customer/customer-account/customer-account.component';
import {CompanyAccountComponent} from './components/company/company-account/company-account.component';
import {CompanyDetailsComponent} from './components/company/company-details/company-details.component';
import {CouponCreateComponent} from './components/company/coupon-create/coupon-create.component';
import {CompanyUpdateComponent} from './components/company/company-update/company-update.component';
import {CouponUpdateComponent} from './components/company/coupon-update/coupon-update.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/auth/login/login.component';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {NgModule} from '@angular/core';
import {Page404Component} from './components/pages/page404/page404.component';
import {Routes, RouterModule} from '@angular/router';
import {RegComponent} from './components/auth/reg/reg.component';
import {SearchComponent} from './components/customer/search/search.component';
import {CartComponent} from './components/customer/cart/cart.component';
import {CouponComponent} from './components/customer/coupon/coupon.component';
import {CompanyUpdateEmailComponent} from './components/company/company-update-email/company-update-email.component';
import {CompanyUpdatePasswordComponent} from './components/company/company-update-password/company-update-password.component';
import {AdminCompanyComponent} from './components/admin/admin-company/admin-company.component';


let routes: Routes;
routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},

  /* COMMON */
  {path: 'companies', component: CompaniesComponent},
  {path: 'coupon-details/:id', component: CouponDetailsComponent},
  {path: 'coupon-category/:category', component: CouponCategoryComponent},
  {path: 'kupons', component: CouponComponent},

  /* CUSTOMER */
  {path: 'customer-account', component: CustomerAccountComponent},
  {path: 'customer-coupon', component: CustomerCouponComponent},
  {path: 'customer-update', component: CustomerUpdateComponent},
  {path: 'customer-company-details/:id', component: CustomerCompanyDetailsComponent},

  {path: 'cart', component: CartComponent},
  {path: 'search', component: SearchComponent},
  {path: 'coupon-by-price', component: CouponByPriceComponent},
  {path: 'coupon-by-title', component: CouponByTitleComponent},

  /* COMPANY */
  {path: 'company-account', component: CompanyAccountComponent},
  {path: 'company-details/:id', component: CompanyDetailsComponent},
  {path: 'company-update', component: CompanyUpdateComponent},
  {path: 'company-update-email', component: CompanyUpdateEmailComponent},
  {path: 'company-update-password', component: CompanyUpdatePasswordComponent},

  {path: 'company-coupon', component: CompanyCouponComponent},
  {path: 'coupon-create', component: CouponCreateComponent},
  {path: 'coupon-update', component: CouponUpdateComponent},

  /* ADMIN */
  {path: 'admin-coupon', component: AdminCouponComponent},
  {path: 'admin-company', component: AdminCompanyComponent},
  {path: 'admin-update-coupon', component: AdminUpdateCouponComponent},

  {path: 'admin-customer', component: AdminCustomerComponent},
  {path: 'admin-customer-details/:id', component: AdminCustomerDetailsComponent},
  {path: 'admin-update-customer', component: AdminUpdateCustomerComponent},

  {path: 'admin-company-details/:id', component: AdminCompanyDetailsComponent},
  {path: 'admin-update-company', component: AdminUpdateCompanyComponent},

  /* AUTH */
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'reg', component: RegComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
