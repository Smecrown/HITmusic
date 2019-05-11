import { Component, OnInit } from '@angular/core';

// Import da Class + Services Criados

import { Letra } from '../letra/letra';
import { LetraService } from '../letra/letra.service';
import { LetraDadosService } from '../letra/letra-dados.service';
import { AngularFireStorage } from '@angular/fire/storage';


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
  private selectedFile: File = null;

  constructor(
    private letraService: LetraService,
    private letraDataService: LetraDadosService,
    private router: Router,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.letra = new Letra();
  }

  onSubmit(form) {
    this.letraService.insert(this.letra);
    this.router.navigate(['/home']);
    this.letra = new Letra();
  }

  cancel() {
    this.letra = new Letra();
    this.key = '';
    this.router.navigate(['/home']);
  }

  onFileSelected(event) {
    this.letra.fotoArtista = event.target.files[0].name;
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  onUpload() {
    //const fd = new FormData();
    //fd.append('image', this.selectedFile, this.selectedFile.name)
    //const file = event.target.files[0];
    const filePath = '/img/'+ this.selectedFile.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(this.selectedFile);
  }

}
