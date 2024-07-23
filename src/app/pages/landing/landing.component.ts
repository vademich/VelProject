import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MainComponent } from "../../visual-blocks/main/main.component";
import { AboutComponent } from "../../visual-blocks/about/about.component";
import { BikesComponent } from "../../visual-blocks/bikes/bikes.component";
import { FoodAndRelaxComponent } from "../../visual-blocks/food-and-relax/food-and-relax.component";
import { LogisticsComponent } from "../../visual-blocks/logistics/logistics.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        HeaderComponent,
        MainComponent,
        AboutComponent,
        BikesComponent,
        FoodAndRelaxComponent,
        LogisticsComponent,
        ContactFormComponent,
        FooterComponent],
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.less']
})
export class LandingComponent {

}
