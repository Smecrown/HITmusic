import { Component, OnInit } from '@angular/core';

// Import da Class + Services Criados

import { Letra } from '../letra/letra';
import { LetraService } from '../letra/letra.service';
import { LetraDadosService } from '../letra/letra-dados.service';

///////////////////////////////////////

import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  letra: Letra;
  key: string = '';

  constructor(
    private letraService: LetraService,
    private letraDataService: LetraDadosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.letra = new Letra();
    this.letraDataService.currentLetra.subscribe(data => {
      if (data.letra && data.key) {
        this.letra = new Letra();
        this.letra.artista = data.letra.artista;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    this.letraService.update(this.letra, this.key);
    this.router.navigate(['/home']);
    this.letra = new Letra();
  }

  cancel() {
    this.letra = new Letra();
    this.key = '';
    this.router.navigate(['/home']);
  }

}
