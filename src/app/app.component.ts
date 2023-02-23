import { Component } from '@angular/core';

import { AccountService } from './_services/account.service';
import { User } from './_interfaces/user';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user?: User | null;

    constructor(private accountService: AccountService) {}

    logout() {
        this.accountService.logout();
    }
}