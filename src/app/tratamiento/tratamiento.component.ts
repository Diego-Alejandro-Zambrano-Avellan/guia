import { Component } from '@angular/core';
import { TratamientoService } from '../Servicios/tratamiento.service';

@Component({
  selector: 'app-tratamiento',
  standalone: true,
  imports: [],
  templateUrl: './tratamiento.component.html',
  styleUrl: './tratamiento.component.css'
})
export class TratamientoComponent {
  constructor(private trataS:TratamientoService){}

  listDatosG:any
  listPaciente:any
  listMedi:any

  storeTratamiento(Duracion:any ,medicamentoPrescrito:any, paciente_id:any){
    this.trataS.storeTratamiento(Duracion.value, medicamentoPrescrito.value,paciente_id.value).subscribe({
        next: (data)=>{
          debugger
      },
        error: (error)=>{
          debugger
      }
    })
  }

  ngOnInit(){
    this.getDatosGenerales();
    this.getPaciente();
    this.getMdicamento();
  }
  //metodo que sonum,e el servicio que trate todos los datos 
  getDatosGenerales(){
    this.trataS.getDatosGenerales().subscribe({
      next: (data:any)=>{
         this.listDatosG = data.DatosGenerales;
      },
      error: (error)=>{
          debugger
      }
    })
  }
  //uso los pacientes registrados con un select en el html 
  getPaciente(){
    this.trataS.getPaciente().subscribe({
      next: (data:any)=>{
         this.listPaciente = data.Paciente;
      },
      error: (error)=>{
          debugger
      }
    })
  }

  //para asignarle medicamentos preescritos 
  getMdicamento(){
    this.trataS.getMdicamento().subscribe({
      next: (data:any)=>{
         this.listMedi = data.Medicamento;
      },
      error: (error)=>{
          debugger
      }
    })
  }
}
