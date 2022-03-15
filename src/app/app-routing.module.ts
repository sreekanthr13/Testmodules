import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren: () => import("./login/login.module").then(x => x.LoginModule)},
  {path:'admin/adminhomepage', loadChildren:()=> import("./admin/admin.module").then(x =>x.AdminModule)},
  {path:'user/userhomepage',loadChildren:() => import("./user/user.module").then(x =>x.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
