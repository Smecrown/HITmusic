import { Component, OnInit } from '@angular/core';

// Import da Class + Services Criados

import { Letra } from '../letra';
import { LetraService } from '../letra.service';

///////////////////////////////////////

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  private letra$: Observable<any>;
  private key: string;

  constructor(
    private activeRouter: ActivatedRoute,
    private letraService: LetraService,

  ) {
    this.key = this.activeRouter.snapshot.paramMap.get('key');
    this.letra$ = this.letraService.get(this.key);
  }

  ngOnInit() { }

}