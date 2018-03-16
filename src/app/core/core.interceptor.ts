import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router} from '@angular/router';


@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ){}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //请求预处理
    let authInfo = { token: '', admin: '' };
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', authInfo.token || '')
        .set('Admin', authInfo.admin || '')
        .set('Content-Type', 'application/json;charset=UTF-8')
    });

    //响应预处理
    return next.handle(authReq).map((event) => {
      if (event instanceof HttpResponse) {
        switch (event.status) {
          case 200:
            if (event.body['state']) {
              let newEvent = event.clone({ body: event.body['data'] });
              return newEvent;
            } else {
              throw event.body['msg'];
            }
          case 401:
            // this.storage.remove('auth_token');   不确定微信是否支持
            this.router.navigate(['/login']);
          default:
            throw `【${event.status}】【${event.statusText}】`;
        }
      }
      return event;
    });

  }
}