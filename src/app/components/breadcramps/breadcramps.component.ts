import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-breadcramps',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './breadcramps.component.html',
    styleUrl: './breadcramps.component.less'
})
export class BreadcrampsComponent {
    @Input() link = '';
    @Input() label = '';
}
