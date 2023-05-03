import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";



@Injectable({
    providedIn:'root'
})


export class InterceptorService {
    constructor(private tokenService: TokenService){}

    Intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intReq = req;
        const token = this.tokenService.getToken();
        if(token != null){
            intReq = req.clone({
                headers: req.headers.set('Authorization','Barer'+token)
            });
        }
        return next.handle(intReq);
    }
}
import { Injectable } from "@angular/core";

export const intercepotorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];