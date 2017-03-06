import { Component } from '@angular/core';

@Component({
    selector: 'chart-wrapper',
    // template: `<h1>Hello {{name}}</h1>`
    template: require('./chart.component.pug'),
    styles: [
        require('./chart.component.styl')
    ]
})
export class ChartComponent{}
