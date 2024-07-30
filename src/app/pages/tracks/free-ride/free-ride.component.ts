import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrampsComponent } from '../../../components/breadcramps/breadcramps.component';
import { MilestonesComponent } from "../../../components/milestones/milestones.component";

@Component({
    selector: 'app-free-ride',
    standalone: true,
    imports: [
    RouterLink,
    BreadcrampsComponent,
    MilestonesComponent
],
    templateUrl: './free-ride.component.html',
    styleUrl: './free-ride.component.less'
})
export class FreeRideComponent {
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
