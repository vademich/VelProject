import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from "../../contact-form/contact-form.component";
// 
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ButtonType1Component } from '../../buttons/button-type-1/button-type-1.component';

@Component({
    selector: 'app-greetings',
    standalone: true,
    imports: [
        FormsModule,
        MatDialogModule,
        ContactFormComponent,
        RecaptchaModule,
        RecaptchaFormsModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ButtonType1Component
    ],
    templateUrl: './greetings.component.html',
    styleUrl: './greetings.component.less',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: {
                siteKey: environment.recaptcha.siteKey,
            } as RecaptchaSettings,
        }
    ]
})
export class GreetingsComponent {

    title = `Мы приветствуем Вас!`;
    text = `Для начала Вашего велопутешествия,
    оставьте, пожалуйста, заявку или свяжитесь
    с нами по телефону `;

    constructor(
        private toastrService: ToastrService
    ) {
        this.token = undefined;
    }

    token: string | undefined;
    name: string = "";
    email: string = "";
    tel: string = "";
    message: string = "";
    sendMail(form: NgForm) {
        if (form.status == 'VALID') {
            const url = 'https://api.groupits.ru/mail';
            const user = {
                "name": form.form.value.name,
                "tel": form.form.value.tel,
                "email": form.form.value.email,
                "message": form.form.value.message,
                "keyRefer": "vel",
                "token": this.token
            };
            axios.post(url, user)
                .then(() => { this.toastrService.success('Ваше сообщение доставлено!', 'Успешно'); })
                .catch(() => { this.toastrService.error('Ошибка в отправке сообщения.', 'Ошибка!'); })

        } else if (!(form.form.value.name && form.form.value.tel)) {
            this.toastrService.warning('Заполните пустые поля!', 'Предупреждение!');
        } else if (form.form.value.token == undefined) {
            this.toastrService.warning('Подтвердите, что Вы не робот.', 'Предупреждение!');
        }
    }
}
