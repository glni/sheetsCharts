$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(initialize);

    function initialize() {
        drawPieChart("pieChart");
        drawLineChart("lineChart");
    }

    function drawPieChart(HTMLElementId){

        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);

        let options = {
            title: 'My Daily Activities'
        };

        let chart = new google.visualization.PieChart(document.getElementById(HTMLElementId));

        chart.draw(data, options);
    }

    function drawLineChart(HTMLElementId){
        let data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ]);

        let options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        let chart = new google.visualization.LineChart(document.getElementById(HTMLElementId));

        chart.draw(data, options);
    }

});