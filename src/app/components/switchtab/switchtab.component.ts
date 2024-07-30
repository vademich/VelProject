import { Component } from '@angular/core';

@Component({
    selector: 'app-switchtab',
    standalone: true,
    imports: [],
    templateUrl: './switchtab.component.html',
    styleUrl: './switchtab.component.less'
})
export class SwitchtabComponent {

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
