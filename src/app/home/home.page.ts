import { Component } from '@angular/core';

import { Letra } from '../letra/letra';
import { LetraService } from '../letra/letra.service';
import { Observable } from 'rxjs';
import { LetraDadosService } from '../letra/letra-dados.service'
import { Router } from "@angular/router";
import { AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  letras: Observable<Letra>;
  fotos:any;
  foto: any;

  constructor(
    private letraService: LetraService,
    private letraDataService: LetraDadosService,
    private router: Router,
    private storage: AngularFireStorage,

  ) {
    //const ref = this.storage.ref('gs://hitmusic-01.appspot.com/img/');
    //this.foto = ref.getDownloadURL();
  }

  ngOnInit() {
    this.letraService.getAll().subscribe(
      res => {
        res.forEach(f => {
          
          let foto = 'gs://hitmusic-01.appspot.com/img/' + f.fotoArtista;
          console.log(foto);
          this.storage.ref(foto)
            .getDownloadURL()
            .subscribe(
              res => {
                this.fotos.push(res)
              }
            )

        });


      },
      err => {
        console.log(err);
      }
    );
  }

  delete(key: string) {
    this.letraService.delete(key);
  }

  edit(letra: Letra, key: string) {
    this.router.navigate(['/editar'])
    this.letraDataService.changeLetra(letra, key);
  }






}
