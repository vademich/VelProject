import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-arrow-details',
    standalone: true,
    imports: [],
    templateUrl: './arrow-details.component.html',
    styleUrl: './arrow-details.component.less'
})
export class ArrowDetailsComponent {
    @Input() arrowText = 'Подробнее';
}
