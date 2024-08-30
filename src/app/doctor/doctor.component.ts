import { Component } from '@angular/core';
import { DoctorService } from '../Servicios/doctor.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

  constructor(private doctorS:DoctorService){}
  doc:any

  storeDoctor(Nombre:any,Apellido:any, NuemeroIdentificacion:any, Especialidad:any){
    this.doctorS.storeDoctor(Nombre.value, Apellido.value, NuemeroIdentificacion.value, Especialidad.value).subscribe({
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
  }
  
  getDoctor(){
    this.doctorS.getDoctor().subscribe({
      next: (data:any)=>{
         this.doc = data.Doctor;
      },
      error: (error)=>{
          debugger
      }
    })
  }
}
