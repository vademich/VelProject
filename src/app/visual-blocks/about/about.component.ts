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
    mainBlockTitle = {
        green: `ПУТЕШЕСТВУЙ`,
        black: ` С НАМИ!`
    }
    mainBlockText =
        `Велосипед поможет Вам найти новые границы свободы
        и увидеть этот мир совершенно другими глазами.
        Начни свое путешествие прямо сейчас.`;

    velBlockTitle = `Велосипеды`;
    velBlockText =
        `У нас самый большой парк велосипедов
        и мы подберем для Вас самый лучший
        и подходящий велосипед. Ваш
        велодруг уже ждет Вас и хочет
        отправится вместе с Вами
        в прекрасное велопутешесвтие.`;

    tracksBlockTitle = `Велотур`;
    tracksBlockText =
        `Наши Велогиды откроют для Вас 4
        прекрасных маршрута по Черноземью.
        Это одни из лучших локаций нашего
        региона. Путешествуй с нами,
        путешествуй без границ.`;

    readonly dialog = inject(MatDialog);

    openDialog(): void {
        this.dialog.open(GreetingsComponent);
    }
}
