import { Component } from '@angular/core';
import { BreadcrampsComponent } from "../../../components/breadcramps/breadcramps.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../../components/header/header.component";
import { MilestonesComponent } from "../../../components/milestones/milestones.component";

@Component({
    selector: 'app-tracks-container',
    standalone: true,
    imports: [
    BreadcrampsComponent,
    CommonModule,
    RouterLink,
    HeaderComponent,
    MilestonesComponent
],
    templateUrl: './tracks-container.component.html',
    styleUrl: './tracks-container.component.less'
})
export class TracksContainerComponent {
    switch(tab: string) {
        document.getElementById(tab)?.classList.add('tab-active');

        if (tab === 'tracks') {
            document.getElementById('freeride')?.classList.remove('tab-active');
        }
        if (tab === 'freeride') {
            document.getElementById('tracks')?.classList.remove('tab-active');
        }
    }
    tracks = [
        {
            name: 'девицкий лес',
            address: `г. Семилуки, улица Первомайская`,
            distance: `15 км`,
            duration: `2 ч`,
            team: `от 3 чел`,
            svg: '../../../assets/images/tracks/01.svg',
        },
        {
            name: 'Стрелицкие Холмы',
            address: `г. Семилуки, улица Первомайская`,
            distance: `15 км`,
            duration: `2 ч`,
            team: `от 4 чел`,
            svg: '../../../assets/images/tracks/02.svg',
        },
        {
            name: 'Круглое',
            address: `г. Семилуки, улица Первомайская`,
            distance: `15 км`,
            duration: `2 ч`,
            team: `от 4 чел`,
            svg: '../../../assets/images/tracks/03.svg',
        },
        {
            name: 'Губарёво',
            address: `г. Семилуки, улица Первомайская`,
            distance: `15 км`,
            duration: `2 ч`,
            team: `от 4 чел`,
            svg: '../../../assets/images/tracks/04.svg',
        }
    ];
}
