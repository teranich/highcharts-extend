import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/observable/from';


@Injectable()

export class AppService {

    public getObjectsList() {
        return Observable.from(TableObject)
    }
    public getFieldsList(object: any) {
        return new Observable(observer => observer.next(TableFieldsMeta[object]))
    }
    public getColumnData(object: any) {
        return Observable.from(TableObjects[object]);
    }
    constructor() {


    }
}

let TableObject: Array<any> = [{
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


let TableFieldsMeta: any =
    {
        'Mail': {
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

        },


        'MandatoryFieldsSettings': {
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
        },

        'AccessGroup': {
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
        }
    }
let TableObjects: any =
    {
        'Mail': [{
            field0: 't@t.ru',
            field1: 12
        }, {
            field0: 't@t.ru',
            field1: 13
        }, {
            field0: 't@t.ru',
            field1: 14
        }],

        'MandatoryFieldsSettings': [{
            field0: '12.11.17',
            field1: 'hello'
        }, {
            field0: '12.11.17',
            field1: 'hello'
        }, {
            field0: '12.11.17',
            field1: 'hello'
        }],

        'AccessGroup': [{
            field0: '14.03.17',
            field1: 'hey2'
        }, {
            field0: '14.03.17',
            field1: 'hey2'
        }, {
            field0: '14.03.17',
            field1: 'hey2'
        }]
    }
