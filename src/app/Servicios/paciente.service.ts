import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  
  storePaciente(Nombre:string,Apellido:string, NuemeroIdentificacion:string, Diagnostico:string, doctor_id:any){
    const parametros ={
      "Nombre": Nombre,
      "Apellido": Apellido,
      "NuemeroIdentificacion":NuemeroIdentificacion,
      "Diagnostico":Diagnostico,
      "doctor_id":doctor_id
    }
    return this.http.post('http://127.0.0.1:8000/api/paciente', parametros)
  }

  getDatos(){
    return this.http.get("http://127.0.0.1:8000/api/DatosPyD");
  }

  getPaciente(){
    return  this.http.get("http://127.0.0.1:8000/api/paciente");
   }

   //se consume apis de otros servicio para el momento del select en el html es importante esta es la clave 
  getDoctor(){
    return  this.http.get("http://127.0.0.1:8000/api/doctor");
   }

}
