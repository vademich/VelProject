import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-type-2',
    standalone: true,
    imports: [],
    templateUrl: './button-type-2.component.html',
    styleUrls: ['./button-type-2.component.less', '../../../styles/button-styles.less'],
})
export class ButtonType2Component {
    @Input() buttonText = 'buttonText';
}
