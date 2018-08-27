import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Global } from '../classes/global';
@Injectable()
export class AlwaysAuthGuard implements CanActivate  {
    constructor(private router: Router, public global: Global) { }
    canActivate() {
        if (this.global.userToken !== '' || this.global.userToken === undefined ) {
            this.router.navigate(['/home']);
             return false;
        }
        return true;
    }
}
