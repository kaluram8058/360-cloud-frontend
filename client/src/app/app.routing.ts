import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards';

export const AppRoutes: Routes = [
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: '', component: LoginComponent },

	{ path: '**', redirectTo: '' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);