"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// import {EditChartComponent} from './components/editChart/editChart.component';
var app_service_1 = require("./services/app.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_select_1 = require("ng2-select");
var ng2_modal_1 = require("ng2-modal");
var bootstrap_component_1 = require("./components/bootstrap/bootstrap.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_modal_1.ModalModule,
            ng2_select_1.SelectModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [bootstrap_component_1.BootstrapComponent],
        bootstrap: [bootstrap_component_1.BootstrapComponent],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map