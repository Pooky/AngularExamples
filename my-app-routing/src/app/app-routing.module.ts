import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"
import { EmployeeComponent } from './feature/employee/employee.component';
import { ReportingComponent } from './feature/reporting/reporting.component';


const routes: Routes = [
    {
        path: "employee",
        component: EmployeeComponent
    },
    {
        path: "lazy-load",
        loadChildren: () => {
            return import("../app/communication/communication.module").then(
                (response) => response.ComunicationModule
            )
        }
    }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}