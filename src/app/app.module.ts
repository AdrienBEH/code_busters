import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { FooterModule } from './core/components/footer/footer.module';
import { HeaderModule } from './core/components/header/header.module';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as Interceptors from './core/interceptors';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    FooterModule,
    HeaderModule,
    MatSnackBarModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ScrollingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptors.ErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
