import { Component } from '@angular/core';

import { Letra } from '../letra/letra';
import { LetraService } from '../letra/letra.service';
import { Observable } from 'rxjs';
import { LetraDadosService } from '../letra/letra-dados.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  letras: Observable<any>;

  constructor(
    private letraService: LetraService,
    private letraDataService: LetraDadosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.letras = this.letraService.getAll();
  }

  delete(key: string) {
    this.letraService.delete(key);
  }

  edit(letra: Letra, key: string) {
    this.router.navigate(['/editar'])
    this.letraDataService.changeLetra(letra, key);
  }



}
