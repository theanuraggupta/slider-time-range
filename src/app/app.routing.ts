import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'screen1', pathMatch: 'full' },
            { path: 'screen1', component: Screen1Component},
            { path: 'screen2', component: Screen2Component}
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
