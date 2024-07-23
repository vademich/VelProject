import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ButtonType1Component } from '../buttons/button-type-1/button-type-1.component';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [
        RecaptchaModule,
        RecaptchaFormsModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ButtonType1Component,
    ],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.less',
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
export class ContactFormComponent {
    constructor(
        private toastrService: ToastrService
    ) {
        this.token = undefined;
    }
    public showSuccess(text: string): void {
        this.toastrService.success(text, 'Успешно');
    }

    public showInfo(text: string, title: string): void {
        this.toastrService.info(text, title);
    }

    public showWarning(text: string): void {
        this.toastrService.warning(text, 'Предупреждение!');
    }

    public showError(text: string): void {
        this.toastrService.error(text, 'Ошибка!');
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
                .then(() => { this.showSuccess('Ваше сообщение доставлено!'); })
                .catch(() => { this.showError('Ошибка в отправке сообщения.'); })

        } else if (!(form.form.value.name && form.form.value.tel)) {
            this.showWarning('Заполните пустые поля!');
        } else if (form.form.value.token == undefined) {
            this.showWarning('Подтвердите, что Вы не робот.');
        }
    }

}
