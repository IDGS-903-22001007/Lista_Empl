import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado-form.html',
  styleUrls: ['./empleado-form.css']
})
export class EmpleadoFormComponent {
  @Output() onAddEmpleado = new EventEmitter<Empleado>();
  
  empleado: Empleado = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: ''
  };

  submitForm(): void {
    if (this.empleado.nombre && this.empleado.correo && this.empleado.telefono && this.empleado.fechaNacimiento && this.empleado.sexo) {
      this.onAddEmpleado.emit({...this.empleado});
      this.resetForm();
    }
  }

  resetForm(): void {
    this.empleado = {
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      sexo: ''
    };
  }
}