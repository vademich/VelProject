import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonType1Component } from "../../components/buttons/button-type-1/button-type-1.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-food-and-relax',
  standalone: true,
  imports: [
    CommonModule,
    ButtonType1Component,
    RouterLink
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
