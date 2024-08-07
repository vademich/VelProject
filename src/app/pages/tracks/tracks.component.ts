import { Component } from '@angular/core';
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { MilestonesComponent } from "../../components/milestones/milestones.component";

@Component({
    selector: 'app-tracks',
    standalone: true,
    imports: [
    BreadcrampsComponent,
    RouterOutlet,
    RouterLink,
    MilestonesComponent
],
    templateUrl: './tracks.component.html',
    styleUrl: './tracks.component.less'
})
export class TracksComponent {
    switch(tab: string) {
        document.getElementById(tab)?.classList.add('tab-active');

        if (tab === 'tracks') {
            document.getElementById('freeride')?.classList.remove('tab-active');
        }
        if (tab === 'freeride') {
            document.getElementById('tracks')?.classList.remove('tab-active');
        }
    }
}
