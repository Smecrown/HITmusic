import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Letra } from './letra';

@Injectable({
  providedIn: 'root'
})
export class LetraDadosService {
  private letraSource = new BehaviorSubject({ letra: null, key: ''});
  currentLetra = this.letraSource.asObservable();
  constructor() { }

  changeLetra(letra: Letra, key: string) {
    this.letraSource.next({ letra: letra, key: key });
  }

}
