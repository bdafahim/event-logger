import d3, {svg} from "d3";
import React from "react";
import Plot from 'react-plotly.js';


export default function BasicBarChart() {
    // let width;
    // const chart = BarChart(alphabet, {
    //     x: d => d.letter,
    //     y: d => d.frequency,
    //     xDomain: d3.groupSort(alphabet, ([d]) => -d.frequency, d => d.letter), // sort by descending frequency
    //     yFormat: "%",
    //     yLabel: "↑ Frequency",
    //     width,
    //     height: 500,
    //     color: "steelblue"
    // })
    // @ts-ignore

    return (
        <div>
            <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ { title: 'A Fancy Plot'} }
        />

        </div>


    );
}
