import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-mobile',
    standalone: true,
    imports: [],
    templateUrl: './mobile.component.html',
    styleUrl: './mobile.component.less',
    animations: [
        trigger('menuclick', [
            state('collapse',
                style({
                    // 'transform': 'translateY(-300px)',
                    'transform': 'translateX(-100vw)',
                })),
            state('expand',
                style({
                    // 'transform': 'translateY(0px)',
                    'transform': 'translateX(0px)',
                })),
            transition('collapse => expand', [animate('0.4s ease-in-out')]),
            transition('expand => collapse', [animate('0.4s ease-in-out')]),

            state('line1-expand',
                style({
                    'transform': 'translateY(10px) rotate(45deg)'
                })),
            transition('line1-collapse => line1-expand', [animate('0.4s ease-in-out')]),
            transition('line1-expand => line1-collapse', [animate('0.4s ease-in-out')]),

            state('line2-expand',
                style({
                    'transform': 'translateX(28px)',
                    'opacity': 0
                })),
            transition('line2-collapse => line2-expand', [animate('0.4s ease-in-out')]),
            transition('line2-expand => line2-collapse', [animate('0.4s ease-in-out')]),

            state('line3-expand',
                style({
                    'transform': 'translateY(-10px) rotate(-45deg)'
                })),
            transition('line3-collapse => line3-expand', [animate('0.4s ease-in-out')]),
            transition('line3-expand => line3-collapse', [animate('0.4s ease-in-out')]),
        ]),
    ]
})
export class MobileComponent {
    menuClicked = false;
    menuShowHide(time: number) {
        setTimeout(() => this.menuClicked = !this.menuClicked, time)
    }
}
