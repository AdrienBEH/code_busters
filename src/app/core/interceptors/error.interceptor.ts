import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private snackBar: MatSnackBar) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((httpErrorResponse: HttpErrorResponse, caught)=> {
                this.snackBar.open(
                    `${httpErrorResponse.status} ${httpErrorResponse.error}`,
                    'OK',
                    {
                        verticalPosition: 'top'
                    }
                )
                return caught;
            })
        );
    }
}
