import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HttpClientComponent } from './http-client/http-client.component';
import { ReportingComponent } from './reporting/reporting.component';

@NgModule({
  declarations: [
      EmployeeComponent,
      HttpClientComponent,
      ReportingComponent
    ],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  providers: [],
  exports: [EmployeeComponent, HttpClientComponent, ReportingComponent]
})
export class FeatureModule { }
