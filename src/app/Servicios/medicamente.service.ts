import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamenteService {

  constructor(private http: HttpClient) { }

  
  storeMEdicamento(nombre_medicamento:string,Descripcion:string){
    const parametros ={
      "nombre_medicamento": nombre_medicamento,
      "Descripcion": Descripcion
    }
    return this.http.post('http://127.0.0.1:8000/api/medicamento', parametros)
  }

  getMdicamento(){
    return  this.http.get("http://127.0.0.1:8000/api/medicamento");
   }
}
