import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-milestones',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './milestones.component.html',
    styleUrl: './milestones.component.less'
})
export class MilestonesComponent {
    @Input() number = 1;
    steps = [
        {
            number: 1,
            text: "Трек"
        },
        {
            number: 2,
            text: "Велосипеды"
        },
        {
            number: 3,
            text: "Оборудование"
        },
        {
            number: 4,
            text: "Экипировка"
        },
        {
            number: 5,
            text: "Доставка"
        }
    ]
}
