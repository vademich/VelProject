import { Component, inject } from '@angular/core';
import { ButtonType1Component } from "../buttons/button-type-1/button-type-1.component";
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GreetingsComponent } from '../dialogs/greetings/greetings.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        ButtonType1Component,
        RouterLink
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.less'
})
export class FooterComponent {
    mail = "vel.travel@mail.ru";
    readonly dialog = inject(MatDialog);

    openDialog(): void {
        this.dialog.open(GreetingsComponent);
    }
}
