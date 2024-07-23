import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { routes } from './app/app.routes';


registerSwiperElements();
bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            NgForm,
            ToastrModule.forRoot({
                timeOut: 15000,
                closeButton: true,
                progressBar: false,
            })
        ),
        provideAnimationsAsync(),
        provideRouter(routes), provideAnimationsAsync()
    ]
})
    .catch(err => console.error(err));

