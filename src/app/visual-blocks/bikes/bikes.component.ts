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
                    image: '../../../assets/images/marvels/master-wong.png'
                },
                {
                    hero: 'captain marvel',
                    image: '../../../assets/images/marvels/captain-marvel.png'
                },
                {
                    hero: 'groot',
                    image: '../../../assets/images/marvels/groot.png'
                },
                {
                    hero: 'gamora',
                    image: '../../../assets/images/marvels/gamora.png'
                },
                {
                    hero: 'black panther',
                    image: '../../../assets/images/marvels/black-panther.png'
                },
                {
                    hero: 'harley quinn',
                    image: '../../../assets/images/marvels/harley-quinn.png'
                },
                {
                    hero: 'hulk',
                    image: '../../../assets/images/marvels/hulk.png'
                },
                {
                    hero: 'spider gwen',
                    image: '../../../assets/images/marvels/spider-gwen.png'
                },
                {
                    hero: 'venom',
                    image: '../../../assets/images/marvels/venom.png'
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
