import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormModule } from 'ngx-weui/form';
import { UserService } from '../_services/index';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home.component';
import { MyInterceptor} from '../core/core.interceptor';






const userRoutes: Routes = [
    { path: 'login', component: LoginComponent, data: { title: '用户登录' } },
    { path: 'register', component: RegisterComponent, data: { title: '用户注册' } },
    { path: 'home', component: HomeComponent, data: { title: '父母必读悦养学院' } }
];


@NgModule({
    declarations: [LoginComponent, RegisterComponent, HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        FormModule,
        HttpClientModule,
        
        RouterModule.forRoot(
            userRoutes,
            { enableTracing: true }              // <-- debugging purposes only
        )
    ],
    exports: [],
    providers: [
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MyInterceptor,
            multi: true
        },
        
    ],
})
export class UserModule {

}