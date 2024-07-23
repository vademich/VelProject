import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcramps',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './breadcramps.component.html',
  styleUrl: './breadcramps.component.less'
})
export class BreadcrampsComponent {
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
