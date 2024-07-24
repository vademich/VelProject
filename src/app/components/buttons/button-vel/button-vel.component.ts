import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-vel',
    standalone: true,
    imports: [],
    templateUrl: './button-vel.component.html',
    styleUrl: './button-vel.component.less'
})
export class ButtonVelComponent {
    @Input() buttonText = 'buttonText';
}
