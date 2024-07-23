import { Component, inject } from '@angular/core';
import { ArrowDetailsComponent } from "../../components/atom-elements/arrow-details/arrow-details.component";
import { ButtonType1Component } from "../../components/buttons/button-type-1/button-type-1.component";
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GreetingsComponent } from '../../components/dialogs/greetings/greetings.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        ArrowDetailsComponent,
        ButtonType1Component,
        RouterLink
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.less'
})
export class AboutComponent {
    readonly dialog = inject(MatDialog);

    openDialog(): void {
        this.dialog.open(GreetingsComponent);
    }
}
