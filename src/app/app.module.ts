import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ModalModule } from "ng2-modal";
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';

@NgModule({
    imports: [
        BrowserModule,
        ModalModule,
        FormsModule
        // SelectModule,
        // NgbModule.forRoot()
    ],
    declarations: [BootstrapComponent],
    bootstrap: [BootstrapComponent],
    providers: [AppService]
})
export class AppModule {
}
