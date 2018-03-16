import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor} from './core/core.interceptor';


import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

const appRouters : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(appRouters),
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
