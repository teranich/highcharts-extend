"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var applicationContainer_component_1 = require("./app/applicationContainer.component");
var home_component_1 = require("./app/childrens/home/home.component");
var editChart_component_1 = require("../../components/editChart/editChart.component");
var chart_component_1 = require("../../components/chart/chart.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_select_1 = require("ng2-select");
var ng2_modal_1 = require("ng2-modal");
// const redirectToHome: Route = {
//     path: '',
//     // redirectTo: '/',
//     pathMatch: 'full'
// };
var home = {
    path: '',
    component: applicationContainer_component_1.ApplicationContainer,
    // canActivate: [AuthGuard],
    children: [{
            path: 'home',
            // redirectTo: 'home',
            component: home_component_1.HomeComponent,
            pathMatch: 'full'
        }, {
            path: 'edit',
            pathMatch: 'full',
            component: editChart_component_1.EditChartComponent
        }]
};
var routes = [
    home
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            // RouterModule.forRoot(routes),
            ng_bootstrap_1.NgbModule.forRoot(),
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            ng2_select_1.SelectModule,
            ng2_modal_1.ModalModule
        ],
        declarations: [
            applicationContainer_component_1.ApplicationContainer,
            chart_component_1.ChartComponent,
            editChart_component_1.EditChartComponent,
            home_component_1.HomeComponent
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [],
        entryComponents: []
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=appRouting.module.js.map