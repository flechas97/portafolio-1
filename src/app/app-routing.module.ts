import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuMobilComponent } from "./components/menu-mobil/menu-mobil.component";
import { MenuComponent } from "./components/menu/menu.component";
import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre_mi', component: MenuComponent },
  { path: 'trabajos', component: MenuComponent },
  { path: 'contacto', component: MenuComponent },
  // { path: 'proyectos', component: MenuComponent },
  // { path: 'contacto', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
