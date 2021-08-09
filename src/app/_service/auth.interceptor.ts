import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable({
    providedIn:'root'
})

export class AuthInterceptor implements HttpInterceptor {

    constructor(private router:Router){}
    intercept(req : HttpRequest<any> , next : HttpHandler) : Observable<HttpEvent<any>>{
    const token=sessionStorage.getItem('token')
    let reqClone;

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      reqClone = req.clone({ headers });
    } else {
      reqClone = req;

    }
    return next.handle(reqClone).pipe(
    catchError((err:any)=>{

        if(err.status===401){
            sessionStorage.clear();
            this.router.navigateByUrl('/login')

        }

        return throwError(err.message)

    }))
        
    }
}

