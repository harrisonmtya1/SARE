
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamenComponent } from "./examen/examen.component";

const routes:Routes=[
    {
        path:'',
        children:[
            {
                path:'examen',
                component:ExamenComponent
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ExamenesRouting{}