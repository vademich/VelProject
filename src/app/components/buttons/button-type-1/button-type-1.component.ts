import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-type-1',
    standalone: true,
    imports: [],
    templateUrl: './button-type-1.component.html',
    styleUrls: ['./button-type-1.component.less', '../../../styles/button-styles.less'],
})
export class ButtonType1Component {
    @Input() buttonText = 'buttonText';
}
