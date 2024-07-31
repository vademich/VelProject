import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from '../../components/dialogs/price-list/price-list.component';

export interface IAdditiveService {
    name: string,
    quantityHeader: string,
    costHeader: string,
    table?: IPriceList[]
}
export interface IPriceList {
    quantity?: '0',
    cost?: '0'
}

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
    additiveServices = [
        {
            name: 'Тематическая трапеза',
            webp: '../../../assets/images/additive-service/webp_2x/vel_01_2x.webp',
            png: '../../../assets/images/additive-service/jpg/vel_01.jpg',
            quantityHeader: 'Количество человек',
            costHeader: 'Стоимость за услугу',
            table: [
                {
                    quantity: 'от 1 до 8',
                    cost: '14 000 ₽'
                },
                {
                    quantity: 'от 9 до 16',
                    cost: '25 000 ₽'
                },
                {
                    quantity: 'от 17 до 24',
                    cost: '38 000 ₽'
                },
            ]
        },
        {
            name: 'Чайная церемония',
            webp: '../../../assets/images/additive-service/webp_2x/vel_05_2x.webp',
            png: '../../../assets/images/additive-service/jpg/vel_05.jpg',
            quantityHeader: 'Количество',
            costHeader: 'Цена за услугу',
            table: [
                {
                    quantity: 0,
                    cost: 0
                }
            ]
        },
        {
            name: 'Винно-сырная церемония',
            webp: '../../../assets/images/additive-service/webp_2x/vel_03_2x.webp',
            png: '../../../assets/images/additive-service/jpg/vel_03.jpg',
            quantityHeader: 'Количество',
            costHeader: 'Цена за услугу',
            table: [
                {
                    quantity: 0,
                    cost: 0
                }
            ]
        },
        {
            name: 'Mind and body',
            webp: '../../../assets/images/additive-service/webp_2x/vel_07_2x.webp',
            png: '../../../assets/images/additive-service/jpg/vel_07.jpg',
            quantityHeader: 'Количество',
            costHeader: 'Цена за услугу',
            table: [
                {
                    quantity: 0,
                    cost: 0
                }
            ]
        },
        {
            name: 'Музыка на природе',
            webp: '../../../assets/images/additive-service/webp_2x/violin.webp',
            png: '../../../assets/images/additive-service/jpg/violin.jpg',
            quantityHeader: 'Количество',
            costHeader: 'Цена за услугу',
            table: [
                {
                    quantity: 0,
                    cost: 0
                }
            ]
        },
        {
            name: 'Кальянный сервис',
            webp: '../../../assets/images/additive-service/webp_2x/vel_09_2x.webp',
            png: '../../../assets/images/additive-service/jpg/vel_09.jpg',
            quantityHeader: 'Количество кальянов',
            costHeader: 'Стоимость',
            table: [
                {
                    quantity: '1',
                    cost: '10 000 ₽'
                },
                {
                    quantity: '2',
                    cost: '13 000 ₽'
                },
                {
                    quantity: '3',
                    cost: '16 000 ₽'
                },
                {
                    quantity: '4',
                    cost: '19 000 ₽'
                },
                {
                    quantity: '5',
                    cost: '22 000 ₽'
                },
                {
                    quantity: '6',
                    cost: '25 000 ₽'
                },
            ]
        },
    ];

    list = JSON.parse(JSON.stringify(this.additiveServices));

    readonly dialog = inject(MatDialog);

    openDialog(priceList: IAdditiveService) {
        this.dialog.open(PriceListComponent, {
            data: {
                name: priceList.name,
                title: priceList.name,
                quantityHeader: priceList.quantityHeader,
                costHeader: priceList.costHeader,
                table: priceList.table
            }
        });
    }

}
