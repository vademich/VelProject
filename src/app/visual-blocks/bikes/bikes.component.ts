import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-bikes',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './bikes.component.html',
    styleUrl: './bikes.component.less',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BikesComponent implements OnInit, AfterViewInit {
    @ViewChild('swiper1') swiper1!: ElementRef<any>;

    slides: any[] = []
    thumbslides: any[] = []
    routeSub: any;

    constructor(private zone: NgZone, private route: ActivatedRoute) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(() => {
            this.slides = [
                {
                    hero: 'master wong',
                    image: '../../../assets/images/marvels/vel_03.png'
                },
                {
                    hero: 'captain marvel',
                    image: '../../../assets/images/marvels/vel_06.png'
                },
                {
                    hero: 'groot',
                    image: '../../../assets/images/marvels/vel_04.png'
                },
                {
                    hero: 'gamora',
                    image: '../../../assets/images/marvels/vel_07.png'
                },
                {
                    hero: 'black panther',
                    image: '../../../assets/images/marvels/vel_02.png'
                },
                {
                    hero: 'harley quinn',
                    image: '../../../assets/images/marvels/vel_09.png'
                },
                {
                    hero: 'hulk',
                    image: '../../../assets/images/marvels/vel_05.png'
                },
                {
                    hero: 'sue storm',
                    image: '../../../assets/images/marvels/vel_08.png'
                },
                {
                    hero: 'venom',
                    image: '../../../assets/images/marvels/vel_01.png'
                },
                {
                    hero: 'spider gwen',
                    image: '../../../assets/images/marvels/vel_10.png'
                },
            ];
        });
    }

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            const swiperParams = {
                // loop: true,
                slidesPerView: 1,
                spaceBetween: 300,
                navigation: true,
                pagination: {
                    clickable: true
                }
            };

            Object.assign(this.swiper1.nativeElement, swiperParams);
            this.swiper1.nativeElement.initialize();
        });
    }
}
