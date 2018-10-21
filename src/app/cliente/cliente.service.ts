import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ClienteInterface } from './cliente.interface';

const API = 'http://demo3811352.mockable.io/api/photo';

@Injectable({ providedIn: 'root'})
export class ClienteService {
    constructor(private http: HttpClient){}

    public listCliente(): Observable<ClienteInterface>{
        return this.http
            .get<ClienteInterface>(API);
    }

}