import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

// import {EditChartComponent} from './components/editChart/editChart.component';
import {AppService} from './services/app.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {SelectModule} from 'ng2-select';
import {ModalModule} from "ng2-modal";
import {BootstrapComponent}  from './components/bootstrap/bootstrap.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        SelectModule,
        NgbModule.forRoot()
    ],
    declarations: [BootstrapComponent],
    bootstrap: [BootstrapComponent],
    providers: [AppService]
})
export class AppModule {

}
