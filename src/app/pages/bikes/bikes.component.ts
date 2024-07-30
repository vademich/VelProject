import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";
import { CommonModule } from '@angular/common';
import { ButtonVelComponent } from "../../components/buttons/button-vel/button-vel.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MilestonesComponent } from "../../components/milestones/milestones.component";
import { MatDialog } from '@angular/material/dialog';
import { GreetingsComponent } from '../../components/dialogs/greetings/greetings.component';

@Component({
    selector: 'app-bikes',
    standalone: true,
    imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BreadcrampsComponent,
    CommonModule,
    ButtonVelComponent,
    HeaderComponent,
    MilestonesComponent
],
    templateUrl: './bikes.component.html',
    styleUrl: './bikes.component.less'
})
export class BikesComponent {

    readonly dialog = inject(MatDialog);

    openDialog(): void {
        this.dialog.open(GreetingsComponent);
    }

    bikes = [
        {
            hero: 'master wong',
            leftovers: 5,
            price: 1200,
            male: true,
            female: false,
            webp: '../../../assets/images/marvels/x1/vel_03_1x.webp',
            png: '../../../assets/images/marvels/vel_03.png'
        },
        {
            hero: 'captain marvel',
            leftovers: 5,
            price: 1200,
            male: false,
            female: true,
            webp: '../../../assets/images/marvels/x1/vel_06_1x.webp',
            png: '../../../assets/images/marvels/vel_06.png'
        },
        {
            hero: 'groot',
            leftovers: 5,
            price: 1200,
            male: true,
            female: false,
            webp: '../../../assets/images/marvels/x1/vel_04_1x.webp',
            png: '../../../assets/images/marvels/vel_04.png'
        },
        {
            hero: 'gamora',
            leftovers: 5,
            price: 1200,
            male: false,
            female: true,
            webp: '../../../assets/images/marvels/x1/vel_07_1x.webp',
            png: '../../../assets/images/marvels/vel_07.png'
        },
        {
            hero: 'black panther',
            leftovers: 5,
            price: 1200,
            male: true,
            female: false,
            webp: '../../../assets/images/marvels/x1/vel_02_1x.webp',
            png: '../../../assets/images/marvels/vel_02.png'
        },
        {
            hero: 'harley quinn',
            leftovers: 5,
            price: 1200,
            male: false,
            female: true,
            webp: '../../../assets/images/marvels/x1/vel_09_1x.webp',
            png: '../../../assets/images/marvels/vel_09.png'
        },
        {
            hero: 'hulk',
            leftovers: 5,
            price: 1200,
            male: true,
            female: false,
            webp: '../../../assets/images/marvels/x1/vel_05_1x.webp',
            png: '../../../assets/images/marvels/vel_05.png'
        },
        {
            hero: 'sue storm',
            leftovers: 5,
            price: 1200,
            male: false,
            female: true,
            webp: '../../../assets/images/marvels/x1/vel_08_1x.webp',
            png: '../../../assets/images/marvels/vel_08.png'
        },
        {
            hero: 'venom',
            leftovers: 5,
            price: 1200,
            male: true,
            female: false,
            webp: '../../../assets/images/marvels/x1/vel_01_1x.webp',
            png: '../../../assets/images/marvels/vel_01.png'
        },
        {
            hero: 'spider gwen',
            leftovers: 5,
            price: 1200,
            male: false,
            female: true,
            webp: '../../../assets/images/marvels/x1/vel_10_1x.webp',
            png: '../../../assets/images/marvels/vel_10.png'
        },
        {
            hero: 'Велосипедный прицеп для детей',
            leftovers: 5,
            price: 1800,
            male: true,
            female: true,
            webp: '../../../assets/images/marvels/x2/baby_carriage_2x.webp',
            png: '../../../assets/images/marvels/baby_carriage.png'
        },
    ];

    allBikes = JSON.parse(JSON.stringify(this.bikes));

    switch(tab: string): void {
        document.getElementById(tab)?.classList.add('filter__active');

        if (tab === 'male') {
            document.getElementById('all')?.classList.remove('filter__active');
            document.getElementById('female')?.classList.remove('filter__active');

            this.bikes = this.allBikes.filter((bike: { male: boolean; }) => bike.male === true);
        }
        else if (tab === 'female') {
            document.getElementById('all')?.classList.remove('filter__active');
            document.getElementById('male')?.classList.remove('filter__active');

            this.bikes = this.allBikes.filter((bike: { female: boolean; }) => bike.female === true);
        }
        else {
            document.getElementById('male')?.classList.remove('filter__active');
            document.getElementById('female')?.classList.remove('filter__active');

            this.bikes = this.allBikes;
        }
    }
}
