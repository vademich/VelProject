import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-price-list',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './price-list.component.html',
    styleUrl: './price-list.component.less'
})
export class PriceListComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

}
