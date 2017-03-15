import { Component, ViewEncapsulation } from '@angular/core';
import { globalVariables } from '../bootstrap/chart.constatnts';
import { AppService } from './../../services/app.service';

import * as Highcharts from "highcharts";

@Component({
    selector: 'my-app',
    template: require('./bootstrap.template.pug'),
    encapsulation: ViewEncapsulation.Native,
    styles: [
        require('bootstrap/dist/css/bootstrap.css').toString(),
        require('font-awesome/css/font-awesome.css').toString(),

        `
        .controlgroup-caption-wrap {
          color: #4e7bd8;
          cursor: pointer;
          font-size: 1.5em;
        }
        //.controlgroup-marker-wrap

        .controlgroup-marker {
          display: inline-block;
          cursor: pointer;
          height: 23px;
          width: 23px;
          background: url(/src/static/images/ico/arrow_group.png) no-repeat center 0px;
          background-position: 0 -23px;

      }
        .controlgroup-marker-collapsed {
          background-position: 0 0;
      }
        .fade.in {
          opacity: 1;
      }

        .modal.in .modal-dialog {
          -webkit-transform: translate(0, 0);
          -o-transform: translate(0, 0);
          transform: translate(0, 0);
      }
        .modal-backdrop.in {
          opacity: 0.5;
      }
          `
    ]
})
export class BootstrapComponent {

    config = {
        style: 'blue',
        chart: {
            type: 'line'
        },
        title: {
            text: 'hello'
        },
        xAxis: {
            title: {
                text: 'Y'
            },
            // categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'X'
            }
        },
        series: [{
            name: '',
            data: [1, 2, 3]
        }]
    };
    value: any;
    objects: Array<any> = [];
    object: any = {};
    field: any = {};
    fields: Array<any> = []
    propFunctions: Array<any> = globalVariables.PROP_FUNCTIONS;
    propFunction: any = this.propFunctions[0]
    propStyles: Array<any> = globalVariables.PROP_STYLES;
    chartTypes: Array<any> = globalVariables.CHART_TYPES;
    myChart: any;
    column: any;
    columns: Array<any> = []
    appService: AppService;

    constructor(appService: AppService) {
        this.appService = appService;
        this.propFunction = this.propFunctions[0]
        appService.getObjectsList()
            // .do(value => console.log(value))
            .map((value: any) => {
                return {
                    id: value.name,
                    text: value.verbose
                }
            })
            // .do((value:any) => console.log(value))
            .subscribe((value: any) => this.objects.push(value))

        // this.loadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')
        // this.loadCSS('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')


    }

    changedFieldHandler() {
        this.myChart.update(this.config)

    }
    changedColumnHandler(event: any) {
        // let series = this.config.series[0];
        // series.data = [];
        // this.myChart.addSeries()
        // series[0].setData([1, 2, 3])

        this.appService.getColumnData(this.object)
            .map((value: Array<any>) => value[event])
            // .bufferWhen()
            // .do((value: Array<any>) => console.log(value))

            .subscribe((value: any) => {
                // this.config.series
                console.warn('th', value)
                this.myChart.series[0].addPoint(value)
            })
    }
    changeObject(event: any) {
        this.appService.getFieldsList(event)
            .map(value => {
                return Object.keys(value).map(name => {
                    return {
                        id: name,
                        text: value[name].verbose
                    }
                })
            })
            .subscribe(value => this.fields = value)

    }

    selectColumn() {
        console.warn('select', arguments)
    }
    ngOnInit() {
        this.myChart = Highcharts.chart('container', this.config);
        console.warn('hey', this.myChart.series)


    }

    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
}
