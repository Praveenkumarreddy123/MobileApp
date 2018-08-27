import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class Global {
    public version: string = environment.version;
    userToken: '';
}
