$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '12:00 AM',
            Ambient: 40,
            Internal: 65,
            DHW: 80,
            Storage: 75,
            Collector: 42
        }, {
            period: '1:00 AM',
            Ambient: 39,
            Internal: 64,
            DHW: 78,
            Storage: 74,
            Collector: 40
        }, {
            period: '2:00 AM',
            Ambient: 39,
            Internal: 63,
            DHW: 76,
            Storage: 75,
            Collector: 42
        }, {
             period: '3:00 AM',
            Ambient: 38,
            Internal: 65,
            DHW: 80,
            Storage: 73,
            Collector: 38
        }, {
            period: '4:00 AM',
            Ambient: 37,
            Internal: 64,
            DHW: 74,
            Storage: 75,
            Collector: 37
        }, {
            period: '5:00 AM',
            Ambient: 36,
            Internal: 63,
            DHW: 77,
            Storage: 72,
            Collector: 37
        }, {
            period: '6:00 AM',
            Ambient: 35,
            Internal: 65,
            DHW: 76,
            Storage: 71,
            Collector: 35
        }, {
            period: '7:00 AM',
            Ambient: 36,
            Internal: 64,
            DHW: 75,
            Storage: 70,
            Collector: 35
        }, {
            period: '8:00 AM',
            Ambient: 38,
            Internal: 63,
            DHW: 74,
            Storage: 70,
            Collector: 35
        }, {
            period: '9:00 AM',
            Ambient: 40,
            Internal: 65,
            DHW: 74,
            Storage: 70,
            Collector: 42
        }],
        xkey: 'period',
        ykeys: ['Ambient', 'Internal', 'DHW', 'Storage', 'Collector'],
        labels: ['Ambient', 'Internal', 'DHW', 'Storage', 'Collector'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
