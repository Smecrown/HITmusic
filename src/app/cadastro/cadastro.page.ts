import { Component, OnInit } from '@angular/core';

// Import da Class + Services Criados

import { Letra } from '../letra/letra';
import { LetraService } from '../letra/letra.service';
import { LetraDadosService } from '../letra/letra-dados.service';

///////////////////////////////////////

import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  letra: Letra;
  key: string = '';

  constructor(
    private letraService: LetraService,
    private letraDataService: LetraDadosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.letra = new Letra();
  }

  onSubmit() {
    this.letraService.insert(this.letra);
    this.router.navigate(['/home']);
    this.letra = new Letra();
  }

  cancel() {
    this.letra = new Letra();
    this.key = '';
    this.router.navigate(['/home']);
  }

}
