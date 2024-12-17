import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, CustomerAPIService } from 'src/services/customerService';

import { MatDialog } from '@angular/material/dialog';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  
  allDatasource!: Customer[];
  dataSource = new MatTableDataSource<Customer>(this.allDatasource);

  col: string[] = ['id', 'name', 'email', 'position','actions'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;   

  
  constructor(private customerService:CustomerAPIService, public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {   
    this.findAllCustomers();
    
  }
  ngOnInit(){}
  

  findAllCustomers(){
    this.customerService.getAllcustomers().subscribe({
      next: (data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<Customer>(data);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error sending request:', err);
        this.handleError(err);
      }
    })
  } 

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: '250px',
      data: { id },
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.info(`Filtering customers after delete customer with id ${id}`);       
        this.dataSource.data = this.dataSource.data.filter( (customer) => customer.id !== id);  
      }
    });
  }

  openEditModal(customer: any){
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '900px',
      data: { customer },
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.info(`Filtering customers after delete customer with id ${customer.id}`);       
        this.dataSource.data = this.dataSource.data.filter( (customer) => customer.id !== customer.id);  
      }
    } );

  }

  private handleError(error: HttpErrorResponse): void {
    let errorMessage = 'Ha ocurrido un error en la aplicación';
    
    if (error.status === 0) {
      errorMessage = 'No hay conexión del front con el backend. Asegurate que no tienes restricciones de red en tu entorno de trabajo. '+ error.message;
    } else if (error.status === 404) {
      errorMessage = 'No se encontraron registros.';
    } else if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `El servidor respondió con código ${error.status}. Mensaje: ${error.message}`;
    }
    this.showNotification(errorMessage, 'ERROR');
  }


  private showNotification(message: string, type: keyof typeof this.SNACKBAR_TYPES): void {
    const config: MatSnackBarConfig = {
      ...this.snackBarConfig,
      panelClass: [this.SNACKBAR_TYPES[type]]
    };

    this.snackBar.open(message, 'Cerrar', config);
  }

  private snackBarConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top', // Cambiado a top para que coincida con los estilos centrados
  };

  private readonly SNACKBAR_TYPES = {
    ERROR: 'error-snackbar',
    SUCCESS: 'success-snackbar',
    WARNING: 'warning-snackbar'
  } as const;

}
