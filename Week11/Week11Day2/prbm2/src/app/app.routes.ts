import { Routes } from '@angular/router';
import { authGuard } from '../auth-guard';
import { Aboutus } from './aboutus/aboutus';
import { Home } from './home/home';
import { Login } from './login/login';
import { Usercomponent } from './usercomponent/usercomponent';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:Aboutus},
    {path:'login',component:Login},
    {path:'user/:id',component:Usercomponent,canActivate: [authGuard]}
];
