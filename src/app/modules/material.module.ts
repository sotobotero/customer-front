import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [  
  ],
  imports: [MatTableModule, MatPaginatorModule, MatToolbarModule,  MatSidenavModule, 
       MatListModule,    MatButtonModule,    MatIconModule, CommonModule,MatFormFieldModule, MatIconModule,
       MatSelectModule, MatCardModule,  MatFormFieldModule,
       MatInputModule ,
    MatSlideToggleModule,MatSnackBarModule],
  exports: [MatTableModule, MatPaginatorModule, MatToolbarModule,  MatSidenavModule,  MatFormFieldModule, MatIconModule,
    MatListModule,    MatButtonModule,    MatIconModule, CommonModule,MatSelectModule, MatFormFieldModule,
    MatInputModule ,
    MatCardModule,MatSnackBarModule]
})
export class MaterialModule {}