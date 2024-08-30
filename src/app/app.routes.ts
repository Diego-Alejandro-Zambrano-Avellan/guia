import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PacienteComponent } from './paciente/paciente.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';

export const routes: Routes = [
    { path: 'doctor', component:DoctorComponent},
    { path: 'paciente', component:PacienteComponent},
    { path: 'tratamiento', component:TratamientoComponent},
    { path: 'medicamento', component:MedicamentoComponent}
];
