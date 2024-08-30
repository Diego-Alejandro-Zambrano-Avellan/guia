import { Component } from '@angular/core';
import { MedicamenteService } from '../Servicios/medicamente.service';

@Component({
  selector: 'app-medicamento',
  standalone: true,
  imports: [],
  templateUrl: './medicamento.component.html',
  styleUrl: './medicamento.component.css'
})
export class MedicamentoComponent {
  
  constructor(private mediS:MedicamenteService){}
  med:any

  storeMEdicamento(Nnombre_medicamento:any,Descripcion:any){
    this.mediS.storeMEdicamento(Nnombre_medicamento.value, Descripcion.value).subscribe({
        next: (data)=>{
          debugger
      },
        error: (error)=>{
          debugger
      }
    })
  }

  ngOnInit(){
    this.getMdicamento();
  }
  
  getMdicamento(){
    this.mediS.getMdicamento().subscribe({
      next: (data:any)=>{
         this.med = data.Medicamento;
      },
      error: (error)=>{
          debugger
      }
    })
  }
}
