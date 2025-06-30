import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [
    { id: 1, nombre: 'Eduardo Contrero', correo: 'eduardo@gmail.com', telefono: '477837465', fechaNacimiento: '12/03/00', sexo: 'Masculino' },
    { id: 2, nombre: 'Ana Torres', correo: 'ana@gmail.com', telefono: '477093615', fechaNacimiento: '10/02/03', sexo: 'Femenino' },
    { id: 3, nombre: 'Diana Medina', correo: 'diana@gmail.com', telefono: '478937482', fechaNacimiento: '03/06/02', sexo: 'Femenino' },
    { id: 4, nombre: 'Fernando Platas', correo: 'fernando@gmail.com', telefono: '477023384', fechaNacimiento: '07/04/06', sexo: 'Masculino' }
  ];

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  addEmpleado(empleado: Empleado): void {
    empleado.id = this.empleados.length > 0 ? Math.max(...this.empleados.map(e => e.id!)) + 1 : 1;
    this.empleados.push(empleado);
  }

  deleteEmpleado(id: number): void {
    this.empleados = this.empleados.filter(e => e.id !== id);
  }
}
