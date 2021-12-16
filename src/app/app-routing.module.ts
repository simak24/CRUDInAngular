import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees', component: EmployeeListComponent},
  {path:'create-employees', component: CreateEmployeeComponent },
  {path:'',redirectTo:'employees', pathMatch: 'full'},
  {path:'update-employees/:id', component: UpdateEmployeeComponent},
  {path:'detail-employees/:id', component: DetailsEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
