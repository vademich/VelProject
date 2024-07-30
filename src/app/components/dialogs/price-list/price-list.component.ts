import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
    @Input() title = 'Услуга';
    @Input() quantityHeader = 'Количество';
    @Input() costHeader = 'Цена за услугу';

    @Input() table = [
        {
            quantity: 0,
            cost: 0
        }
    ]
}
