import React from "react";
import Plot from 'react-plotly.js';

export default function BarChartCheckIn() {
    let layout = {
        xaxis: {
            title: 'Attendance_checkin_status',
            titlefont: {
                size: 16,
                color: 'rgb(250,9,9)'
            },
            tickfont: {
                size: 14,
                color: 'rgb(229,5,5)'
            }},
        yaxis: {
            title: 'Date',
            titlefont: {
                size: 16,
                color: 'rgb(250,9,9)'
            },
            tickfont: {
                size: 14,
                color: 'rgb(243,15,15)'
            }
        },
        legend: {
            x: 0,
            y: 1.0,
            bgcolor: 'rgb(243,15,15)',
            bordercolor: 'rgb(243,15,15)'
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1
    };
    const attendence_checked_in_data = [{
        x: [291,
            563,
            1969,
            2062,
            2118,
            2130,
            2064,
            363,
            366,
            2027,
            2076,
            2092,
            2104,
            2083,
            400,
            1394,
            2247,
            2628,
            2726,
            2691,
            2764,
            484,
            1470,
        ],
        y: [
            "	Mar 18",
            "	Mar 19",
            "	Mar 20",
            "	Mar 21",
            "	Mar 22",
            "	Mar 23",
            "	Mar 24",
            "	Mar 25",
            "	Mar 26",
            "	Mar 27",
            "	Mar 28",
            "	Mar 29",
            "	Mar 30",
            "	Mar 31",
            "	Apr 01",
            "	Apr 02",
            "	Apr 03",
            "	Apr 04",
            "	Apr 05",
            "	Apr 06",
            "	Apr 07",
            "	Apr 08",
            "	Apr 09",
        ],
        name: 'attendance_checkin_status',
        marker: {color: 'rgb(238,148,12)'},
        type: 'bar'
    }]

    return (
        <div>
            <Plot
                data = {attendence_checked_in_data}
                layout={layout}
            />

        </div>


    );
}
