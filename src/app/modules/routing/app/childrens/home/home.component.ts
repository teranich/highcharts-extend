import {Component} from '@angular/core'

import * as Highcharts from "highcharts";
@Component({
    template: require('./home.template.pug')
})

export class HomeComponent {
    constructor() {
        //called first time before the ngOnInit()
    }
    ngOnInit() {
        let myChart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
        });
    }
}
