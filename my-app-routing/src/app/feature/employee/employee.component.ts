import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButton } from '@angular/material/button';

interface EmployeeForm{
  firstname: string;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm = {} as any;

  selectedFood = null;
  foods = [
    {value: "steak-0", viewValue: "Steak"},
    {value: "tacos-1", viewValue: "Tacos"},
    {value: "pizza-2", viewValue: "Pizza"},
    
  ]
  isDisabled = false as boolean;

  constructor() { }

  ngOnInit(): void {

  }

  submit({value, valid }: {value: EmployeeForm; valid: boolean}, submitButton: MatButton){
    submitButton.disabled = true;
    if(valid){
      console.log("sending POST request");
    }
    console.log(value);
    setTimeout(() => {
        submitButton.disabled = false;
    }, 2000)
  }

}
