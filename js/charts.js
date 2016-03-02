/*jslint indent: 2 */
/*global window,console,document,$,google, selectHandler*/

google.load('visualization', '1', {'packages': ['gauge', 'table']});

var tableData, gaugeData, gauge, guageOptions, racerSpeed, cssClassNames;

// Function for drawing the chart
function drawChart() {

  'use strict';

  var pieChart;

  pieChart = document.getElementById('piechart');

  racerSpeed = 0;

  // Create a data table for the chart
  gaugeData = google.visualization.arrayToDataTable([
    ['label', 'Value'],
    ['MPS', racerSpeed]
  ]);

  guageOptions = {
    max: 2.5,
    redFrom: 2,
    redTo: 2.5,
    yellowFrom: 1.75,
    yellowTo: 2,
    greenFrom: 1.35,
    greenTo: 1.75,
    minorTicks: 4,
    width: 150,
    animation: {duration: 400, easing: 'out'}
  };

  // Define the chart variable
  gauge = new google.visualization.Gauge(pieChart);
  gauge.draw(gaugeData, guageOptions, cssClassNames);

}

function drawTable() {

  'use strict';

  var table, options;

  tableData = new google.visualization.DataTable();

  tableData.addColumn('number', 'Distance');
  tableData.addColumn('string', 'Stroke');
  tableData.addColumn('number', 'Time');
  tableData.addColumn('string', 'Date');
  tableData.addColumn('string', 'Swimmer');
  tableData.addRows([
    [
      50,
      'Free',
      {v: 24.06, f: '24.06'},
      'July 5, 2013',
      'Jeremy R. Estes'
    ],
    [
      100,
      'Free',
      {v: 51.93, f: '51.93'},
      'June 5, 2002',
      'Kurt Cady'
    ],
    [
      200,
      'Free',
      {v: 131.93, f: '1:51.93'},
      'July 14, 2011',
      'Robert Hommel'
    ],
    [
      400,
      'Free',
      {v: 239.76, f: '3:59.76'},
      'July 14, 2011',
      'Robert Hommel'
    ],
    [
      800,
      'Free',
      {v: 489.99, f: '8:09.99'},
      'Aug 4, 2009',
      'Zane Grothe'
    ],
    [
      1500,
      'Free',
      {v: 936.54, f: '15:36.54'},
      'July 22, 2009',
      'Zane Grothe'
    ]
  ]);

  table = new google.visualization.Table(document.getElementById('table_div'));

  // options = {
  //   cssClassNames = {headerRow: 'bigAndBoldClass', tableRow: 'tableRowClass', selectedTableRow: 'selectedRowClass',  hoverTableRow: 'highlightClass'}
  // }

  google.visualization.events.addListener(table, 'select', selectHandler);
  table.draw(tableData);

  function selectHandler() {
    var time, distance, selectedItem = table.getSelection()[0];

    if (selectedItem) {

      time = tableData.getValue(selectedItem.row, 2);
      distance = tableData.getValue(selectedItem.row, 0);
      racerSpeed = distance / time;
      racerSpeed = parseFloat(racerSpeed.toFixed(2));

      console.log(distance, time, racerSpeed);
      // Create a data table for the chart
      // Create a data table for the chart
      gaugeData = google.visualization.arrayToDataTable([
        ['label', 'Value'],
        ['MPS', racerSpeed]
      ]);
      gauge.draw(gaugeData, guageOptions);

    }

  }

  $('.google-visualization-table-tr-head').css({
    'background-color': '#c84343',
    'color': '#fff',
    'padding': '5px 10px'
  });
  $('.google-visualization-table').css({
    'border': '1px solid #c84343',
    'border-right': '0px solid',
    'margin': '20px 0',
    'width': '600px'
  });
  $('.google-visualization-table-table').css({
    'font-family': 'Raleway',
    'width': '100%'
  });
  $('.google-visualization-table-th.gradient').css({
    'background-image': 'none',
    'text-align': 'center'
  });
  $('.google-visualization-table-table th').css({
    'border': '1px solid #c84343'
  });
  $('.google-visualization-table-table td').css({
    'border-right': '1px solid #c84343'
  });



}

google.setOnLoadCallback(drawTable);
google.setOnLoadCallback(drawChart);
