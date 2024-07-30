import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from '../../components/dialogs/price-list/price-list.component';

@Component({
  selector: 'app-additive-service',
  standalone: true,
  imports: [
    HeaderComponent, 
    BreadcrampsComponent,
    CommonModule
  ],
  templateUrl: './additive-service.component.html',
  styleUrl: './additive-service.component.less'
})
export class AdditiveServiceComponent {

  readonly dialog = inject(MatDialog);

  openDialog(): void {
      this.dialog.open(PriceListComponent);
  }

  list = [
      {
          name: 'Тематическая трапеза',
          webp: '../../../assets/images/additive-service/webp_2x/vel_01_2x.webp',
          png: '../../../assets/images/additive-service/jpg/vel_01.jpg'
      },
      {
          name: 'Чайная церемония',
          webp: '../../../assets/images/additive-service/webp_2x/vel_05_2x.webp',
          png: '../../../assets/images/additive-service/jpg/vel_05.jpg'
      },
      {
          name: 'Винно-сырная церемония',
          webp: '../../../assets/images/additive-service/webp_2x/vel_03_2x.webp',
          png: '../../../assets/images/additive-service/jpg/vel_03.jpg'
      },
      {
          name: 'Mind and body',
          webp: '../../../assets/images/additive-service/webp_2x/vel_07_2x.webp',
          png: '../../../assets/images/additive-service/jpg/vel_07.jpg'
      },
      {
          // name: 'Музыка на открытом воздухе',
          name: 'Музыка на природе',
          webp: '../../../assets/images/additive-service/webp_2x/violin.webp',
          png: '../../../assets/images/additive-service/jpg/violin.jpg'
      },
      {
          name: 'Кальянный сервис',
          webp: '../../../assets/images/additive-service/webp_2x/vel_09_2x.webp',
          png: '../../../assets/images/additive-service/jpg/vel_09.jpg'
      },
  ];

}
