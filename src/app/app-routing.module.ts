import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'artistas', loadChildren: './artistas/artistas.module#ArtistasPageModule' },
  { path: 'albuns', loadChildren: './albuns/albuns.module#AlbunsPageModule' },
  { path: 'artista', loadChildren: './letra/artista/artista.module#ArtistaPageModule' },
  { path: 'album', loadChildren: './letra/album/album.module#AlbumPageModule' },
  { path: 'musica', loadChildren: './letra/musica/musica.module#MusicaPageModule' },
  { path: 'editar', loadChildren: './editar/editar.module#EditarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
