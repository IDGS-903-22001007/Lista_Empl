import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado-list.html',
  styleUrls: ['./empleado-list.css']
})
export class EmpleadoListComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados();
  }

  deleteEmpleado(id: number): void {
    this.empleadoService.deleteEmpleado(id);
    this.empleados = this.empleadoService.getEmpleados();
  }
}

