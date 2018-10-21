import { Component, OnInit } from '@angular/core';

import { Opcoes } from './navbar.opcoes.interface';
import { ClienteInterface } from '../cliente/cliente.interface';

@Component({
  selector: 'sc-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public cliente: ClienteInterface = <ClienteInterface>{};
  public title: string = '';
  public opcoes: Opcoes[] = [];

  constructor() { }

  ngOnInit() {
    
    this.title = 'Inicio';

    this.cliente = <ClienteInterface>{nome: 'Wesley', login: 'wesleyoliveira@semprecharme.com.br', photo: 'https://goo.gl/LLBW21', empresa: 'Sempre Charme'};

    if(! <number>this.opcoes.length ){
        this.opcoes = <Opcoes[]>[{
          name: "Marcar Hor&aacute;rio",
          link: "#",
          icon: "access_time",
          onMobile: true
        },{
          name: "Hist&oacute;rico",
          link: "#",
          icon: "hourglass_empty",
          onMobile: true
        },{
          name: "Pagamento",
          link: "#",
          icon: "credit_card",
          onMobile: true
        },{
          name: "Pacotes",
          link: "#",
          icon: "shopping_basket",
          onMobile: true
        },{
          name: "Perfil",
          link: "#",
          icon: "#",
          onMobile: false
        },{
          name: "Ajuda",
          link: "#",
          icon: "help",
          onMobile: true
        },{
          name: "Configura&ccedil;&otilde;es",
          link: "#",
          icon: "settings",
          onMobile: true
        }];
    }
  }

}
