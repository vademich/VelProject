import { Component, Input } from '@angular/core';
import { ArrowDetailsComponent } from "../../atom-elements/arrow-details/arrow-details.component";

@Component({
    selector: 'app-button-vel-arrow',
    standalone: true,
    imports: [ArrowDetailsComponent],
    templateUrl: './button-vel-arrow.component.html',
    styleUrl: './button-vel-arrow.component.less'
})
export class ButtonVelArrowComponent {
    @Input() buttonText = 'buttonText';
}
