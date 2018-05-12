import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  /*NbLoginComponent,*/
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { NgxAuthComponent } from './@theme/components/auth/auth.component';
import { NgxAuthBlockComponent } from './@theme/components/auth/auth-block/auth-block.component';
import { NgxLoginComponent } from './@theme/components/auth/login/login.component';
import { NgxRegisterComponent } from './@theme/components/auth/register/register.component';
import { NgxLogoutComponent } from './@theme/components/auth/logout/logout.component';
import { NgxRequestPasswordComponent } from './@theme/components/auth/request-password/request-password.component';
import { NgxResetPasswordComponent } from './@theme/components/auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
