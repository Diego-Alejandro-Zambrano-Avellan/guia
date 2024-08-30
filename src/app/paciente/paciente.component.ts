import { Component } from '@angular/core';
import { DoctorService } from '../Servicios/doctor.service';
import { PacienteService } from '../Servicios/paciente.service';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {
  //el servicio es este para acceder a los metodos del servicio
  constructor(private pacienteS:PacienteService){}
  listDoctor:any
  listPaciente:any
  listDatos:any

  storePaciente(Nombre:any,Apellido:any, NuemeroIdentificacion:any, Diagnostico:any, doctor_id:any){
    this.pacienteS.storePaciente(Nombre.value, Apellido.value, NuemeroIdentificacion.value, Diagnostico.value, doctor_id.value).subscribe({
        next: (data)=>{
          debugger
      },
        error: (error)=>{
          debugger
      }
    })
  }

  ngOnInit(){
    this.getDoctor();
    this.getPaciente();
    this.getDatos();
  }
  //tare los datos del paciente y el doctor por el join que esta en el controlador 
  getDatos(){
    this.pacienteS.getDatos().subscribe({
      next: (data:any)=>{
        //               nombre del array que sale en el postman al buscar
        this.listDatos = data.Datos;
     },
     error: (error)=>{
         debugger
     }
    })
  }

  getPaciente(){
    this.pacienteS.getPaciente().subscribe({
      next: (data:any)=>{
         this.listPaciente = data.Paciente;
      },
      error: (error)=>{
          debugger
      }
    })
  }

  //este es el que utilizo para el select para asignar un doctor 
  getDoctor(){
    this.pacienteS.getDoctor().subscribe({
      next: (data:any)=>{
        //declaramos la variable 
         this.listDoctor = data.Doctor;
      },
      error: (error)=>{
          debugger
      }
    })
  }
}
