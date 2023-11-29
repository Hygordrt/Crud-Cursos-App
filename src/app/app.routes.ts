import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CriarEditarComponent } from './criar-editar/criar-editar.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'criar', component: CriarEditarComponent },
  { path: 'editar/:id', component: CriarEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}