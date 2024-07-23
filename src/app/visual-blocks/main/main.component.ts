import { ButtonType1Component } from "../../components/buttons/button-type-1/button-type-1.component";
import { ButtonType2Component } from "../../components/buttons/button-type-2/button-type-2.component";
import { RouterLink } from '@angular/router';

import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GreetingsComponent } from "../../components/dialogs/greetings/greetings.component";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        ButtonType1Component,
        ButtonType2Component,
        RouterLink,
        GreetingsComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './main.component.html',
    styleUrl: './main.component.less'
})
export class MainComponent {
    readonly dialog = inject(MatDialog);

    openDialog(): void {
        this.dialog.open(GreetingsComponent);
    }
}
