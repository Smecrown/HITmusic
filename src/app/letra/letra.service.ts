import { Injectable } from '@angular/core';
// Firebase + CLass
import { AngularFireDatabase } from '@angular/fire/database';
import { Letra } from './letra';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LetraService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  insert(letra: Letra) {
    this.db.list('letra').push(letra)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  getAll() {
    return this.db.list<Letra>('letra')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() }));

        })
      )
  }

  get(key: string) {
    return this.db.object<Letra>('/letra/' + key).valueChanges();
  }

  delete(key: string) {
    this.db.object(`letra/${key}`).remove();
  }

  update( letra: Letra, key: string) {
    this.db.list('letra').update(key,letra)
    .catch((error: any) => {
      console.error(error);
    });
  }
}
