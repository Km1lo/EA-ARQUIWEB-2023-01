import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvtaskListComponent } from './component/cvtask/cvtask-list/cvtask-list.component';
import { CvtaskViewComponent } from './component/cvtask/cvtask-view/cvtask-view.component';

const routes: Routes = [
  {
    path: 'cvusuario/tareas', component: CvtaskListComponent
  },
  {
    path: 'cvusuario/view/:id', component: CvtaskViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
