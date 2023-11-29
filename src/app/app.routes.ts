import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CriarEditarComponent } from './criar-editar/criar-editar.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'criar', component: CriarEditarComponent },
  { path: 'editar/:id', component: CriarEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}