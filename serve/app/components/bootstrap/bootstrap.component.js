"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chart_constatnts_1 = require("../bootstrap/chart.constatnts");
var app_service_1 = require("./../../services/app.service");
// import * as Highcharts from "highcharts";
var BootstrapComponent = (function () {
    function BootstrapComponent(_appService) {
        var _this = this;
        this.config = {
            style: 'blue',
            chart: {
                type: 'line'
            },
            title: {
                text: 'hello'
            },
            xAxis: {
                title: {
                    text: 'Fruit eaten'
                },
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                    name: 'Jane',
                    data: [1, 2, 3]
                }, {
                    name: 'John',
                    data: [3, 2, 1]
                }]
        };
        this.objects = [];
        this.object = {};
        this.propFunctions = chart_constatnts_1.globalVariables.PROP_FUNCTIONS;
        this.propStyles = chart_constatnts_1.globalVariables.PROP_STYLES;
        this.chartTypes = chart_constatnts_1.globalVariables.CHART_TYPES;
        this.columns = [];
        _appService.stream$.subscribe(function (value) {
            console.log(value);
            switch (value.message) {
                case 'data':
                    _this.objects = value.data;
                    break;
            }
        });
    }
    BootstrapComponent.prototype.changedFieldHandler = function () {
        this.myChart.update(this.config);
    };
    BootstrapComponent.prototype.changeObject = function (event) {
        // this.appService.getObject()
    };
    BootstrapComponent.prototype.selectColumn = function () {
        console.warn('select', arguments);
    };
    BootstrapComponent.prototype.ngOnInit = function () {
        // this.myChart = Highcharts.chart('container', this.config);
    };
    BootstrapComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    BootstrapComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    BootstrapComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    BootstrapComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return BootstrapComponent;
}());
BootstrapComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // template: `<h1>Hello {{name}}</h1>`
        template: require('./bootstrap.template.pug'),
        // encapsulation: ViewEncapsulation.Native,
        encapsulation: core_1.ViewEncapsulation.Emulated,
        styles: [
            require('./bootstrap.component.styl')
        ]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], BootstrapComponent);
exports.BootstrapComponent = BootstrapComponent;
//# sourceMappingURL=bootstrap.component.js.map