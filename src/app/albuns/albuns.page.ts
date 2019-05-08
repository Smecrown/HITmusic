import { Component, OnInit } from '@angular/core';

import { Letra } from '../letra/letra';
import { LetraService } from '../letra/letra.service';
import { Observable } from 'rxjs';
import { LetraDadosService } from '../letra/letra-dados.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.page.html',
  styleUrls: ['./albuns.page.scss'],
})
export class AlbunsPage implements OnInit {
  letras: Observable<any>;
  
  constructor(
    private letraService: LetraService,
    private letraDataService: LetraDadosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.letras = this.letraService.getAll();
  }
}
