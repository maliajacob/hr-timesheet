import { Component, OnInit } from '@angular/core';
import { Department } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] | undefined;

  constructor(
    private departmentsService: DepartmentsService,
  ) {} 

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
}

}
