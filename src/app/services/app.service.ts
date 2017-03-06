import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable"

@Injectable()

export class AppService {
    stream$: Observable<any>;

    private getObjectsList() {
        return new Promise(resolve => resolve(TableObject));
    }

    public getObject(name: string) {
        return new Promise(resolve => {
            let result: any;
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
            resolve(result)
        })
    }

    constructor() {
        this.stream$ = new Observable(observer => {
            setInterval(() => {
                this.getObjectsList().then((data) =>
                    observer.next(
                        {
                            message: 'data',
                            data: data
                        })
                )
            }, 2000)
        });

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