import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";
import { CommonModule } from '@angular/common';
import { ButtonVelComponent } from "../../components/buttons/button-vel/button-vel.component";

@Component({
    selector: 'app-bikes',
    standalone: true,
    imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BreadcrampsComponent,
    CommonModule,
    ButtonVelComponent
],
    templateUrl: './bikes.component.html',
    styleUrl: './bikes.component.less'
})
export class BikesComponent {
    bikes = [
        {
            hero: 'master wong',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_03_1x.webp',
            png: '../../../assets/images/marvels/vel_03.png'
        },
        {
            hero: 'captain marvel',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_06_1x.webp',
            png: '../../../assets/images/marvels/vel_06.png'
        },
        {
            hero: 'groot',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_04_1x.webp',
            png: '../../../assets/images/marvels/vel_04.png'
        },
        {
            hero: 'gamora',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_07_1x.webp',
            png: '../../../assets/images/marvels/vel_07.png'
        },
        {
            hero: 'black panther',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_02_1x.webp',
            png: '../../../assets/images/marvels/vel_02.png'
        },
        {
            hero: 'harley quinn',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_09_1x.webp',
            png: '../../../assets/images/marvels/vel_09.png'
        },
        {
            hero: 'hulk',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_05_1x.webp',
            png: '../../../assets/images/marvels/vel_05.png'
        },
        {
            hero: 'sue storm',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_08_1x.webp',
            png: '../../../assets/images/marvels/vel_08.png'
        },
        {
            hero: 'venom',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_01_1x.webp',
            png: '../../../assets/images/marvels/vel_01.png'
        },
        {
            hero: 'spider gwen',
            leftovers: 5,
            webp: '../../../assets/images/marvels/x1/vel_10_1x.webp',
            png: '../../../assets/images/marvels/vel_10.png'
        },
    ];
}
