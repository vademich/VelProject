import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.less',
        '../assets/fonts/Gilroy/fonts.css',
        '../assets/fonts/CINEMAX_Gotham_Titling/cinemaxgothamtitling-italic.css'
    ],
})
export class AppComponent {
    title = 'VelProject';
}
