import { Component } from '@angular/core';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoService } from './services/empleado.service';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadoFormComponent, EmpleadoListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Lista_Emp';

  constructor(public empleadoService: EmpleadoService) {}

  onAddEmpleado(empleado: Empleado) {
    this.empleadoService.addEmpleado(empleado);
  }
}
