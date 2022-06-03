import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuMobilComponent } from "./components/menu-mobil/menu-mobil.component";
import { MenuComponent } from "./components/menu/menu.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { SobremiComponent } from "./components/sobremi/sobremi.component";
import { BodyComponent } from "./components/body/body.component";
import { TrabajosComponent } from "./components/trabajos/trabajos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
const routes: Routes = [
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre_mi', component: SobremiComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'contacto', component: ContactoComponent },
  // { path: 'proyectos', component: MenuComponent },
  // { path: 'contacto', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
