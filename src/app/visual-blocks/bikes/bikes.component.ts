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
                    image: '../../../assets/images/marvels/x2/vel_03_2x.webp'
                },
                {
                    hero: 'captain marvel',
                    image: '../../../assets/images/marvels/x2/vel_06_2x.webp'
                },
                {
                    hero: 'groot',
                    image: '../../../assets/images/marvels/x2/vel_04_2x.webp'
                },
                {
                    hero: 'gamora',
                    image: '../../../assets/images/marvels/x2/vel_07_2x.webp'
                },
                {
                    hero: 'black panther',
                    image: '../../../assets/images/marvels/x2/vel_02_2x.webp'
                },
                {
                    hero: 'harley quinn',
                    image: '../../../assets/images/marvels/x2/vel_09_2x.webp'
                },
                {
                    hero: 'hulk',
                    image: '../../../assets/images/marvels/x2/vel_05_2x.webp'
                },
                {
                    hero: 'sue storm',
                    image: '../../../assets/images/marvels/x2/vel_08_2x.webp'
                },
                {
                    hero: 'venom',
                    image: '../../../assets/images/marvels/x2/vel_01_2x.webp'
                },
                {
                    hero: 'spider gwen',
                    image: '../../../assets/images/marvels/x2/vel_10_2x.webp'
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
