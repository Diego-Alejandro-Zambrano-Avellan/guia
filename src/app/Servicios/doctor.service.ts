import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  //esto es importante va en tdos los servicios 
  constructor(private http: HttpClient) { }

  //usa esto igual que la base de datos para evitar problemas 
  storeDoctor(Nombre:string,Apellido:string, NuemeroIdentificacion:string, Especialidad:string){
    const parametros ={
      "Nombre": Nombre,
      "Apellido": Apellido,
      "NuemeroIdentificacion":NuemeroIdentificacion,
      "Especialidad":Especialidad
    }
    return this.http.post('http://127.0.0.1:8000/api/doctor', parametros)
  }

  getDoctor(){
    return  this.http.get("http://127.0.0.1:8000/api/doctor");
   }
}
