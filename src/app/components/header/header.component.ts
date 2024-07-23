import { Component } from '@angular/core';
import { MonitorComponent } from "./monitor/monitor.component";
import { MobileComponent } from "./mobile/mobile.component";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MonitorComponent,
        MobileComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent {

}
