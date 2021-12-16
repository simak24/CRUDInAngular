import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee} from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]


  constructor( private employeeService : EmployeeService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getEmployees();

  }
  private getEmployees(){
      this.employeeService.getEmployeeList().subscribe(data=>{
        this.employees=data;
      });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employees', id]);
  }

  deleteEmployee(id:number){
    // id=this.route.snapshot.params['id'];
    this.employeeService.deleteEmployee(id).subscribe(data=>{console.log(data)
      this.getEmployees()});
  }
  
  detailEmployee(id: number){
    this.router.navigate(['detail-employees', id]);
  }


  }


