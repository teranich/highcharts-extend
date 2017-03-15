require('core-js');
require('zone.js');
// require('bootstrap/dist/css/bootstrap.css');
// require('font-awesome/css/font-awesome.css');
// console.warn((<any>window).Highcharts);
//
(<any>window).Highchart = require('highcharts');
require('highcharts/modules/exporting')((<any>window).Highchart);
