import {AppRoutingModule} from './app-routing.module';
import {AdminCompanyDetailsComponent} from './components/admin/admin-company-details/admin-company-details.component';
import {AdminUpdateCompanyComponent} from './components/admin/admin-update-company/admin-update-company.component';
import {AdminCouponComponent} from './components/admin/admin-coupon/admin-coupon.component';
import {AdminCustomerComponent} from './components/admin/admin-customer/admin-customer.component';
import {AdminCustomerDetailsComponent} from './components/admin/admin-customer-details/admin-customer-details.component';
import {AdminUpdateCouponComponent} from './components/admin/admin-update-coupon/admin-update-coupon.component';
import {AdminUpdateCustomerComponent} from './components/admin/admin-update-customer/admin-update-customer.component';
import {AdminMenuComponent} from './components/admin/admin-menu/admin-menu.component';
import {AboutComponent} from './components/pages/about/about.component';
import {BrowserModule} from '@angular/platform-browser';
import {CustomerCompanyDetailsComponent} from './components/customer/customer-company-details/customer-company-details.component';
import {CustomerAccountComponent} from './components/customer/customer-account/customer-account.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {CouponByPriceComponent} from './components/customer/coupon-by-price/coupon-by-price.component';
import {CouponByTitleComponent} from './components/customer/coupon-by-title/coupon-by-title.component';
import {CustomerCouponComponent} from './components/customer/customer-coupon/customer-coupon.component';
import {CompanyCouponComponent} from './components/company/company-coupon/company-coupon.component';
import {CompanyAccountComponent} from './components/company/company-account/company-account.component';
import {CouponCreateComponent} from './components/company/coupon-create/coupon-create.component';
import {CompanyUpdateComponent} from './components/company/company-update/company-update.component';
import {CouponUpdateComponent} from './components/company/coupon-update/coupon-update.component';
import {CompaniesComponent} from './components/company/companies/companies.component';
import {CompanyMenuComponent} from './components/company/company-menu/company-menu.component';
import {CompanyDetailsComponent} from './components/company/company-details/company-details.component';
import {CouponCategoryComponent} from './components/company/coupon-category/coupon-category.component';
import {CustomerMenuComponent} from './components/customer/customer-menu/customer-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './components/sections/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/sections/header/header.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/auth/login/login.component';
import {LayoutComponent} from './components/sections/layout/layout.component';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {MenuComponent} from './components/sections/menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {Page404Component} from './components/pages/page404/page404.component';
import {RouterModule} from '@angular/router';
import {RootComponent} from './components/auth/root/root.component';
import {RegComponent} from './components/auth/reg/reg.component';
import {SearchComponent} from './components/customer/search/search.component';
import {CouponDetailsComponent} from './components/customer/coupon-details/coupon-details.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { AccountMenuComponent } from './components/customer/account-menu/account-menu.component';
import { CouponComponent } from './components/customer/coupon/coupon.component';
import { CompanyAccountMenuComponent } from './components/company/company-account-menu/company-account-menu.component';
import { CompanyUpdateEmailComponent } from './components/company/company-update-email/company-update-email.component';
import { CompanyUpdatePasswordComponent } from './components/company/company-update-password/company-update-password.component';
import { AdminAccountMenuComponent } from './components/admin/admin-account-menu/admin-account-menu.component';
import { AdminCompanyComponent } from './components/admin/admin-company/admin-company.component';


@NgModule({
  declarations: [
    AdminCustomerDetailsComponent, AdminUpdateCompanyComponent, AdminMenuComponent,
    AdminCouponComponent, AdminCustomerComponent, AdminAccountMenuComponent,
    AdminUpdateCustomerComponent, AdminUpdateCouponComponent, AdminCompanyDetailsComponent,
    AccountMenuComponent, AboutComponent,

    CartComponent,

    CustomerCompanyDetailsComponent, CustomerAccountComponent, CustomerUpdateComponent,
    CustomerCouponComponent, CustomerMenuComponent,

    CompanyAccountMenuComponent, CompanyUpdateEmailComponent, CompanyUpdatePasswordComponent,
    CompanyCouponComponent, CompanyAccountComponent, CompanyUpdateComponent,
    CompanyMenuComponent, CompaniesComponent, CompanyDetailsComponent,

    CouponUpdateComponent, CouponDetailsComponent, CouponCategoryComponent,
    CouponComponent, CouponByPriceComponent, CouponByTitleComponent, CouponCreateComponent,

    FooterComponent,
    HeaderComponent, HomeComponent,
    LoginComponent, LayoutComponent, LogoutComponent,
    MenuComponent,
    Page404Component,
    RootComponent, RegComponent,
    SearchComponent,
    AdminCompanyComponent,
  ],

  imports: [BrowserModule, NgbModule, RouterModule,
    AppRoutingModule, FormsModule, HttpClientModule,
    ReactiveFormsModule],

  providers: [LayoutComponent, LoginComponent],
  bootstrap: [LayoutComponent]
})
export class AppModule {
}
