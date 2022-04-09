import Plot from 'react-plotly.js';


export default function PieChartDeviceVersion() {
    let data = [{  values: [
        3239,
        516,
        379,
        262,
        115,
        54,
        50,
        38,
        12,
        9,
        8,
        8,
        7,
        6,
        5,
        4,
        3,
        3,
        2,
        2,
        2,
        2,
        1,
        1,
        1,
        1,
        1,
        1],
        labels: [
            "1.0.6.2",
            "1.0.5.9",
            "2.0.48",
            "1.0.5.8",
            "1.0.5.7",
            "1.0.5.6",
            "2.0.47",
            "2.0.46",
            "1.0.6.1",
            "1.0.5.2",
            "1.0.5.4",
            "1.0.5.5",
            "1.0.4.9",
            "1.0.6.0",
            "2.0.45",
            "1.0.5.1",
            "1.0.4.5",
            "1.0.4.8",
            "1.0.4.6",
            "1.0.5.3",
            "2.0.37",
            "2.0.40",
            "1.0.3.7",
            "2.0.33",
            "2.0.36",
            "2.0.38",
            "2.0.43",
            "2.0.9",
        ],
        type: "pie"
    }
    ]
    let layout = {
        height: 700,
        width: 800
    }
    return (
        <div>
            <h1>Composition by device Version</h1>
            <Plot
                data={data}
                layout={layout}
            />
        </div>

    )
}
