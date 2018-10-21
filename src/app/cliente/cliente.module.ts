import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ClienteService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: []
})
export class ClienteModule { }
