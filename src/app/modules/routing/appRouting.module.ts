import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';

import {ApplicationContainer} from './app/applicationContainer.component';
import {HomeComponent} from "./app/childrens/home/home.component";
import {EditChartComponent} from '../../components/editChart/editChart.component'

import {ChartComponent} from "../../components/chart/chart.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import {SelectModule} from 'ng2-select';
import {ModalModule} from "ng2-modal";
// const redirectToHome: Route = {
//     path: '',
//     // redirectTo: '/',
//     pathMatch: 'full'
// };
const home: Route = {
    path: '',
    component: ApplicationContainer,
    // canActivate: [AuthGuard],
    children: [{
        path: 'home',
        // redirectTo: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },{
        path: 'edit',
        pathMatch: 'full',
        component: EditChartComponent
    }]
};

const routes: Route[] = [
    home
];

@NgModule({
    imports: [
        // RouterModule.forRoot(routes),
        NgbModule.forRoot(),
        FormsModule,
        BrowserModule,
        SelectModule,
        ModalModule
    ],
    declarations: [
        ApplicationContainer,
        ChartComponent,
        EditChartComponent,
        HomeComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
class AppRoutingModule{}

export { AppRoutingModule }
