import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  storeTratamiento(Duracion:any ,medicamentoPrescrito:string, paciente_id:any){
    const parametros ={
      "Duracion": Duracion,
      "medicamentoPrescrito": medicamentoPrescrito,
      "paciente_id":paciente_id
    }
    return this.http.post('http://127.0.0.1:8000/api/tratamiento', parametros)
  }

  //trae todo los datos de todas la tablas que relacione en el contralador metodo(index)
  getDatosGenerales(){
    return  this.http.get("http://127.0.0.1:8000/api/tratamiento");
   }

   getPaciente(){
    return  this.http.get("http://127.0.0.1:8000/api/paciente");
   }

   getMdicamento(){
    return  this.http.get("http://127.0.0.1:8000/api/medicamento");
   }
}
