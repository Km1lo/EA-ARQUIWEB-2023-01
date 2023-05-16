import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
//Paginator
import { MatPaginatorModule } from '@angular/material/paginator';
//MatCard "Carta en el Home"
import { MatCardModule } from '@angular/material/card';
//Botones para angular material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
//Grid (posicionamiento de los elementos) para angular material
import { MatGridListModule } from '@angular/material/grid-list';
//MatTable para mostrar los datos en una tabla
import { MatTableModule } from '@angular/material/table';
//HttpClientModule para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';
//MatDialog para mostrar un dialogo de confirmacion al eliminar un artista
import { MatDialogModule } from '@angular/material/dialog';
//FormsModule para trabajar con formularios, en el caso de admin register
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//Datetimepicker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvmattoolbarComponent } from './component/cvmattoolbar/cvmattoolbar.component';
import { CvtaskComponent } from './component/cvtask/cvtask.component';
import { CvtaskListComponent } from './component/cvtask/cvtask-list/cvtask-list.component';
import { CvtaskDialogComponent } from './component/cvtask/cvtask-list/cvtask-dialog/cvtask-dialog.component';
import { CvtaskViewComponent } from './component/cvtask/cvtask-view/cvtask-view.component';



@NgModule({
  declarations: [
    AppComponent,
    CvmattoolbarComponent,
    CvtaskComponent,
    CvtaskListComponent,
    CvtaskDialogComponent,
    CvtaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
