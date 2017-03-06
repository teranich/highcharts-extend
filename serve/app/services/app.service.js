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
var Observable_1 = require("rxjs/Observable");
var AppService = (function () {
    function AppService() {
        var _this = this;
        this.stream$ = new Observable_1.Observable(function (observer) {
            setInterval(function () {
                _this.getObjectsList().then(function (data) {
                    return observer.next({
                        message: 'data',
                        data: data
                    });
                });
            }, 2000);
        });
    }
    AppService.prototype.getObjectsList = function () {
        return new Promise(function (resolve) { return resolve(TableObject); });
    };
    AppService.prototype.getObject = function (name) {
        return new Promise(function (resolve) {
            var result;
            switch (name) {
                case 'Mail':
                    result = {
                        field0: {
                            type: {
                                type: "Date",
                                typePerformance: "Дата"
                            },
                            verbose: "подробное наименование"
                        },
                        field1: {
                            type: {
                                type: "String",
                                typePerformance: "Строка"
                            },
                            verbose: "подробное наименование1"
                        }
                    };
                    break;
                case 'MandatoryFieldsSettings':
                    result = {
                        field0: {
                            type: {
                                type: "Date",
                                typePerformance: "Дата"
                            },
                            verbose: "подробное наименование2"
                        },
                        field1: {
                            type: {
                                type: "String",
                                typePerformance: "Строка"
                            },
                            verbose: "подробное наименование3"
                        }
                    };
                    break;
                case 'AccessGroup':
                    result = {
                        field0: {
                            type: {
                                type: "Date",
                                typePerformance: "Дата"
                            },
                            verbose: "подробное наименование4"
                        },
                        field1: {
                            type: {
                                type: "String",
                                typePerformance: "Строка"
                            },
                            verbose: "подробное наименование5"
                        }
                    };
                    break;
            }
            resolve(result);
        });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
var TableObject = [{
        name: "Mail",
        name1C: "Документ.Сообщение",
        verbose: "Сообщения"
    }, {
        name: "MandatoryFieldsSettings",
        name1C: "Справочник.ITEXP_НастройкиОбязательныхПолей",
        verbose: "Настройки обязательных полей"
    }, {
        name: "AccessGroup",
        name1C: "Справочник.ГруппыДоступа",
        verbose: "Группы доступа"
    }];
//# sourceMappingURL=app.service.js.map