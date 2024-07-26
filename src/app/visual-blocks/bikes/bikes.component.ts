import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonVelComponent } from "../../components/buttons/button-vel/button-vel.component";
@Component({
    selector: 'app-bikes',
    standalone: true,
    imports: [
    CommonModule,
    ButtonVelComponent
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
                    webp: '../../../assets/images/marvels/x2/vel_03_2x.webp',
                    png: '../../../assets/images/marvels/vel_03.png'
                },
                {
                    hero: 'captain marvel',
                    webp: '../../../assets/images/marvels/x2/vel_06_2x.webp',
                    png: '../../../assets/images/marvels/vel_06.png'
                },
                {
                    hero: 'groot',
                    webp: '../../../assets/images/marvels/x2/vel_04_2x.webp',
                    png: '../../../assets/images/marvels/vel_04.png'
                },
                {
                    hero: 'gamora',
                    webp: '../../../assets/images/marvels/x2/vel_07_2x.webp',
                    png: '../../../assets/images/marvels/vel_07.png'
                },
                {
                    hero: 'black panther',
                    webp: '../../../assets/images/marvels/x2/vel_02_2x.webp',
                    png: '../../../assets/images/marvels/vel_02.png'
                },
                {
                    hero: 'harley quinn',
                    webp: '../../../assets/images/marvels/x2/vel_09_2x.webp',
                    png: '../../../assets/images/marvels/vel_09.png'
                },
                {
                    hero: 'hulk',
                    webp: '../../../assets/images/marvels/x2/vel_05_2x.webp',
                    png: '../../../assets/images/marvels/vel_05.png'
                },
                {
                    hero: 'sue storm',
                    webp: '../../../assets/images/marvels/x2/vel_08_2x.webp',
                    png: '../../../assets/images/marvels/vel_08.png'
                },
                {
                    hero: 'venom',
                    webp: '../../../assets/images/marvels/x2/vel_01_2x.webp',
                    png: '../../../assets/images/marvels/vel_01.png'
                },
                {
                    hero: 'spider gwen',
                    webp: '../../../assets/images/marvels/x2/vel_10_2x.webp',
                    png: '../../../assets/images/marvels/vel_10.png'
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
