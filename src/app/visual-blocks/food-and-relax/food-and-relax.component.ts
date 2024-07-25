import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-food-and-relax',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './food-and-relax.component.html',
  styleUrl: './food-and-relax.component.less'
})
export class FoodAndRelaxComponent {
  items = [
    'Музыка на открытом воздухе',
    'Тематическая трапеза',
    'Чайная церемония',
    'Mind and body'
]
}
