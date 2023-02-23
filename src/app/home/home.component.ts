import { Component } from '@angular/core';

import { User, Usuario } from '@app/_interfaces/user';
import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: Usuario | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}